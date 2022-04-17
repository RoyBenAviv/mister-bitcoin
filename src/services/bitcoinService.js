import axios from 'axios'
import { storageService } from './storageService'

const BTC_KEY = 'bitcoin'

export const bitcoinService = {
    getRate,
    getMarketPrice,
    btcConversion,
    getConfirmedTransactions
  }

async function getRate() {
    const btcRate = storageService.load(BTC_KEY)
    if(btcRate) return btcRate
    try {
        const res = await axios('https://blockchain.info/tobtc?currency=USD&value=1')
        storageService.store(BTC_KEY, res.data)
        return res.data
    } catch (err) {
        console.error(err)
    }
}

async function btcConversion() {
    try {
        const res = await axios('https://blockchain.info/ticker')
        return res.data
    } catch (err) {
        console.error(err)
    }
}

async function getMarketPrice(period) {
    try {
        const res = await axios(`https://api.blockchain.info/charts/market-price?timespan=1${period}&format=json&cors=true`)
        return res.data
    } catch (err) {
        console.error(err)
    }
}

async function getConfirmedTransactions() {
    try {
        const res = await axios('https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true')
        return res.data
    } catch (err) {
        console.error(err)
    }
}