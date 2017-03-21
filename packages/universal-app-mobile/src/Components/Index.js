import {Text} from 'react-native'
import React, {Component} from 'react'
import styled from 'styled-components/native'

const MainView = styled.View`
  margin: 24 12;
`

export default class Index extends Component {
  render () {
    return (
      <MainView>
        <Text>Hello world!</Text>
      </MainView>
    )
  }
}
