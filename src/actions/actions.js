import * as types from "../constants/actionTypes";

export const setSelectedFormation = (selectedFormation) => ({
  type: types.SET_SELECTED_FORMATION,
  selectedFormation 
});

export const setSelectedShortsColor = (selectedShortsColor) => ({
  type: types.SET_SELECTED_SHORTS_COLOR,
  selectedShortsColor 
});

export const setSelectedShirtColor = (selectedShirtColor) => ({
  type: types.SET_SELECTED_SHIRT_COLOR,
  selectedShirtColor 
});

export const changeFormation = (formationType) => ({
  type: types.CHANGE_FORMATION,
  formationType 
});

export const changeShortsColor = (shortsColor) => ({
  type: types.CHANGE_SHORTS_COLOR,
  shortsColor
});

export const changeShirtColor = (shirtColor) => ({
  type: types.CHANGE_SHIRT_COLOR,
  shirtColor
});

export const changePlayerLabel = ({formIdx, lineIdx, label}) => ({
  type: types.CHANGE_PLAYER_LABEL,
  formIdx,
  lineIdx,
  label
});

export const changePlayerNumber = ({formIdx, lineIdx, number}) => ({
  type: types.CHANGE_PLAYER_NUMBER,
  formIdx,
  lineIdx,
  number
});

export const movePlayer = ({formIdx, lineIdx, left, top}) => ({
  type: types.MOVE_PLAYER,
  formIdx,
  lineIdx,
  left,
  top
});
