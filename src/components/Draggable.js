import React from 'react';
import throttle from 'lodash/throttle';

import '../styles/Draggable.css';

const MOVE_THROTTLE_MS = parseInt((1000 / 60) * 2, 10);


class Draggable extends React.Component {
  constructor(props) {
    super(props);

    this.container = null;
    this.drag = {
      left: 0,
      top: 0
    };
    this.state = {
      isDragging: false
    };

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = throttle(this.onMouseMove.bind(this), MOVE_THROTTLE_MS);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  calculatePosition(event) {
    const container = this.getContainer();
    const { dragElem } = this.refs;

    let left = event.pageX - (dragElem.clientWidth / 2);
    left = left / container.clientWidth * 100;
    left = Math.max(left, this.props.maxLeft);
    left = Math.min(left, this.props.maxRight);

    let top = event.pageY - 66;
    top -= (dragElem.clientHeight / 2);
    top = top / container.clientHeight * 100;
    top = Math.max(top, this.props.maxTop);
    top = Math.min(top, this.props.maxBottom);

    const pos = {
      left: left.toFixed(2) + '%',
      top:  top.toFixed(2) + '%'
    };
    return pos;
  }

  getContainer() {
    if (!this.container) {
      this.container = document.getElementById(this.props.containerId);
    }
    return this.container;
  }

  onMouseDown(event) {
    const container = this.getContainer();
    this.drag = this.calculatePosition(event);
    container.addEventListener('mouseup', this.onMouseUp);
    container.addEventListener('mousemove', this.onMouseMove);
    this.setState({ isDragging: true });
  }

  onMouseMove(event) {
    this.drag = this.calculatePosition(event);
    this.props.onMove({
      left: this.drag.left,
      top: this.drag.top
    });
  }

  onMouseUp(event) {
    this.drag = this.calculatePosition(event);
    this.props.onMove({
      left: this.drag.left,
      top: this.drag.top
    });
    const container = this.getContainer();
    container.removeEventListener('mouseup', this.onMouseUp);
    container.removeEventListener('mousemove', this.onMouseMove);
    this.setState({ isDragging: false });
  }

  render() {
    const style = {
      position: 'absolute',
      top: this.props.top,
      left: this.props.left
    };
    const cls = 'Draggable' + (this.state.isDragging ? ' dragging' : '');
    return(
      <div
        className={cls}
        ref="dragElem"
        style={style}
        onMouseDown={this.onMouseDown}
      >
        {this.props.children}
      </div>

    );
  }

}

export default Draggable;
