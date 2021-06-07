import React from 'react';

import '../index.css';
import Square from './square.js';

export default class FallenSoldierBlock extends React.Component {

  renderSquare(square, i, squareShade) {
    return <Square
      key={i}
      keyVal={i}
      piece={square}
      style={square.style}
    />
  }

  render() {
    return (
      <div>
        <h3>Black Player's Score Pieces</h3>
        <div className="board-row">{this.props.whiteFallenSoldiers.map((ws, index) =>
          this.renderSquare(ws, index)
        )}</div>
        <h3>White Player's Score Pieces </h3>
        <div className="board-row">{this.props.blackFallenSoldiers.map((bs, index) =>
          this.renderSquare(bs, index)
        )}</div>
      </div>
    );
  }
}

