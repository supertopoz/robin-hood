import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'
import InstagramEmbed from 'react-instagram-embed'
import axios from 'axios'



const Content = styled.div`
  display: grid;
  grid-area: content;
  border: 1px solid;
`;


class  Gallery extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
  return (  
  <Content>

  { ["Bg7Jh6YnECP","Bg7D1AsniHr","Bg7CB5fl3rg","Bg7BOBRlOm7","Bg7AwCaB0k7","Bg61uLNFn0X","Bg60HsTBec7"].map((item,key) => {
  return(  <InstagramEmbed
  key={`instakey${key}`}
  url={`https://instagr.am/p/${item}/`}
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
  />
  )
  })
}



  
  </Content>

   )
  }

}


export default Gallery