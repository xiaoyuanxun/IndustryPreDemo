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
  return (
      <div className="box">
        <div className="rectangle-wrapper">
          <div className="rectangle" />
          <div className="image">
        <div className="image-wrapper">
          <img className="img" alt="Image" src={schooLogoPng}/>
        </div>
      </div>
      <div className="label">
        <div className="h-1-wrapper">
          <h1 className="text-wrapper-desc">区块链物联网实训系统</h1>
        </div>
      </div>
      <div className="image">
        <div className="account-wrapper">
          <img className="account" alt="Account" src={AccountPng} />
        </div>
      </div>
      <div className="label">
          <div className="div-wrapper">
            <div className="text-wrapper-name ">张三</div>
          </div>
      </div>
        </div>
      </div>
  );
})
