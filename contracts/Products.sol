// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract ProductsChain {

    struct Product {
        string productName;
        string productDescription;
        string productSerialNumber;
        uint256 timestamp;
        mapping(uint256 => ProductLink) productLink;
        uint256 productLinkCount;
    }

    struct ProductLink {
        string productName;
        string productDescription;
        string productSerialNumber;
        uint256 timestamp;
    }
    
    uint256 productIndex;
    mapping(uint256 => Product) private products;

    // 新建一个产品链
    function createProductChain(
        string memory _productName,
        string memory _productDescription,
        string memory _productSerialNumber,
        uint256 _timestamp
    ) public {
        Product storage newProduct = products[productIndex];
        newProduct.productName = _productName;
        newProduct.productDescription = _productDescription;
        newProduct.productSerialNumber = _productSerialNumber;
        newProduct.timestamp = _timestamp;
        newProduct.productLinkCount = 0;

        productIndex++;
    }   

    // 增加某一链条信息
    function addProductLink(
        uint256 _productIndex,
        string memory _productName,
        string memory _productDescription,
        string memory _productSerialNumber,
        uint256 _timestamp
    ) public {
        require(_productIndex < productIndex, "Invalid product index");

        Product storage product = products[_productIndex];

        ProductLink memory newLink = ProductLink(
            _productName,
            _productDescription,
            _productSerialNumber,
            _timestamp
        );

        product.productLink[product.productLinkCount] = newLink;
        product.productLinkCount++;
    }

    // 查询现有产品链条
    function getProductChain(uint256 _productIndex) public view returns (ProductLink[] memory) {
        require(_productIndex < productIndex, "Invalid product index");

        Product storage product = products[_productIndex];
        uint256 linkCount = product.productLinkCount;

        ProductLink[] memory chain = new ProductLink[](linkCount);

        for (uint256 i = 0; i < linkCount; i++) {
            chain[i] = product.productLink[i];
        }

        return chain;
    }

    function getProductInfo(uint256 _productIndex) public view returns (
        string memory, 
        string memory, 
        string memory, 
        uint256, uint256
    ) {
        return (
            products[_productIndex].productName,
            products[_productIndex].productDescription,
            products[_productIndex].productSerialNumber,
            products[_productIndex].timestamp,
            products[_productIndex].productLinkCount     
        );
    }

    function getProductIndex() public view returns (uint256) {
        return productIndex;
    }
}
