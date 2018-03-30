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


class  Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  <h3>Proposal and Info</h3>
  <p>Each part of the app exists as a module independent of other modules. 
  This means the site can have modules added and removed as needed</p>
  <p>Each Module can also pick up it's own data from different locations</p>
  <p>It is suggested to build the site quickly at the start to use a Google Sheet for the content data of modules</p>
  <p>Later the data can come from a larger database. </p>
  <p>This website is a single page application. This makes it superfast and there is not loading between pages. </p>
  </Content>
   )
  }

}


export default Home