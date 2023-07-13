import React from "react";
import "./index.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import lineStack1Png from '../../images/line-stack 1.png'
import PieChartSvg from '../../images/Pie Chart.svg'
import Line3Svg from '../../images/Line 3.svg'
import GroupPng from '../../images/Group.png'
import ComputersConnectingPng from '../../images/Computers Connecting.png'
import SystemReportPng from '../../images/System Report.png'
import ArrowSvg from '../../images/Arrow.svg'
import { useNavigate } from 'react-router-dom';
import { Header } from "../Header";
import { Sidebar } from "../Basic";

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
    <div className="data">
      <Header />
      <div className="data-1">
        <Sidebar activeNumber={2}/>
        <div className="data-1-1">
          <div className="data-row-1">
            <div className="data-row-1-box-1">
              <div className="data-row-1-box-1-row-1">
                <div className="data-row-1-box-1-row-1-title-1">参与实验时长</div>
                <div className="data-row-1-box-1-row-1-title-2">实验课程进度</div>
              </div>
              <div className="data-row-1-box-1-row-2">
                <div className="data-row-1-box-1-row-2-title">100 小时 00 分钟 00 秒</div>
                <div className="data-row-1-box-1-row-2-box">
                  <div className="data-row-1-box-1-row-2-box-title">1%</div>
                  <div className="data-row-1-box-1-row-2-box-box">
                    <div className="data-row-1-box-1-row-2-box-box-progress"/>
                  </div>
                </div>
              </div>
              <div className="data-row-1-box-1-row-3">
                <div className="data-row-1-box-1-row-3-title">实验趋势</div>
                <img className="data-row-1-box-1-row-3-diagram" src={lineStack1Png}/>
              </div>
            </div>
            <div className="data-row-1-box-2">
              <div className="data-row-1-box-2-header">学习材料</div>
              <img className="data-row-1-box-2-line" src={Line3Svg}/>
              <div className="data-row-1-box-2-body">
                <div className="data-row-1-box-2-body-box">
                  <div className="data-row-1-box-2-body-box-row-1">
                    <div className="data-row-1-box-2-body-box-row-1-title">课件</div>
                    <div className="data-row-1-box-2-body-box-row-1-number">40</div>
                  </div>
                  <div className="data-row-1-box-2-body-box-row-2">
                    <div className="data-row-1-box-2-body-box-row-2-title">教学视频</div>
                    <div className="data-row-1-box-2-body-box-row-2-number">10</div>
                  </div>
                  <div className="data-row-1-box-2-body-box-row-3">
                    <div className="data-row-1-box-2-body-box-row-3-title">学习实验</div>
                    <div className="data-row-1-box-2-body-box-row-3-number">20</div>
                  </div>
                  <div className="data-row-1-box-2-body-box-row-4">
                    <div className="data-row-1-box-2-body-box-row-4-title">参考文献</div>
                    <div className="data-row-1-box-2-body-box-row-4-number">100</div>
                  </div>
                </div>
                <img className="data-row-1-box-2-body-diagram" src={PieChartSvg}/>
              </div>
            </div>
          </div>
          <div className="data-row-2">
            <div className="data-row-2-box-1">
              <div className="data-row-2-box-1-header">区块链节点</div>
              <img className="data-row-2-box-1-line" src={Line3Svg}/>
              <div className="data-row-2-box-1-box">
                <img className="data-row-2-box-1-box-connect" src={ComputersConnectingPng}/>
                <img className="data-row-2-box-1-box-computer" src={SystemReportPng}/>
                <img className="data-row-2-box-1-box-connect" src={ComputersConnectingPng}/>
                <img className="data-row-2-box-1-box-connect" src={ComputersConnectingPng}/>
                <img className="data-row-2-box-1-box-connect" src={ComputersConnectingPng}/>
                <img className="data-row-2-box-1-box-connect" src={ComputersConnectingPng}/>
                <img className="data-row-2-box-1-box-connect" src={ComputersConnectingPng}/>
              </div>
            </div>
            <div className="data-row-2-box-2">
              <div className="data-row-2-box-2-header">区块链节点</div>
              <img className="data-row-2-box-2-line" src={Line3Svg}/>
              <div className="data-row-2-box-2-box">
                <div className="data-row-2-box-2-body">
                  <div className="data-row-2-box-2-body-row-1">
                    <div className="data-row-2-box-2-body-row-1-title">总节点数量</div>
                    <div className="data-row-2-box-2-body-row-1-number">8</div>
                  </div>
                  <div className="data-row-2-box-2-body-row-2">
                    <div className="data-row-2-box-2-body-row-2-title">运行节点数量</div>
                    <div className="data-row-2-box-2-body-row-1-number">7</div>
                  </div>
                </div>
                <img className="data-row-2-box-2-group" src={GroupPng}/>
              </div>
            </div>
          </div>
          <div className="data-row-3">
            <div className="data-row-3-box-1">
              <div className="data-row-3-box-1-header">最新区块</div>
              <img className="data-row-3-box-1-line" src={Line3Svg}/>
              <div className="data-row-3-box-1-row">
                <div className="data-row-3-box-1-row-block">
                  <div className="data-row-3-box-1-row-title">Bk</div>
                </div>
                <div className="data-row-3-box-1-row-time">
                  <div className="data-row-3-box-1-row-time-number">1000001</div>
                  <div className="data-row-3-box-1-row-time-time">10 secs ago</div>
                </div>
                <div className="data-row-3-box-1-row-info">
                  <div className="data-row-3-box-1-row-info-number">10 txns in </div>
                  <div className="data-row-3-box-1-row-info-time">&nbsp;3 secs</div>
                </div>
                <div className="data-row-3-box-1-row-validate">
                  <div className="data-row-3-box-1-row-validate-title">Validated By &nbsp;</div>
                  <div className="data-row-3-box-1-row-validate-name">Validator 1</div>
                </div>
              </div>
              <img className="data-row-3-box-1-row-line" src={Line3Svg}/>  
              <div className="data-row-3-box-1-row">
                <div className="data-row-3-box-1-row-block">
                  <div className="data-row-3-box-1-row-title">Bk</div>
                </div>
                <div className="data-row-3-box-1-row-time">
                  <div className="data-row-3-box-1-row-time-number">1000001</div>
                  <div className="data-row-3-box-1-row-time-time">10 secs ago</div>
                </div>
                <div className="data-row-3-box-1-row-info">
                  <div className="data-row-3-box-1-row-info-number">10 txns in </div>
                  <div className="data-row-3-box-1-row-info-time">&nbsp;3 secs</div>
                </div>
                <div className="data-row-3-box-1-row-validate">
                  <div className="data-row-3-box-1-row-validate-title">Validated By &nbsp;</div>
                  <div className="data-row-3-box-1-row-validate-name">Validator 1</div>
                </div>
              </div>
              <img className="data-row-3-box-1-row-line" src={Line3Svg}/>  
              <div className="data-row-3-box-1-row">
                <div className="data-row-3-box-1-row-block">
                  <div className="data-row-3-box-1-row-title">Bk</div>
                </div>
                <div className="data-row-3-box-1-row-time">
                  <div className="data-row-3-box-1-row-time-number">1000001</div>
                  <div className="data-row-3-box-1-row-time-time">10 secs ago</div>
                </div>
                <div className="data-row-3-box-1-row-info">
                  <div className="data-row-3-box-1-row-info-number">10 txns in </div>
                  <div className="data-row-3-box-1-row-info-time">&nbsp;3 secs</div>
                </div>
                <div className="data-row-3-box-1-row-validate">
                  <div className="data-row-3-box-1-row-validate-title">Validated By &nbsp;</div>
                  <div className="data-row-3-box-1-row-validate-name">Validator 1</div>
                </div>
              </div>
              <img className="data-row-3-box-1-row-longLine" src={Line3Svg}/>  
              <div className="data-row-3-box-1-button">
                <div className="data-row-3-box-1-button-title">查看全部区块</div>
                <img className="data-row-3-box-1-button-arrow" src={ArrowSvg}/>
              </div>
            </div>
            <div className="data-row-3-box-2">
              <div className="data-row-3-box-2-header">区块链状态</div>
              <img className="data-row-3-box-2-line" src={Line3Svg}/>
              <div className="data-row-3-box-2-row-1">
                <div className="data-row-3-box-2-row-1-title">区块链运行状态</div>
                <div className="data-row-3-box-2-row-1-status">正常</div>
              </div>
              <div className="data-row-3-box-2-row-2">
                <div className="data-row-3-box-2-row-2-title-1">最大TPS</div>
                <div className="data-row-3-box-2-row-2-title-2">区块链交互次数</div>
              </div>
              <div className="data-row-3-box-2-row-3">
                <div className="data-row-3-box-2-row-3-number-1">1000</div>
                <div className="data-row-3-box-2-row-3-number-2">1000</div>
              </div>
              <div className="data-row-3-box-2-row-4">
                <div className="data-row-3-box-2-row-4-title-1">区块高度</div>
                <div className="data-row-3-box-2-row-4-title-2">数据存储量</div>
              </div>
              <div className="data-row-3-box-2-row-5">
                <div className="data-row-3-box-2-row-5-number-1">3000</div>
                <div className="data-row-3-box-2-row-5-number-2">100GB</div>
              </div>
            </div>
          </div>
          <div className="data-row-4">
            <div className="data-row-4-box">
              <div className="data-row-4-box-header">最新交互</div>
              <img className="data-row-4-box-line" src={Line3Svg}/>
              <div className="data-row-4-box-row">
                <div className="data-row-4-box-row-block">
                  <div className="data-row-4-box-row-title">Tx</div>
                </div>
                <div className="data-row-4-box-row-time">
                  <div className="data-row-4-box-row-time-number">0xaf1232347834...</div>
                  <div className="data-row-4-box-row-time-time">10 secs ago</div>
                </div>
                <div className="data-row-4-box-row-info">
                  <div className="data-row-4-box-row-info-number">From</div>
                  <div className="data-row-4-box-row-info-time">&nbsp;0xaf1213...32uo34i7</div>
                </div>
                <div className="data-row-4-box-row-validate">
                  <div className="data-row-4-box-row-validate-title">To&nbsp;</div>
                  <div className="data-row-4-box-row-validate-name">0xjk32f3...090sd43f</div>
                </div>
              </div>
              <img className="data-row-4-box-row-line" src={Line3Svg}/>  
              <div className="data-row-4-box-row">
                <div className="data-row-4-box-row-block">
                  <div className="data-row-4-box-row-title">Tx</div>
                </div>
                <div className="data-row-4-box-row-time">
                  <div className="data-row-4-box-row-time-number">0xaf1232347834...</div>
                  <div className="data-row-4-box-row-time-time">10 secs ago</div>
                </div>
                <div className="data-row-4-box-row-info">
                  <div className="data-row-4-box-row-info-number">From</div>
                  <div className="data-row-4-box-row-info-time">&nbsp;0xaf1213...32uo34i7</div>
                </div>
                <div className="data-row-4-box-row-validate">
                  <div className="data-row-4-box-row-validate-title">To&nbsp;</div>
                  <div className="data-row-4-box-row-validate-name">0xjk32f3...090sd43f</div>
                </div>
              </div>
              <img className="data-row-4-box-row-line" src={Line3Svg}/>  
              <div className="data-row-4-box-row">
                <div className="data-row-4-box-row-block">
                  <div className="data-row-4-box-row-title">Tx</div>
                </div>
                <div className="data-row-4-box-row-time">
                  <div className="data-row-4-box-row-time-number">0xaf1232347834...</div>
                  <div className="data-row-4-box-row-time-time">10 secs ago</div>
                </div>
                <div className="data-row-4-box-row-info">
                  <div className="data-row-4-box-row-info-number">From</div>
                  <div className="data-row-4-box-row-info-time">&nbsp;0xaf1213...32uo34i7</div>
                </div>
                <div className="data-row-4-box-row-validate">
                  <div className="data-row-4-box-row-validate-title">To&nbsp;</div>
                  <div className="data-row-4-box-row-validate-name">0xjk32f3...090sd43f</div>
                </div>
              </div>
              <img className="data-row-4-box-longLine" src={Line3Svg}/> 
              <div className="data-row-4-box-row-button">
                <div className="data-row-4-box-row-button-title">查看全部交互</div>
                <img className="data-row-4-box-row-button-arrow" src={ArrowSvg}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
