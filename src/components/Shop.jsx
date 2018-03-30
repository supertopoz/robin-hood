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


class  Shop extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  With the shop it is easy to keep amazon links. 
  <p>Other things are possible also such as selling directly from the site. </p>
  <p>In this section I was also wondering about some local Robin-hood bay shops showcasing their own products etc. </p>
  <p>This could be a great place to generate revenue for local companies and a place to take a small share of that revenue. </p>
  </Content>
   )
  }

}


export default Shop