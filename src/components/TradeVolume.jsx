import { Sparklines, SparklinesBars } from 'react-sparklines'

export function TradeVolume({ btcTV }) {
  return (
    <section className="chart-container trade-volume">
      <h2>Exchange Trade Volume (USD)</h2>
      <Sparklines width={350} height={80} data={btcTV}>
        <SparklinesBars style={{ stroke: "white", fill: "#fe2b91" }} />
      </Sparklines>
    </section>
  )
}
