import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import firebase from 'firebase';
import { connect  } from "react-redux"
import { history } from 'react-router'


const HeaderClass = styled.div`
  display: grid;
  grid-area: header;
  border: 1px solid;
`;


class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <HeaderClass className="header">   
   <h1>The Bayfair Website Robin Hoods Bay</h1>
  </HeaderClass>
   )
  }

}


export default Header