import { Component } from 'react'
import { bitcoinService } from '../services/bitcoinService'
import { userService } from '../services/userService'
import Lottie from 'react-lottie'
import animationData from '../assets/animations/homepage-bitcoin.json'
import { MoveList } from '../components/MoveList'

export class HomePage extends Component {
  state = {
    user: null,
    btcRate: null,
  }

  get defaultOptions() {
    return {
      loop: true,
      autoplay: true,
      animationData
    }
  }

  async componentDidMount() {
    this.loadUser()
    this.getRate()
  }

  get userMoves() {
    return this.state.user.moves.slice(0,3)
  }

  async loadUser() {
    const user = await userService.getUser()
    this.setState({ user })
  }

  async getRate() {
    const btcRate = await bitcoinService.getRate()
    this.setState({ btcRate })
  }

  render() {
    const { user, btcRate } = this.state
    if (!user || !btcRate) return <div>Loading...</div>
    return (
      <section className="home-page">
        <div className="user-content">
            
          <div>
            
          <h2>Hello {user.name},</h2>
          <img src={`https://robohash.org/set_set5/${user.name}.png`} alt="img" />
          <ul>
            <li>
              <i className="fa-solid fa-coins coin"></i> <p>Coins: {user.coins}</p>
            </li>
            <li>
              <i className="fa-brands fa-bitcoin bitcoin"></i> <p>1.00 $ = {btcRate} BTC</p>
            </li>
          </ul>
          </div>
            <MoveList title="Your last 3 moves:" moves={this.userMoves} homepage="homepage" />
        </div>
        <div className="home-intro">
          <h1>Mister Bitcoin</h1>
          <h2>Crypto application services.</h2>
          <div className="btc-animation">
            <Lottie options={this.defaultOptions} height={600} width={750} />
          </div>
        </div>
      </section>
    )
  }
}

export default HomePage
