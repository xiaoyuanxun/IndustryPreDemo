import React from 'react';
import "./index.css"
import schooLogoPng from '../../images/school_logo.png'
import AccountPng from '../../images/Account.png';
import BackLogo from '../../images/Back.png';
import InnerHeaderLine from '../../images/innerHeaderLine.png';

export const Header = React.memo(() => {
  return (
    <div className={"header"}>
      <div className={"header-1"}>
        <img className="header-logo" alt="school_Logo" src={schooLogoPng}/>
        <div className={'header-title'}>
            区块链物联网管理系统
        </div>
      </div >
      <div className={"header-2"}>
          <img className="header-account-png" alt="AccountPng" src={AccountPng}/>
          <div className={'header-account-name'}>
                张三
          </div>
      </div>
    </div>
  
  )
})

export const InnerHeader = React.memo((props: { pageTitle: string, sideName: string, address: string}) => {
  const {pageTitle, sideName, address} = props
  return (
    <>
    <div className={"innerHeader"}>
        <div className='innerHeader-1'>
          <img className="innerHeader-back-logo" alt="back-logo" src={BackLogo}/>
          <div className={'innerHeader-title'}>
              {pageTitle}
          </div>
        </div>
        <div className='innerHeader-2'>
          <div className='innerHeader-2-name'>{sideName}</div>
          <div className='innerHeader-2-address'>{address}</div>
        </div>
    </div>
    <img className="innerHeader-line" alt="innerHeader-line" src={InnerHeaderLine}/>
    </>
  )
})

// export const Header = React.memo((props: { title: string, id: string }) => {
//   const {title, id} = props
//   return <div className={"header"}>
//     <div/>
//     <div className={"header-title"}>
//       区块链物联网管理系统
//     </div>
//     <div className={"header-type"}>
//       {title}
//       <div className={"header-type-id"}>{id}</div>
//     </div>
//   </div>
// })
