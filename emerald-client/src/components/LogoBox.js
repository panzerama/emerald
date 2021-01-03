import { React } from 'react'
import logo from '../images/emerald-logo-150.png'

export default function LogoBox(props) {
  return (
    <div>
      <img src={logo} />
      <span>Emerald City Game Masters Guild</span>
    </div>
  )
}