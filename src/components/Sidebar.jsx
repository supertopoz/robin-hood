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
  The sidebar can contain API data. 
  Perhaps a weather API, Tide API, and travel API. 
  </Content>
   )
  }

}


export default Sidebar