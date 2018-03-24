import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'

const Content = styled.div`
  display: grid;
  grid-area: sidebar;
  border: 1px solid;
`;


class  Sidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  Sidebar
  </Content>
   )
  }

}


export default Sidebar