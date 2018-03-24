import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import firebase from 'firebase';
import { connect  } from "react-redux"
import { history } from 'react-router'


const Nav = styled.div`
  display: grid;
  grid-area: nav;
  border: 1px solid;
`;


class Menu extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Nav>
  <Link to='/'>Home</Link>
  <Link to='/history'>History</Link>
  </Nav>
   )
  }

}


export default Menu