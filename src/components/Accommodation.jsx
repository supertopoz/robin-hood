import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'
import {  Route } from 'react-router-dom'

import HolidayAccommodation from './HolidayAccommodation.jsx'
import HolidayCottages from './HolidayCottages.jsx'
import BedAndBreakfast from './BedAndBreakfast.jsx'
import CampingAndCaravans from './CampingAndCaravans.jsx'

const Content = styled.div`
  display: grid;
  grid-area: content;
  border: 1px solid;
  grid-template-rows: 15% 90%;
`;

const ButtonLink = styled(Link)`

  margin: 2px;
  background: #fffce1;
  padding: 5px;
  font-size: 10px;
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
  align-content: space-between;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill,  7rem)
`;

class  Accommodation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  <Menu>
  <ButtonLink to={`${this.props.match.path}/holiday`}>Holiday Accommodation</ButtonLink>  
  <ButtonLink to={`${this.props.match.path}/holiday-cottages`}>Holiday Cottages</ButtonLink>  
  <ButtonLink to={`${this.props.match.path}/bed-and-breakfast`}>Bed & Breakfast</ButtonLink>  
  <ButtonLink to={`${this.props.match.path}/camping-and-caravans`}>Camping and Caravans</ButtonLink>  
  </Menu>
  
  <Route exact path={`${this.props.match.path}/holiday`} component={HolidayAccommodation}/>
  <Route path={`${this.props.match.path}/holiday-cottages`} component={HolidayCottages } />  
  <Route path={`${this.props.match.path}/bed-and-breakfast`} component={BedAndBreakfast } />  
  <Route path={`${this.props.match.path}/camping-and-caravans`} component={CampingAndCaravans } /> 
  </Content>
   )
  }

}


export default Accommodation