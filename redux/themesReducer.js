import { SWITCH_THEME } from './themeActions'

/* darkTheme */
export const darkTheme = {
  mode: "dark",
  PRIMARY_BACKGROUND_COLOR: "#212121",
  PRIMARY_BUTTON_COLOR: "#FFF",
  PRIMARY_BUTTON_TEXT_COLOR: "#000",
  STATUS_BAR_STYLE: "light-content"
}

/* lightTheme */
export const lightTheme = {
  mode: "light",
  PRIMARY_BACKGROUND_COLOR: "#FFF",
  PRIMARY_BUTTON_COLOR: "#000",
  PRIMARY_BUTTON_TEXT_COLOR: "#FFF",
  STATUS_BAR_STYLE: "default"
}

const initialState = {
  theme: lightTheme
}

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return { theme: action.theme }

    default:
      return state
  }
}
export default themeReducer