import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'

const Content = styled.div`

`;


class  HolidayCottages extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  HolidayCottages Routes
  </Content>
   )
  }

}


export default HolidayCottages