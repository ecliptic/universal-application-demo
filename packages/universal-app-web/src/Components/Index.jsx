import './Common/Global'
import {Container, Header, Overlay} from './Common'
import React, {Component} from 'react'

export default class Index extends Component {
  render () {
    return (
      <div>
        <Overlay />
        <Container>
          <Header>Hello world!</Header>
        </Container>
      </div>
    )
  }
}
