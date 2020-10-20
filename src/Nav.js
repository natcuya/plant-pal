import React, { Component } from 'react'
import Content from './Content'
import './Nav.css'
export default class Nav extends Component {
    render() {
      return (
        <Content className='Nav'>

          <a href='/'>
            Home
          </a>
          <a href='/quiz'>
            Take Quiz
          </a>
          <a href='/browse'>
            Browse
          </a>

        </Content>
      )
    }
  }