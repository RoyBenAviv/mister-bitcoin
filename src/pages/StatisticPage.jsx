import React, { Component } from 'react'
import { MarketChart } from '../components/MarketChart'
import { TradeVolume } from '../components/TradeVolume'
import { bitcoinService } from '../services/bitcoinService'

export class StatisticPage extends Component {
  state = {
    btcMP: null,
    btcToUsd: null,
    btcTV: null,
    period: 'year',
  }

  componentDidMount() {
    this.getMarketPrice(this.state.period)
    this.btcConversion()
    this.getConfirmedTransactions()
  }

  async getMarketPrice(period) {
    const marketPrice = await bitcoinService.getMarketPrice(period)
    const btcMP = marketPrice.values.map((value) => value.y)
    this.setState({ btcMP })
  }

  async getConfirmedTransactions() {
    const tradeVolume = await bitcoinService.getConfirmedTransactions()
    const btcTV = tradeVolume.values.map((value) => value.y)
    this.setState({ btcTV })
  }

  async btcConversion() {
    const btcPrice = await bitcoinService.btcConversion()
    this.setState({ btcToUsd: btcPrice.USD.last })
  }

  render() {
    const { btcMP, btcToUsd, btcTV } = this.state
    if (!btcMP || !btcToUsd || !btcTV) return <div>Loading...</div>
    return (
      <section className="statistic-page">
        <p>BTC Price: {btcToUsd}$</p>
        <MarketChart btcMP={btcMP} />
        <div className="period-btns">
        <button onClick={() => this.getMarketPrice('year')}>Year</button>
        <button onClick={() => this.getMarketPrice('months')}>Month</button>
        <button onClick={() => this.getMarketPrice('days')}>Day</button>
        </div>

        <TradeVolume btcTV={btcTV} />
      </section>
    )
  }
}

export default StatisticPage
