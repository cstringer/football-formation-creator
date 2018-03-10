const STORAGE_KEY = 'appState';

export function loadState() {
  let retval = undefined;

  try {
    const state = localStorage.getItem(STORAGE_KEY);
    if (state) {
      retval = JSON.parse(state);
    }
  } catch (err) {
    console.error(err);
  }

  return retval;
}

export function saveState(state) {
  try {
    const serialzedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialzedState);
  } catch (err) {
    console.error(err);
  }
}
