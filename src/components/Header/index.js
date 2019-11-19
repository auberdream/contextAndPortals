import React from 'react'
import './index.css'
import logo from "../../resources/images/logo.svg";

export default () => (
  <header className={'header'}>
    <div className={'header__item'}>
      <img src={logo} className={"header__logo"} alt={"logo"} />
    </div>
    <div className={'header__item header__item-expandable'}>
      <span>Mid content</span>
    </div>
    <div className={'header__item'}>
      <span>x</span>
    </div>
  </header>
)