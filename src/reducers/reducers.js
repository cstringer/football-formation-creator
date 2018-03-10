import * as types from '../constants/actionTypes';
import { getFormation } from '../utils/formations';
import initialState from './initialState';

export default function(state = initialState, action) {
  let formation, player;

  switch (action.type) {

    case types.SET_SELECTED_FORMATION: {
      const { selectedFormation } = action;
      return {...state, selectedFormation};
    }

    case types.SET_SELECTED_SHIRT_COLOR: {
      const { selectedShirtColor } = action;
      return {...state, selectedShirtColor};
    }

    case types.SET_SELECTED_SHORTS_COLOR: {
      const { selectedShortsColor } = action;
      return {...state, selectedShortsColor};
    }

    case types.CHANGE_FORMATION: {
      formation = getFormation(action.formationType);
      return {...state, formation};
    }

    case types.CHANGE_SHIRT_COLOR: {
      return {...state, shirtColor: action.shirtColor };
    }

    case types.CHANGE_SHORTS_COLOR: {
      return {...state, shortsColor: action.shortsColor };
    }

    case types.CHANGE_PLAYER_LABEL: {
      const { label } = action;
      formation = [...state.formation];
      player = formation[action.formIdx][action.lineIdx];
      formation[action.formIdx][action.lineIdx] = {...player, label};
      return {...state, formation};
    }

    case types.CHANGE_PLAYER_NUMBER: {
      const { number } = action;
      formation = [...state.formation];
      player = formation[action.formIdx][action.lineIdx];
      formation[action.formIdx][action.lineIdx] = {...player, number};
      return {...state, formation};
    }

    case types.MOVE_PLAYER:{
      const { left, top } = action;
      formation = [...state.formation];
      player = formation[action.formIdx][action.lineIdx];
      formation[action.formIdx][action.lineIdx] = {...player, left, top};
      return {...state, formation};
    }

    default:
      return state;
  }
}
