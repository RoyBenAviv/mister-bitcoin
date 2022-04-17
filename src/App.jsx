import './styles/style.scss'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { StatisticPage } from './pages/StatisticPage'
import { Component } from 'react';
import logo from './assets/images/bitcoin-logo.png'


export class App extends Component { 

state =  {
  route: 'home'
}

setRoute(route) {
  this.setState({ route })
}
render() {
  const { route } = this.state
  return (
    <div className="app">
        <header className="app-header">
          <div className="logo">
          <img src={logo} alt="logo" /><h1>Mister Bitc<i className="fa-brands fa-bitcoin"></i>in</h1>
          </div>
          <nav>
                <a  onClick={() => this.setRoute('home')}>Home</a>
                <a  onClick={() => this.setRoute('contact')}>Contact</a>
                <a  onClick={() => this.setRoute('statistic')}>Statistic</a>
          </nav>
        </header>
        <main className="main-layout">
            {route === 'home' ? <HomePage /> : ''} 
            {route === 'contact' ? < ContactPage /> : ''}
            {route === 'statistic' ? < StatisticPage /> : ''}
        </main>
    </div>
  );

}
}

export default App;
