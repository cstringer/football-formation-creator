import React from 'react';

import Draggable from './Draggable';
import EditableText from './EditableText';
import Kit from './Kit';

import '../styles/Player.css';

const DRAG_MAX_LEFT = 0;
const DRAG_MAX_RIGHT = 95.0;
const DRAG_MAX_TOP = 0;
const DRAG_MAX_BOTTOM = 87.5;

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.movePlayer = this.movePlayer.bind(this);
    this.setLabel = this.setLabel.bind(this);
    this.setNumber = this.setNumber.bind(this);
  }

  setLabel(label) {
    const { actions, formIdx, lineIdx } = this.props;
    actions.changePlayerLabel({
      formIdx, lineIdx,
      label
    });
  }

  setNumber(number) {
    const { actions, formIdx, lineIdx } = this.props;
    actions.changePlayerNumber({
      formIdx, lineIdx,
      number
    });
  }

  movePlayer(pos) {
    const { actions, formIdx, lineIdx } = this.props;
    actions.movePlayer({
      formIdx, lineIdx,
      ...pos
    });
  }

  render() {
    const { label } = this.props;
    let cls = 'Player ' + label;
    cls += this.props.isGK ? ' GK' : '';

    return (
      <Draggable
        containerId="Pitch"
        maxLeft={DRAG_MAX_LEFT}
        maxTop={DRAG_MAX_TOP}
        maxRight={DRAG_MAX_RIGHT}
        maxBottom={DRAG_MAX_BOTTOM}
        left={this.props.left}
        top={this.props.top}
        onMove={this.movePlayer}
      >

        <div className={cls} title={this.props.label}>

          <Kit
            shirtFill={this.props.shirtColor}
            shirtStroke="#ffffff"
            shortsFill={this.props.shortsColor}
            shortsStroke="#ffffff"
            stripes={this.props.stripes}
            stripeColor={this.props.stripeColor}
          ></Kit>

          <EditableText
            className="Player-label"
            style={{ color:'#ffffff' }}
            text={this.props.label}
            onSetText={this.setLabel}
          ></EditableText>

          <EditableText
            className="Player-number"
            style={{ color:'#ffffff' }}
            text={this.props.number}
            onSetText={this.setNumber}
          ></EditableText>

        </div>

      </Draggable>
    );
  }
}

export default Player;
