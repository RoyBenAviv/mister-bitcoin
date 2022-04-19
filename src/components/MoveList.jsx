import React from 'react'

export function MoveList({ title, moves, homepage }) {
  return (
    <section className="move-list">
      <h3>{title}</h3>
      <div>
      {moves.length ? (
        moves.map((move) => (
          <div className="movelist-container" key={move.at}>
            {homepage ? <div className="movelist-to"><h4>To: {move.to}</h4> <p>(At: {new Date(move.at).toLocaleString()})</p></div> : <p>At: {new Date(move.at).toLocaleString()}</p>}
            
            <div className="movelist-amount"><h4>Amount: </h4> <p> {move.amount} <i className="fa-brands fa-bitcoin"></i></p></div>
          </div>
        ))
      ) : (
        <p>No current transactions.</p>
        )}
        </div>
    </section>
  )
}
