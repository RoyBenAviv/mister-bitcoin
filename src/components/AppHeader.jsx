import logo from '../assets/images/bitcoin-logo.png'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>
          Mister Bitc<i className="fa-brands fa-bitcoin"></i>in
        </h1>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/statistic">Statistic</NavLink>
      </nav>
    </header>
  )
}
