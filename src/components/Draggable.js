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

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragMove = throttle(this.onDragMove.bind(this), MOVE_THROTTLE_MS);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  calculatePosition(event) {
    const container = this.getContainer();
    const { dragElem } = this.refs;
    let left = 0, top = 0;

    if (/touch/.test(event.type)) {
      const { touches } = event;
      const touch = touches[0];
      left = touch.pageX;
      top = touch.pageY;
      console.log(event.type, left, top);
    } else {
      left = event.pageX;
      top = event.pageY;
    }

    left = left - (dragElem.clientWidth / 2);
    left = left / container.clientWidth * 100;
    left = Math.max(left, this.props.maxLeft);
    left = Math.min(left, this.props.maxRight);

    //TODO: get top boundary coordinate
    top = top - 66;
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

  onDragStart(event) {
    event.preventDefault();
    event.stopPropagation();
    const container = this.getContainer();
    this.drag = this.calculatePosition(event);
    container.addEventListener('mousemove', this.onDragMove);
    container.addEventListener('mouseup', this.onDragEnd);
    document.addEventListener('touchmove', this.onDragEnd);
    document.addEventListener('touchend', this.onDragMove);
    this.setState({ isDragging: true });
  }

  onDragMove(event) {
    event.preventDefault();
    event.stopPropagation();
    this.drag = this.calculatePosition(event);
    this.props.onMove({
      left: this.drag.left,
      top: this.drag.top
    });
  }

  onDragEnd(event) {
    event.preventDefault();
    event.stopPropagation();
    this.drag = this.calculatePosition(event);
    this.props.onMove({
      left: this.drag.left,
      top: this.drag.top
    });
    const container = this.getContainer();
    container.removeEventListener('mouseup', this.onDragEnd);
    container.removeEventListener('mousemove', this.onDragMove);
    document.removeEventListener('touchmove', this.onDragEnd);
    document.removeEventListener('touchend', this.onDragMove);
    this.setState({ isDragging: false });
  }

  render() {
    const style = {
      top: this.props.top,
      left: this.props.left
    };
    const cls = 'Draggable' + (this.state.isDragging ? ' dragging' : '');
    return(
      <div
        className={cls}
        ref="dragElem"
        style={style}
        onMouseDown={this.onDragStart}
        onTouchStart={this.onDragStart}
      >
        {this.props.children}
      </div>

    );
  }

}

export default Draggable;
