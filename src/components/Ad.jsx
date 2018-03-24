import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'

const Content = styled.div`
  display: grid;
  grid-area: ad;
  border: 1px solid;
`;


class  Ad extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  Ad
  </Content>
   )
  }

}


export default Ad