// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "hardhat/console.sol";

//我们定义，序列号生成算法为产品型号(8位bytes)-供应时间-批次Id(bytes8)-标识ID，互相拼接得到。
//如一个配件产品型号为HDAE4578,批次id为1004593,标识ID为10009999（在给定范围（10000001-10010000）选出,这个范围由供应商输入的数字再加上10000000得到），则
//该配件序列号为HDAE4578_1004593_10009999
 contract BaseInfo{
    uint256 constant BASE=10000000;
    uint256 supplyID=BASE;//供应ID
    uint256 enterID=BASE;//入库ID
    uint256 outID=BASE;//出库ID
    uint256 batchID=BASE; //批次ID，同于区分不同批次的配件
    uint256 constant rootCompIndex=0; //一个批次的根配件信息索引
  
    //配件comp的状态
    enum State { 
        Waiting, //待确认
        Ensured, //已入库
        Out,    //已出库
        Finish  //已完成，代表该批次配件已全部出库
    }
    //配件信息结构体
    struct Component { 
        string compName; //配件名
        string modeNumber; //配件型号
        uint256 maxSerialNumber; //配件该批次最大序列号
        uint256 minSerialNumber; //配件该批次最小序列号
        uint256 supplyID; //供应ID
        uint256 supplyTime; //供应时间
        uint256 enterID; //入库厂家ID
        uint256 enterTime; //入库时间
        uint256 outID;   //厂家出库ID
        uint256 outTime;//出库时间
        uint256 batchID; //批次ID，自动生成，用于标识这批配件
        State state; //当前配件批次的状态
        string note; //备注
    }

    //产品信息
    struct Product {
        string productName; //产品名
        string modeNumber; //型号
        string note;       //备注
    }
    
    mapping(bytes32 => uint256) hashTable; //通过hash值映射到批次Id,得到对应配件批次ID
    mapping(string =>uint256[]) batchs;    //每个产品型号可以有多个不同的批次，同一型号必须等待上一批次出库finish后（即该批次所有配件都出库），才能供应新批次，每个最新加入的批次总是放在数组的末尾
    mapping(string =>uint256) batchsLen;  //型号对应的批次数量
    mapping(uint256 => Component[]) components;  //通过批次id得到对应产品，如果这批产品是分批出库，则这个此次又可以对应多个components,第一个component用于保存未完全出库的配件
    mapping(uint256 =>uint256 ) compsLen;  //批次对应的配件信息的数量
    mapping(string => Product) products;    //通过产品型号得到对应产品信息
    mapping(string => bytes32[]) supplyHashs;  //某个产品型号的历史提交hash
    string[] modeNumbers;//所有的配件型号
    
    event EnterStorge(string  out);
    event OutStorge(
        string modeNumber,
        uint256 time, 
        uint256 batchId,
        uint256 minserialNumber,
        uint256 maxserialNumber
    );
    event SupplyComponent(string,bytes32 hashvalue);
   
}

contract BloackIoTManager is BaseInfo {
    address owner;
    mapping(address=>bool) whiteLists; //白名单操作员

    receive() external payable {}

    // * fallback function
    fallback() external payable {}   

     constructor() {
        owner = msg.sender;
        whiteLists[msg.sender]=true;
    }

    modifier onlyOwner() {
        require(msg.sender==owner,"only owner!");
        _;
    }
    
    modifier onlyWiteList() {
        require(whiteLists[msg.sender],"err,only whiteList!");
        _;
    }
    
    //供应配件函数，返回hash编码
    function supplyComponent(string calldata _compName,string calldata _modeNumber,uint256 _minSerialNumber,uint256 _maxSerialNumber,string memory _note) external onlyWiteList returns(bytes32 ){
        //生成一个配件信息结构体,可加逻辑：供应时自动根据配件信息是否已经存在来创建新产品信息（调用creatInfo）
        Component memory component=Component(_compName, _modeNumber,BASE+_maxSerialNumber,BASE+_minSerialNumber,supplyID,block.timestamp,0,0,0,0,batchID,State.Waiting,_note);
        bytes32 _hashcode=getHash(_compName,_modeNumber,batchID); //生成hash
        hashTable[_hashcode]=batchID;
        supplyHashs[_modeNumber].push(_hashcode);
        batchs[_modeNumber].push(batchID);    
        components[batchID].push(component);
        compsLen[batchID]++; 
        supplyID += 1;
        batchID += 1;
        // supplyID=supplyID++;
        // batchID=batchID++;
        emit SupplyComponent("supply succeefully,generate hash is ",_hashcode);
        return _hashcode;
    }
    
    //入库函数,设置入库ID和入库时间,由hash表获得批次ID，由于是该批次入库，所以所包含的compentons数量为1;
    //这里有一个要求，同一型号的配件，必须上一批次所有配件都出库后，才能继续入库,注意，这里的batchslen储存的是已经入库的配件批次数量
    //入库成功后batchs长度会增加
    function enterStorge(bytes32  _hashcode) external onlyWiteList {
        uint256 _batchID =hashTable[_hashcode];
        console.log('_batchID = ', _batchID);
        string memory _modeNumber=components[_batchID][rootCompIndex].modeNumber;
        // bug 更改
        // require(getCanEnterStorge(_modeNumber),"err,this modenumber's lastBatch not finish!");
        // 有 bug, 暂时注释不查询
        // require(!getCanEnterStorge(_modeNumber),"err,this modenumber's lastBatch not finish!");
        require(_batchID!=0,"incorrect hashcode!");
        require(components[_batchID][rootCompIndex].state==State.Waiting,"not waiting!");
        components[_batchID][rootCompIndex].state=State.Ensured;
        components[_batchID][rootCompIndex].enterID=enterID;
        components[_batchID][rootCompIndex].enterTime=block.timestamp;
        // batchsLen[components[_batchID][rootCompIndex].modeNumber]++;   //这里是型号对应的入库批次的数量增加，而不是batchID增加
        batchsLen[_modeNumber]++;   //这里是型号对应的入库批次的数量增加，而不是batchID增加
        enterID++;
        emit EnterStorge("enter successfully!");
    }

    //检查是否可以入库，通过型号找到该型号所对应的最近一次的批次ID，检查这批配件是否已经完全出库
    //完全出库,状态为finish，返回true，未完全出库，返回flase，
    //只有该型号的lastbatch的所有配件都出库完成，该型号才可以继续入库。
    function getCanEnterStorge(string memory _modeNumber) internal view returns(bool){
        console.log('batchsLen[_modeNumber] = ', batchsLen[_modeNumber]);
        // bug 更改
        // 第一个配件进来时 batchsLen[_modeNumber] = 0, -1 会溢出
        // uint256 lastBatch = batchs[_modeNumber][batchsLen[_modeNumber]-1];
        if(batchsLen[_modeNumber]==0) return true;
        uint256 lastBatch = batchs[_modeNumber][batchsLen[_modeNumber]-1];
        console.log('lastBatch = ', lastBatch);
        console.log('the result = ', components[lastBatch][rootCompIndex].state==State.Finish);
        return(components[lastBatch][rootCompIndex].state==State.Finish);
    }
    
    //配件出库，选择一个该批次内还未出库的序列号范围内的序列号作为最大序列号，然后将该批次还未出库的序列号的最小序列号和这个最大序列号之间的配件全部出库，
    //再将新的根comp的未出库的最小序列号设置为这个序列号，从而达到可以记录分批出库的笑果
    //然后新建一个compenton，为这批出库的配件设置它的出库时间和出库ID，
    //如果这个批次的配件全部出库成功，则根comp状态设置为finish，此时可以接受下一批该型号的配件出库
    function OutStroge(string calldata _modeNumber,uint256 _maxSerialNumber) external onlyWiteList returns(Product memory product,uint256 actualMinserialNumber,uint256 actualMaxserialNumber) {
        _maxSerialNumber+=BASE;
        uint256 _lastbatch=batchs[_modeNumber][batchsLen[_modeNumber]-1];
        Component memory _newComp = components[_lastbatch][rootCompIndex];
        require(_maxSerialNumber>_newComp.minSerialNumber,"can't out those products,these haved out!!");
        if(_maxSerialNumber<_newComp.maxSerialNumber){ //部分出库，即范围没有覆盖rootcomp的所有未出库的配件序列号范围
            components[_lastbatch][rootCompIndex].minSerialNumber=_maxSerialNumber;
            _newComp.maxSerialNumber=_maxSerialNumber;
            _newComp.outID=outID;
            _newComp.outTime=block.timestamp;
            _newComp.state=State.Finish;
            components[_lastbatch].push(_newComp);
            outID++;
            compsLen[_lastbatch]++;
        }else{ //全部出库
            components[_lastbatch][rootCompIndex].outID=outID;
            components[_lastbatch][rootCompIndex].outTime=block.timestamp;
            components[_lastbatch][rootCompIndex].state=State.Finish;
            outID++;
        }
        product=getProductInfo(_modeNumber);
        //型号，批次ID，范围
        actualMinserialNumber=_newComp.minSerialNumber;
        actualMaxserialNumber=_newComp.maxSerialNumber;
       //我们定义，序列号生成算法为产品型号(8位bytes)-供应时间-批次Id(bytes8)-标识ID，互相拼接得到。
       emit OutStorge(
            _modeNumber,
            components[_lastbatch][rootCompIndex].supplyTime, 
            _lastbatch,
            actualMinserialNumber,
            actualMaxserialNumber
       );
    }
    
    //通过型号创建产品信息,如果不存在，则创建，如果存在，则更新
    function creatOrupdateInfo(string memory _productName,string memory  _modeNumber,string memory note) public onlyWiteList returns (bool) {
        require(bytes(_modeNumber).length!=0,"invalid modeNumber!"); //型号不能为空
        if(bytes(products[_modeNumber].modeNumber).length==0){
        Product memory product = Product(_productName,_modeNumber,note);
        products[_modeNumber]=product;
        modeNumbers.push(_modeNumber);
        }else{
            //更新
            products[_modeNumber].productName=_productName;
            products[_modeNumber].note=note;
        }
        return true;
    }
    
    //通过hash哈希获得入库状态
    function  getStateByHash(bytes32 _hashcode) external view returns (State state) {
        uint256 _batchID =hashTable[_hashcode];
        state=components[_batchID][0].state;
    }
    
    //通过hash哈希获得产品型号
    function  getModelNumberByHash(bytes32 _hashcode) external view returns (string memory) {
        uint256 _batchID =hashTable[_hashcode];
        string memory _modeNumber=components[_batchID][rootCompIndex].modeNumber;
        return _modeNumber;
    }
    //获得某种产品型号下历史交付hash值
    function getHistoryHashsByModelNumber(string calldata _modelNumber) public view returns (bytes32[] memory){
        return supplyHashs[_modelNumber];
    }

    //通过hash哈希获得配件的序列号范围
    function  getCompInfoRangeNumberByHash(bytes32 _hashcode) external view returns (uint256, uint256) {
        uint256 _batchID =hashTable[_hashcode];
        uint256 _minSerialNumber = components[_batchID][rootCompIndex].minSerialNumber;
        uint256 _maxSerialNumber = components[_batchID][rootCompIndex].maxSerialNumber;
        return (
            _minSerialNumber,
            _maxSerialNumber
        );
    }

    //通过modeNumber型号获得产品信息
    function getProductInfo(string calldata _modeNumber) public view returns (Product memory) {
        return products[_modeNumber];
    }

    function getCompInfoRangeNumberByModelNumber(string calldata _modeNumber) public view returns (uint256, uint256) {
        uint256 _batchID = batchs[_modeNumber][rootCompIndex];
        uint256 _minSerialNumber = components[_batchID][rootCompIndex].minSerialNumber;
        uint256 _maxSerialNumber = components[_batchID][rootCompIndex].maxSerialNumber;
        return (
            _minSerialNumber,
            _maxSerialNumber
        );
    }

    //获得所有配件型号列表
    function  getModeList() external view returns (string[] memory) {
        return modeNumbers;
    }
    
    //获得所有产品列表
    function  getProductList() external view returns (Product[] memory) {
        uint256 length = modeNumbers.length;
        Product[] memory allValues = new Product[](length);

        for (uint256 i = 0; i < length; i++) {
            allValues[i] = products[modeNumbers[i]];
        }

        return allValues;
    }
    
    //通过型号，批次ID，随机值查询配件信息
    //链下解析序列号得到这三个值
    function getCompInfo(string calldata _modeNumber,uint256 _batchID,uint256 _specialID) external view  returns (Component memory) {
        require(batchs[_modeNumber].length!=0,"invalid modeNumber!!");
        Component[] memory _comps=components[_batchID];

        //由后往前查，更容易查出新出库的序列号所在的comp批次，节省时间
        for(uint i=_comps.length-1;i >=0;i--){
            if(_comps[i].minSerialNumber<=_specialID&&_comps[i].maxSerialNumber>_specialID)
                return _comps[i];           
        }
        revert("Invalid serial number!");
    }


    //添加,删除白名单权限
    function setWhiteList(address user,bool status) external onlyOwner  {
        whiteLists[user]=status;
    }
    
    //生成对应哈希
    function getHash(string memory _compName, string calldata _modeNumber,uint256 _batchID) public pure returns (bytes32 _hashcode) {
        _hashcode=keccak256(abi.encodePacked(_compName,_modeNumber,_batchID));
    }
}
