import React from 'react';

class EditableText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };

    this.disableEditing = this.disableEditing.bind(this);
    this.enableEditing = this.enableEditing.bind(this);
    this.onInputKeydown = this.onInputKeydown.bind(this);
  }

  disableEditing(e) {
    if (e.target === this.refs.input &&
        e.type !== 'keydown') { return; }
    this.setState({
      isEditing: false
    });
    document.removeEventListener('click', this.disableEditing);
  }

  enableEditing(e) {
    e.stopPropagation();
    this.setState({
      isEditing: true
    });
    document.addEventListener('click', this.disableEditing);
  }

  onInputKeydown(event) {
    switch (event.which) {
      case 9:   // TAB
      case 27:  // ESC
        this.disableEditing(event);
        break;

      case 13:  // Return
        if (this.refs.input.value) {
          this.props.onSetText(this.refs.input.value);
        }
        this.disableEditing(event);
        break;

      default:
        break;
    }
  }

  renderInput() {
    return(
      <input
        defaultValue={this.props.text}
        ref="input"
        type="text"
        onKeyDown={this.onInputKeydown}
      />
    );
  }

  render() {
    return(
      <div
        className={this.props.className + ' editable'}
        style={this.props.style}
        onMouseDown={this.enableEditing}
      >
        {this.state.isEditing ?  this.renderInput() : this.props.text}
      </div>
    );
  }
}

export default EditableText;
