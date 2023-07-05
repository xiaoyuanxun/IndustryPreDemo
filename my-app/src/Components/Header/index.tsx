import React from 'react';
import "./index.css"

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

