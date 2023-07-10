import React from "react";
import "./page3.css";
import Line6Svg from '../../images/Line 6.svg'
import LessThanPng from '../../images/Less Than.png'
import MoreThanPng from '../../images/More Than.png'
import { useNavigate } from 'react-router-dom';

export const SupplierPage3 = React.memo(() => {
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate('/system');
  };
  
  const handleGoToExperimenPage = () => {
    navigate('/experiment/2');
  };

  const handleGoToDataPage = () => {
    navigate('/data');
  };

  return (
    <div className="SupplierPage3">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="view-4">
            <div className="view-5">
              <img className="line-4" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-7">产品名称</div>
              <div className="text-wrapper-8">产品型号</div>
              <div className="text-wrapper-9">交付哈希值</div>
            </div>
            <div className="div-2">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-3">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-4">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-5">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-6">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-7">
              <img className="line-5" alt="Line" src={Line6Svg}/>
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-8">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-9">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-10">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-11">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
          </div>
          <div className="view-6">
            <div className="overlap-group-wrapper-2">
              <div className="overlap-group-2">
                <div className="text-wrapper-13">1</div>
              </div>
            </div>
            <div className="overlap-wrapper-2">
              <div className="overlap-7">
                <div className="text-wrapper-13">2</div>
              </div>
            </div>
            <div className="overlap-wrapper-3">
              <div className="overlap-7">
                <div className="text-wrapper-13">3</div>
              </div>
            </div>
            <img className="less-than" alt="Less than" src={LessThanPng} />
            <img className="less-than-2" alt="Less than" src={MoreThanPng} />
          </div>
        </div>
      </div>
    </div>
  );
});
