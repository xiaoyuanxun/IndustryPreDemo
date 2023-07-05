import React from 'react';
import "./index.css"
import schooLogoPng from '../../images/school_logo.png'
import AccountPng from '../../images/Account.png';

export const Header = React.memo((props: { title: string, id: string }) => {
  const {title, id} = props
  return <div className={"header"}>
    <div/>
    <div className={"header-title"}>
      区块链物联网管理系统
    </div>
    <div className={"header-type"}>
      {title}
      <div className={"header-type-id"}>{id}</div>
    </div>
  </div>
})

export const SystemHeader = React.memo(() => {
  return <div className="tittle">
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
})
