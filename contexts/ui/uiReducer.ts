import { UiState } from './';

type UIActionType =
  | { type: '[UI] - ToggleMenu' }

export const uiReducer = (state: UiState, action: UIActionType): UiState => {
  switch (action.type) {
    case '[UI] - ToggleMenu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }

    default:
      return state;
  }
}
