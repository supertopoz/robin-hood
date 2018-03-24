import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'

const Content = styled.div`
  display: grid;
  grid-area: footer;
  border: 1px solid;
`;


class  Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  Footer
  </Content>
   )
  }

}


export default Footer