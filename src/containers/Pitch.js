import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';

import Formation from '../components/Formation';

import '../styles/Pitch.css';
import pitchImg from '../images/pitch.svg';

function Pitch(props) {
  const { dispatch } = props;
  const actions = bindActionCreators(AppActions, dispatch);

  return (
      <div className="Pitch" id="Pitch">

        <div className="Pitch-background">
          <img src={pitchImg} alt="Pitch background"/>
        </div>

        <Formation actions={actions} {...props}></Formation>
      </div>
  );
}

export default connect(
  state => ({ ...state })
)(Pitch);
