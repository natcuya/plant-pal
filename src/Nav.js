import React, { Component } from 'react'
import Content from './Content'
export default class Nav extends Component {
    render() {
      return (
        <Content className='Nav'>
          <a href='/'>
            Home
          </a>
          <a href='/quiz'>
            Take Our Quiz
          </a>
          <a href='/browse'>
            Browse
          </a>
          <a href='/login'>
            Login
          </a>
        </Content>
      )
    }
  }