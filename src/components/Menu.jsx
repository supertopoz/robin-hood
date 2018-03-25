import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'

import firebase from 'firebase';
import { connect  } from "react-redux"
import { history } from 'react-router'



const theme = {
  width: 250,
  closeBtn: 'none'
}


const Nav = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-area: nav;
    align-content: space-between;
    justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 170px); 
  @media (max-width: 372px){
    height: 100%;
    width: ${props => props.theme.width}px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
`;

const MenuBtn = styled(Link)`
  background: #fffce1;
  padding: 0.3em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 800;
  border-top-left-radius: 20px 50px;
  border-top-right-radius: 20px 50px;
  border-bottom-right-radius: 20px 50px;
  border-bottom-left-radius: 20px 50px;
  cursor: pointer;
  color: #4e4a46;
  font-size: 0.8em;
  &:hover{
    background: #c94e50;
  color:#fffce1;
  };

`;

const CloseBtn = styled.div`
   display: none;
  @media (max-width: 372px){
    position: absolute;
    top:10px;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    display: block;
  }
`;

class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      width: 250
    }  
    this.closeMenu = this.closeMenu.bind(this)  
    this.openMenu = this.openMenu.bind(this)  
  }

  closeMenu(){
    this.setState({width: 0})
  }

  openMenu(){
    this.setState({width: 250})
  }

  render(){
  return (   
  <Nav theme={{ width: this.state.width}}>
  <CloseBtn onClick={(e) => this.closeMenu()}>X</CloseBtn>
  <MenuBtn onClick={(e) => this.closeMenu()} to='/'>Home</MenuBtn>
  <MenuBtn onClick={(e) => this.closeMenu()} to='/accommodation/holiday'>Accomodation</MenuBtn>
  <MenuBtn onClick={(e) => this.closeMenu()} to='/news'>News</MenuBtn>
  <MenuBtn onClick={(e) => this.closeMenu()} to='/gallary'>Gallary</MenuBtn>
  <MenuBtn onClick={(e) => this.closeMenu()} to='/history'>History</MenuBtn>
  <MenuBtn onClick={(e) => this.closeMenu()} to='/links'>Links</MenuBtn>
  <MenuBtn onClick={(e) => this.closeMenu()} to='/folkclub'>Folk club</MenuBtn>
  <MenuBtn onClick={(e) => this.closeMenu()} to='/shop'>Shop</MenuBtn>
  </Nav>
   )
  }

}


export default Menu;