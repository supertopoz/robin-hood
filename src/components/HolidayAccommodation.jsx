import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'

const Content = styled.div`

`;


class  HolidayAccommodation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  I suggest here that each entry for a holiday accommodation is made as a modular data card. Then the data comes from a google sheet that you control. 
  The sheet will have columns for each part of each data card. 

  <p>It is possible to add images and Google maps for each accommodation</p>
  <p>It is also possible to create a booking API in this location. It could also be possible for a hotel etc to show availability</p>
  </Content>
   )
  }

}


export default HolidayAccommodation