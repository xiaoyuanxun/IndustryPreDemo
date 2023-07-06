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
import lineStack1Png from '../../images/line-stack 1.png'
import PieChartSvg from '../../images/Pie Chart.svg'
import Line3Svg from '../../images/Line 3.svg'
import GroupPng from '../../images/Group.png'
import ComputersConnectingPng from '../../images/Computers Connecting.png'
import SystemReportPng from '../../images/System Report.png'
import ArrowSvg from '../../images/Arrow.svg'
import { useNavigate } from 'react-router-dom';

export const Data =  React.memo(() => {
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
    <div className="data-screen">
      <div className="div">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <img className="line" alt="Line" src={lineSvg} />
              <div className="text-wrapper">区块链状态</div>
              <div className="text-wrapper-2">区块高度</div>
              <h1 className="h-1">3000</h1>
              <div className="text-wrapper-3">数据存储量</div>
              <div className="text-wrapper-4">100GB</div>
              <div className="text-wrapper-5">区块链运行状态</div>
              <div className="text-wrapper-6">正常</div>
              <div className="text-wrapper-7">最大TPS</div>
              <div className="text-wrapper-8">1000</div>
              <div className="text-wrapper-9">区块链交互次数</div>
              <div className="text-wrapper-10">1000</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper">最新区块</div>
              <img className="img" alt="Line" src={Line3Svg} />
              <div className="div-2">
                <p className="validated-by">
                  <span className="span">Validated By </span>
                  <span className="text-wrapper-11">Validator: Validator 1</span>
                </p>
                <p className="element-txns-in-secs">
                  <span className="text-wrapper-12">10 txns</span>
                  <span className="text-wrapper-13"> in 3 secs</span>
                </p>
                <div className="group-2">
                  <div className="group-3">
                    <div className="text-wrapper-14">10 secs ago</div>
                    <div className="text-wrapper-15">1000001</div>
                  </div>
                  <div className="bk-logo">
                    <div className="div-wrapper">
                      <div className="text-wrapper-16">Bk</div>
                    </div>
                  </div>
                </div>
                <img className="line-2" alt="Line" src={Line3Svg}/>
              </div>
              <div className="div-3">
                <p className="validated-by">
                  <span className="span">Validated By </span>
                  <span className="text-wrapper-11">Validator: Validator 1</span>
                </p>
                <p className="element-txns-in-secs">
                  <span className="text-wrapper-12">10 txns</span>
                  <span className="text-wrapper-13"> in 3 secs</span>
                </p>
                <div className="group-2">
                  <div className="group-3">
                    <div className="text-wrapper-14">10 secs ago</div>
                    <div className="text-wrapper-15">1000001</div>
                  </div>
                  <div className="bk-logo">
                    <div className="div-wrapper">
                      <div className="text-wrapper-16">Bk</div>
                    </div>
                  </div>
                </div>
                <img className="line-2" alt="Line" src={Line3Svg} />
              </div>
              <div className="block">
                <p className="validated-by">
                  <span className="span">Validated By </span>
                  <span className="text-wrapper-11">Validator: Validator 1</span>
                </p>
                <p className="element-txns-in-secs">
                  <span className="text-wrapper-12">10 txns</span>
                  <span className="text-wrapper-13"> in 3 secs</span>
                </p>
                <div className="group-2">
                  <div className="group-3">
                    <div className="text-wrapper-14">10 secs ago</div>
                    <div className="text-wrapper-15">1000001</div>
                  </div>
                  <div className="bk-logo">
                    <div className="div-wrapper">
                      <div className="text-wrapper-16">Bk</div>
                    </div>
                  </div>
                </div>
              </div>
              <img className="line-3" alt="Line" src={Line3Svg} />
              <div className="text-wrapper-17">查看全部区块</div>
              <img className="arrow" alt="Arrow" src={ArrowSvg} />
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-3">
              <div className="text-wrapper-18">总节点数量</div>
              <div className="text-wrapper-19">运行节点数量</div>
              <div className="text-wrapper-20">8</div>
              <div className="text-wrapper-21">7</div>
              <img className="line" alt="Line" src={Line3Svg} />
              <div className="text-wrapper">区块链节点</div>
              <img className="group-4" alt="Group" src={GroupPng}/>
            </div>
          </div>
          <div className="group-5">
            <div className="overlap-4">
              <div className="text-wrapper">区块链节点</div>
              <img className="img" alt="Line" src={Line3Svg} />
              <img className="computers-connecting" alt="Computers connecting" src={ComputersConnectingPng} />
              <img className="computers-connecting-2" alt="Computers connecting" src={ComputersConnectingPng} />
              <img className="computers-connecting-3" alt="Computers connecting" src={ComputersConnectingPng} />
              <img className="computers-connecting-4" alt="Computers connecting" src={ComputersConnectingPng} />
              <img className="computers-connecting-5" alt="Computers connecting" src={ComputersConnectingPng}/>
              <img className="computers-connecting-6" alt="Computers connecting" src={ComputersConnectingPng}/>
              <img className="computers-connecting-7" alt="Computers connecting" src={ComputersConnectingPng}/>
              <img className="system-report" alt="System report" src={SystemReportPng} />
            </div>
          </div>
          <div className="overlap-5">
            <div className="group-6">
              <div className="overlap-6">
                <img className="line" alt="Line" src={Line3Svg} />
                <div className="text-wrapper">学习材料</div>
                <div className="view">
                  <div className="text-wrapper-22">课件</div>
                  <div className="text-wrapper-23">40</div>
                </div>
                <div className="view-2">
                  <div className="text-wrapper-24">教学视频</div>
                  <div className="text-wrapper-25">10</div>
                </div>
                <div className="view-3">
                  <div className="text-wrapper-26">学习实验</div>
                  <div className="text-wrapper-27">20</div>
                </div>
                <div className="view-4">
                  <div className="text-wrapper-28">参考文献</div>
                  <div className="text-wrapper-29">100</div>
                </div>
                <img className="image" alt="Image" src={PieChartSvg} />
              </div>
            </div>
            <div className="group-7">
              <div className="view-5">
                <div className="text-wrapper-30">实验趋势</div>
                <img className="line-stack" alt="Line stack" src={lineStack1Png} />
              </div>
              <div className="view-6">
                <div className="text-wrapper-30">参与实验时长</div>
                <p className="element">
                  <span className="text-wrapper-31">100 </span>
                  <span className="text-wrapper-32">小时</span>
                  <span className="text-wrapper-31"> 00 </span>
                  <span className="text-wrapper-32">分钟</span>
                  <span className="text-wrapper-31"> 00 </span>
                  <span className="text-wrapper-32">秒</span>
                </p>
              </div>
              <div className="view-7">
                <div className="text-wrapper-33">实验课程进度</div>
                <div className="rectangle-wrapper">
                  <div className="rectangle" />
                </div>
                <div className="text-wrapper-34">1%</div>
              </div>
            </div>
            <div className="view-8">
              <div className="view-9">
                <div className="overlap-group-2">
                  <div className="text-wrapper-35" onClick={handleGoToHomePage}>
                    系统首页
                  </div>
                  <img className="line-4" alt="Line" src={lineSvg}/>
                  <img className="img-2" alt="Booking" src={BookingPng} />
                </div>
              </div>
              <div className="overlap-7">
                <div className="view-10">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-36" onClick={handleGoToExperimenPage}>
                      参与实验
                    </div>
                    <img className="line-5" alt="Line" src={lineSvg}/>
                    <img className="img-2" alt="Computer support" src={ComputerSupportPng} />
                  </div>
                </div>
                <div className="view-11">
                  <div className="overlap-8">
                    <div className="text-wrapper-35"onClick={handleGoToDataPage}>
                      实验数据
                    </div>
                    <img className="line-4" alt="Line" src={lineSvg} />
                    <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng} />
                  </div>
                </div>
              </div>
            </div>
            <></>
            <div className="tittle">
              <div className="overlap-9">
                <div className="rectangle-2" />
                <div className="text-wrapper-37">区块链物联网实训系统</div>
                <img className="image-2" alt="Image" src={schooLogoPng} />
                <div className="text-wrapper-38">张三</div>
                <div className="rectangle-3" />
                <div className="text-wrapper-39">退出登录</div>
                <img className="account" alt="Account" src={AccountPng} />
              </div>
            </div>
          </div>
        </div>
        <div className="group-8">
          <div className="overlap-2">
            <div className="text-wrapper">最新交互</div>
            <img className="img" alt="Line" src={Line3Svg} />
            <div className="div-2">
              <div className="to">
                <span className="span">To </span>
                <span className="text-wrapper-11">0xjk32f3...090sd43f</span>
              </div>
              <div className="from">
                <span className="span">From </span>
                <span className="text-wrapper-11">0xaf1213...32uo34i7</span>
              </div>
              <div className="group-9">
                <div className="group-10">
                  <div className="text-wrapper-14">10 secs ago</div>
                  <div className="text-wrapper-15">0xaf1232347834...</div>
                </div>
                <div className="bk-logo">
                  <div className="div-wrapper">
                    <div className="text-wrapper-16">Tx</div>
                  </div>
                </div>
              </div>
              <img className="line-2" alt="Line" src={Line3Svg} />
            </div>
            <div className="div-3">
              <div className="to">
                <span className="span">To </span>
                <span className="text-wrapper-11">0xjk32f3...090sd43f</span>
              </div>
              <div className="from">
                <span className="span">From </span>
                <span className="text-wrapper-11">0xaf1213...32uo34i7</span>
              </div>
              <div className="group-9">
                <div className="group-10">
                  <div className="text-wrapper-14">10 secs ago</div>
                  <div className="text-wrapper-15">0xaf1232347834...</div>
                </div>
                <div className="bk-logo">
                  <div className="div-wrapper">
                    <div className="text-wrapper-16">Tx</div>
                  </div>
                </div>
              </div>
              <img className="line-2" alt="Line" src={Line3Svg}/>
            </div>
            <div className="overlap-10">
              <div className="trans">
                <div className="to">
                  <span className="span">To </span>
                  <span className="text-wrapper-11">0xjk32f3...090sd43f</span>
                </div>
                <div className="from">
                  <span className="span">From </span>
                  <span className="text-wrapper-11">0xaf1213...32uo34i7</span>
                </div>
                <div className="group-9">
                  <div className="group-10">
                    <div className="text-wrapper-14">10 secs ago</div>
                    <div className="text-wrapper-15">0xaf1232347834...</div>
                  </div>
                  <div className="bk-logo">
                    <div className="div-wrapper">
                      <div className="text-wrapper-16">Tx</div>
                    </div>
                  </div>
                </div>
                <img className="line-2" alt="Line" src={Line3Svg} />
              </div>
              <img className="img" alt="Line" src={Line3Svg} />
            </div>
            <div className="text-wrapper-17">查看全部交互</div>
            <img className="arrow" alt="Arrow" src={ArrowSvg} />
          </div>
        </div>
      </div>
    </div>
  );
});
