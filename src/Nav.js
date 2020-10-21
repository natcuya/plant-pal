import React, { Component } from 'react'
import Content from './Content'
import './Nav.css'
export default class Nav extends Component {
    render() {
      return (
        <ul className= "navSec">
          <li className= "navLink"><a href='/'>Home</a>
          </li>
          <li className= "navLink">
          <a href='/quiz'> Take Quiz</a>
          </li>
          <li className= "navLink"><a href='/browse'> Browse</a>
          </li>
        </ul>
      )
    }
  }