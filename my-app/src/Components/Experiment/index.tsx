import React from "react";
import "./index.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import CarRepairSvg from '../../images/Car repair.svg'
import Vector2Svg from '../../images/vector-2.svg'
import Vector3Svg from '../../images/vector-3.svg'
import Vector from '../../images/Vector.svg'

export const Experiment_1 = React.memo(() => {
  return (
    <div className="page1-element">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="view">
              <div className="overlap-group-wrapper">
                <div className="div">
                  <h1 className="text-wrapper">系统首页</h1>
                  <img className="line" alt="Line" src={lineSvg} />
                  <img className="img" alt="Booking" src={BookingPng} />
                </div>
              </div>
              <div className="overlap-2">
                <div className="div-wrapper">
                  <div className="overlap-3">
                    <div className="text-wrapper-2">参与实验</div>
                    <img className="line-2" alt="Line" src={lineSvg} />
                    <img className="img" alt="Computer support" src={ComputerSupportPng}/>
                  </div>
                </div>
                <div className="view-2">
                  <div className="overlap-4">
                    <div className="text-wrapper">实验数据</div>
                    <img className="line" alt="Line" src={lineSvg} />
                    <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng} />
                  </div>
                </div>
              </div>
            </div>
            <div className="tittle">
              <div className="overlap-5">
                <div className="text-wrapper-3">区块链物联网实训系统</div>
                <img className="image" alt="Image" src={schooLogoPng} />
                <div className="text-wrapper-4">张三</div>
                <img className="account" alt="Account" src={AccountPng} />
              </div>
            </div>
          </div>
          <div className="selection">
            <div className="overlap-6">
              <div className="text-wrapper-5">汽车组装工厂</div>
              <img className="car-repair" alt="Car repair" src={CarRepairSvg} />
            </div>
          </div>
          <div className="selected">
            <div className="overlap-7">
              <div className="text-wrapper-6">汽车组装工厂</div>
              <img className="car-repair-2" alt="Car repair" src={CarRepairSvg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// export const Experiment_1 = React.memo(() => {
//     return (
//     //   <div className="page1-element">
//         <div className="overlap-wrapper">
//           <div className="overlap">
//             <div className="overlap-group">
//               <div className="view">
//                 <div className="overlap-group-wrapper">
//                   <div className="div">
//                     <h1 className="text-wrapper">系统首页</h1>
//                     <img className="line" alt="Line" src={lineSvg} />
//                     <img className="img" alt="Booking" src={BookingPng} />
//                   </div>
//                 </div>
//                 <div className="overlap-2">
//                   <div className="div-wrapper">
//                     <div className="overlap-3">
//                       <div className="text-wrapper-2">参与实验</div>
//                       <img className="line-2" alt="Line" src={lineSvg} />
//                       <img className="img" alt="Computer support" src={ComputerSupportPng}/>
//                     </div>
//                   </div>
//                   <div className="view-2">
//                     <div className="overlap-4">
//                       <div className="text-wrapper">实验数据</div>
//                       <img className="line" alt="Line" src={lineSvg} />
//                       <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* <div className="tittle">
//                 <div className="overlap-5">
//                   <div className="text-wrapper-3">区块链物联网实训系统</div>
//                   <img className="image" alt="Image" src={schooLogoPng} />
//                   <div className="text-wrapper-4">张三</div>
//                   <img className="account" alt="Account" src={AccountPng} />
//                 </div>
//               </div> */}
//             </div>
//             <div className="selection">
//               <div className="overlap-6">
//                 <div className="text-wrapper-5">汽车组装工厂</div>
//                 <img className="car-repair" alt="Car repair" src={CarRepairSvg} />
//               </div>
//             </div>
//             <div className="selected">
//               <div className="overlap-7">
//                 <div className="text-wrapper-6">汽车组装工厂</div>
//                 <img className="car-repair-2" alt="Car repair" src={CarRepairSvg} />
//               </div>
//             </div>
//           </div>
//         </div>
//     //   </div>
//     );
//   });

  
export const Experiment_2 = React.memo(() => {
    return (
      <div className="page2-element">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group">
              <div className="view">
                <div className="overlap-group-wrapper">
                  <div className="div">
                    <div className="text-wrapper">系统首页</div>
                    <img className="line" alt="Line" src={lineSvg}/>
                    <img className="img" alt="Booking" src={BookingPng}/>
                  </div>
                </div>
                <div className="overlap-2">
                  <div className="div-wrapper">
                    <div className="overlap-3">
                      <div className="text-wrapper-2">参与实验</div>
                      <img className="line-2" alt="Line" src={lineSvg} />
                      <img className="img" alt="Computer support" src={ComputerSupportPng} />
                    </div>
                  </div>
                  <div className="view-2">
                    <div className="overlap-4">
                      <div className="text-wrapper">实验数据</div>
                      <img className="line" alt="Line" src={lineSvg} />
                      <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tittle">
                <div className="overlap-5">
                  <div className="text-wrapper-3">区块链物联网实训系统</div>
                  <img className="image" alt="Image" src={schooLogoPng} />
                  <div className="text-wrapper-4">张三</div>
                  <img className="account" alt="Account" src={AccountPng} />
                </div>
              </div>
            </div>
            <div className="view-3">
              <div className="overlap-6">
                <h1 className="text-wrapper-5">配件供应商</h1>
                <img className="vector" alt="Vector" src={Vector} />
              </div>
            </div>
            <div className="view-4">
              <div className="overlap-7">
                <div className="text-wrapper-6">
                  新能源汽车
                  <br />
                  加工厂
                </div>
                <div className="group">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                    <img className="vector-2" alt="Vector" src={Vector2Svg} />
                  </div>
                </div>
              </div>
            </div>
            <div className="view-5">
              <div className="overlap-6">
                <div className="text-wrapper-5">新能源车主</div>
                <img className="vector-3" alt="Vector" src={Vector3Svg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });