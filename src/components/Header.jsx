import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import firebase from 'firebase';
import { connect  } from "react-redux"
import { history } from 'react-router'

import * as userFunc from '../redux/actions/userActions.js'

const HeaderClass = styled.div`
  display: grid;
  grid-area: header;
  border: 1px solid;
`;

const Title = styled('h1')`
  margin: 5px;
  font-size: 30px;
`;

const Hamburger = styled('i')`
    display:none;
  @media (max-width: 372px){
    display: inline-block;
  }
`;

@connect((store) => { 
  console.log(store)
  return {
    user: store.styleReducer.styles
  };
})

class Header extends React.Component {
  constructor(props){
    super(props);
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu(){
    this.props.dispatch(userFunc.sideMenu(250));
  }

  render(){
  return (  
  <HeaderClass className="header">   

   <Title><Hamburger onClick={(e) => this.showMenu()} className="material-icons">menu</Hamburger>  THE BAYFAIR</Title>
  </HeaderClass>
   )
  }

}


export default Header