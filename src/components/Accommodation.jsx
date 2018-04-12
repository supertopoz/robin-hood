import React from 'react'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'

import {  Route, Link } from 'react-router-dom'

import HolidayCottages from './HolidayCottages.jsx'
import BedAndBreakfast from './BedAndBreakfast.jsx'
import CampingAndCaravans from './CampingAndCaravans.jsx'

const Content = styled.div`
  display: grid;
  grid-area: content;
  grid-template-rows: 40px 70%;
`;

const ButtonLink = styled(Link)`

  margin: 1px;
  border: 0.5px solid;
  border-radius: 5px;
  padding: 10px;
  font-size: 12px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 800;
  cursor: pointer;
  color: #4e4a46;

  &:hover{
  background: #c94e50;
  color:#fffce1;
  }

`;

const Menu = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
`;

class  Accommodation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: HolidayCottages
    }
  }

  componentWillMount(){
    console.log(this.props.match.path)
    
  }

  render(){
  return (  
  <Content>
  <Menu> 
  <ButtonLink to={`${this.props.match.path}/holiday-cottages`}>Cottages</ButtonLink>  
  <ButtonLink to={`${this.props.match.path}/bed-and-breakfast`}>B & B</ButtonLink>  
  <ButtonLink to={`${this.props.match.path}/camping-and-caravans`}>Camping</ButtonLink>  
  </Menu>

  <Route path={`${this.props.match.path}/holiday-cottages`} component={ HolidayCottages } />  
  <Route path={`${this.props.match.path}/bed-and-breakfast`} component={BedAndBreakfast } />  
  <Route path={`${this.props.match.path}/camping-and-caravans`} component={CampingAndCaravans } /> 
  </Content>
   )
  }

}


export default Accommodation