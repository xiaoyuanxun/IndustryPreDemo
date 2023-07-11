import React, { useState } from "react";
import "./page2.css";
import OkPng from '../../images/Ok.png'
import BulletListPng from '../../images/Bullet List.png'
import { useNavigate, useLocation } from 'react-router-dom';
import { PageFunctionTitle } from '..//Basic';
import LongLine from '../../images/SupplierPage2Line.png';
import ProgressPng from '../../images/SupplierPage2Progress.png';

interface ProductInfo {
  productHashCode?: string;
}

export const SupplierPage2 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递过来的消息 : ', messages);

  const [productHashCode ] = useState(messages?.productHashCode || '');
  const navigate = useNavigate();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(productHashCode);
      alert('已复制到剪贴板');
    } catch (error) {
      console.error('复制失败:', error);
    }
  }

  const handleGoToSupplier3Page = () => {
    navigate('/supplier/3');
  };

  return (
    <div className="SupplierPage2">
      <PageFunctionTitle titleName='完成提交'/>
      <div className="SupplierPage2-box">
        <div className="SupplierPage2-box-1">
          <img className="SupplierPage2-ok" alt="Ok" src={OkPng} />
          <div className="SupplierPage2-box-1-title">
            提交成功
          </div>
        </div>
        <div className="SupplierPage2-box-2">
          <div className="SupplierPage2-box-2-title">
            入库哈希编码
          </div>
          <div className="SupplierPage2-box-2-box">
            <div className="SupplierPage2-box-2-box-hash">
            {/* 0xc7ecef7dde2193bc6a6cba6b0b7f98bd6ec8739b7a928cbf09945ba93c8979cc */}
              {productHashCode}
            </div>
          </div>
          <div className="SupplierPage2-box-2-box-copy" onClick={handleCopy}>
            <div className="SupplierPage2-box-2-box-copy-title">
              复制
            </div>
          </div>
        </div>
        <img className="SupplierPage2-box-line" alt="Line" src={LongLine} />
        <div className="SupplierPage2-box-3" onClick={handleGoToSupplier3Page}>
          <img className="SupplierPage2-box-3-button" alt="button" src={BulletListPng} onClick={handleGoToSupplier3Page}/>
          <div className="SupplierPage2-box-3-title" onClick={handleGoToSupplier3Page}>
            查看交付列表
          </div>
        </div>
      </div>
      <div className="SupplierPage2-progress">
          <div className="SupplierPage2-progress-title">
            3/3
          </div>
          <img className="SupplierPage2-progress-image" alt="progress" src={ProgressPng} />
      </div>
    </div>
  );
});
