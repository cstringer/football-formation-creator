import React from 'react';

import OptionList from '../components/OptionList';
import { formationTypes } from '../utils/formations';
import kitColors from '../constants/kitColors';

import '../styles/Controls.css';


class Controls extends React.Component {
  constructor(props) {
    super(props);

    this.setShirtColor = this.setShirtColor.bind(this);
    this.setShortsColor = this.setShortsColor.bind(this);
    this.setSelectedFormation = this.setSelectedFormation.bind(this);
    this.setOptions = this.setOptions.bind(this);
  }

  setSelectedFormation(e) {
    const { actions } = this.props;
    actions.setSelectedFormation(e.target.value);
  }

  setShirtColor(e) {
    const { actions } = this.props;
    actions.changeShirtColor(e.target.value);
  }

  setShortsColor(e) {
    const { actions } = this.props;
    actions.changeShortsColor(e.target.value);
  }

  setOptions() {
    const { actions } = this.props;
    actions.changeFormation(this.props.selectedFormation);
  }

  render() {
    return (
      <div className="Controls">

        <OptionList
          className="Controls-formationList"
          label="Base Formation:"
          onChange={this.setSelectedFormation}
          options={formationTypes}
          value={this.props.selectedFormation}
        ></OptionList>

        <button onClick={this.setOptions}>Reset</button>

        <OptionList
          className="Controls-colorList"
          label="Shirt:"
          onChange={this.setShirtColor}
          options={kitColors}
          value={this.props.shirtColor}
        ></OptionList>

        <OptionList
          className="Controls-colorList"
          label="Shorts:"
          onChange={this.setShortsColor}
          options={kitColors}
          value={this.props.shortsColor}
        ></OptionList>

      </div>
    );
  }
}

export default Controls;
