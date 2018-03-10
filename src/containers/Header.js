import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../actions/actions';

import Controls from '../containers/Controls';
import '../styles/Header.css';

function Header(props) {
  const { dispatch } = props;
  const actions = bindActionCreators(AppActions, dispatch);

  return (
      <header className="Header">
        <Controls actions={actions} {...props}></Controls>
      </header>
  );
}

export default connect(
  state => ({ ...state })
)(Header);
