import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'

const Content = styled.div`
  display: grid;
  grid-area: adTwo;
  border: 1px solid;
`;


class  AdTwo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  AdTwo
  </Content>
   )
  }

}


export default AdTwo