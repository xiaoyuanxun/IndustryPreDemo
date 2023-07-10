import React from "react";
import "./index.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import background_image_Png from '../../images/background_image_1.png'
import { useNavigate } from 'react-router-dom';

export const System = React.memo(() => {
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
    <div className="system-screen">
      <div className="system-screen-box">
        <div className="system-screen-box-article">
          区块链物联网实训系统是一个针对学生和专业人士设计的实践性教学平台，旨在提供真实的区块链物联网技术训练和应用场景模拟。该系统结合了物联网和区块链技术，为学习者提供了一个互动、实时的学习环境。
          <br />
          通过我们的区块链物联网实训系统，学生和专业人士可以深入了解物联网和区块链的原理、概念和应用。系统提供了丰富的教学资源，包括教学视频、实验指导、案例研究和练习任务，以帮助学习者逐步掌握区块链物联网技术的核心知识和实践能力。
          <br />
          系统中的实验环境模拟了真实的物联网场景和区块链网络，学习者可以在虚拟环境中进行实际的操作和实验。他们可以学习如何将物联网设备与区块链网络连接，了解设备身份验证、数据传输、智能合约和共识算法等关键技术。
          <br />
          我们的区块链物联网实训系统还提供了个性化的学习跟踪和评估功能。学生可以随时查看自己的学习进度，系统会根据学习者的表现提供个性化的反馈和建议，更好地帮助你掌握物联网区块链技术。
          <br />
          无论是想要了解物联网和区块链的基本概念，还是希望深入学习和应用物联网区块链技术，我们的区块链物联网实训系统都能为学习者提供一个交互式、实践性的学习平台。通过实际操作和模拟场景，学习者能够真正理解物联网和区块链的工作原理和应用，为将来的职业发展做好准备。
          <br />
          请注意，我们的区块链物联网实训系统是基于真实的物联网和区块链技术进行模拟和训练，并非真实的物联网和区块链网络。它旨在提供一个安全、可控的学习环境，让学习者能够探索和实践物联网区块链技术，而无需担心实际网络的风险和成本。
        </div>
      </div>
    </div>
  );
});
