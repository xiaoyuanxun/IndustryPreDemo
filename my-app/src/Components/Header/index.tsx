import React from 'react';
import "./index.css"
import schooLogoPng from '../../images/school_logo.png'
import AccountPng from '../../images/Account.png';

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

export const InnerHeader = React.memo(() => {
  return (
    <div className={"innerHeader"}>
              <div className={'innerHeader-title'}>
            区块链物联网管理系统
        </div>
      {/* <div className={"innerHeader-1"}> */}
        {/* <img className="header-logo" alt="school_Logo" src={schooLogoPng}/> */}

      {/* </div > */}
      {/* <div className={"header-2"}>
          <img className="header-account-png" alt="AccountPng" src={AccountPng}/>
          <div className={'header-account-name'}>
                张三
          </div>
      </div> */}
    </div>
  
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
