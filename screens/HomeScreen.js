import React from 'react'
import { StatusBar } from 'react-native'
import styled, { ThemeProvider } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { switchTheme } from '../redux/themeActions'

import { lightTheme, darkTheme } from '../redux/themesReducer'

export default function HomeScreen() {

  const theme = useSelector(state => state.themeReducer.theme)
  const dispatch = useDispatch()

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={theme.STATUS_BAR_STYLE} />
      <Container>

        {theme.mode === 'light' ? (
          <Container>
            <Button onPress={() => dispatch(switchTheme(darkTheme))}>
              <ButtonText>Change to Dark Theme</ButtonText>
            </Button>
          </Container>
        ) :
        (
          <Container>
            <Button onPress={() => dispatch(switchTheme(lightTheme))}>
              <ButtonText>Change to Light Theme</ButtonText>
            </Button>
          </Container>
        )}

      </Container>
    </ThemeProvider>

  )
}

const Container = styled.View`
 flex: 1;
 align-items: center;
 justify-content: center;
 background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
`

const Button = styled.TouchableOpacity`
  margin: 32px 0;
  padding: 16px 32px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
`

const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
`