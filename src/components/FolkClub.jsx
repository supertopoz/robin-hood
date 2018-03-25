import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'

const Content = styled.div`
  display: grid;
  grid-area: content;
  border: 1px solid;
`;


class  FolkClub extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  FolkClub
  </Content>
   )
  }

}


export default FolkClub