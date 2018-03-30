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


class  News extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  It might be worth re-thinking the news section - currently it changes every so often. Perhaps a blog feed here would be cool. 
  </Content>
   )
  }

}


export default News