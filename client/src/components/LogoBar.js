import { React } from 'react'
import logo from '../images/emerald-logo-150.png'
import './LogoBar.css'

export default function LogoBar(props) {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Emerald City Game Masters Guild logo"/>
      <span className="title">Emerald City Game Masters Guild</span>
    </div>
  )
}