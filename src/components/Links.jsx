import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'

const Content = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
  @media (max-width: 550px) {
  grid-template-columns: auto;
  }
  @media (min-width: 950px) {
  grid-template-columns: auto auto auto;
  }
`;

const Card = styled.div`
  border-radius: 5px;
  display: grid;
  height: 150px;

  background: #fffce1;
  grid-template-areas: 
     "cardContent"
     "cardContent"
`;

const Photo = styled.div`
  grid-area: photo;
  background: blue;
`;

const Text = styled.div`
 font-size: 15px;
 color: #4e4a46;

`;

const Title = styled.div`
  display: grid;
    color: #4e4a46;
    padding-bottom: 5px;
    padding-top: 10px;
    font-size: 0.8em;
    font-weight: 600;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
`;

const More = styled.div`
   align-self: center;
   text-align: center;
    background: #c94e50;
    padding: 0.3em;
    text-align: center;
    text-transform: uppercase;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    font-weight: 600;
    border-top-left-radius: 20px 50px;
    border-top-right-radius: 20px 50px;
    border-bottom-right-radius: 20px 50px;
    border-bottom-left-radius: 20px 50px;
    cursor: pointer;
    color: #fffce1;
    font-size: 12px;

`;

const CardContent = styled.div`
  padding: 10px;
  display: grid;
  grid-area: cardContent;

`;

class  Links extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
  return (  
  <Content>
  <Card>
    <CardContent>
      <Title>Old St Stephen’s Church</Title>
      <Text>Old St Stephen’s Church now has its own website</Text>
      <More>More</More>
    </CardContent>
  </Card>
    <Card>
    <CardContent>
      <Title>Robin Hood's bay Museum</Title>
      <Text>Old St Stephen’s Church now has its own website</Text>
      <More>More</More>
    </CardContent>
  </Card>
    <Card>
    <CardContent>
      <Title>History Group</Title>
      <Text>Fylingdales has a vibrant Local History Group</Text>
      <More>More</More>
    </CardContent>
  </Card>
      <Card>
    <CardContent>
      <Title>Village Hall</Title>
      <Text>Fylingdales Village Hall in Robin Hoods Bay caters for a wide variety of activities</Text>
      <More>More</More>
    </CardContent>
  </Card>

    <Card>
    <CardContent>
      <Title>Theresa Tomlinson</Title>
      <Text>Theresa Tomlinson, Children’s Author. For more information about Theresa’s books AND a FREE short story...</Text>
      <More>More</More>
    </CardContent>
  </Card>
      <Card>
    <CardContent>
      <Title>The Walmsley Society </Title>
      <Text>For all those interested in the art and writings of James Ulric and Leo Walmsley.</Text>
      <More>More</More>
    </CardContent>
  </Card>
      <Card>
    <CardContent>
      <Title>Robin Hood’s Bay Tourism Association</Title>
      <Text>There's always something going on in Robin Hood's Bay and/or the local area.</Text>
      <More>More</More>
    </CardContent>
  </Card>
      <Card>
    <CardContent>
      <Title>Hawk and Owl Trust</Title>
      <Text>The Trust is honoured to be managing the moor for biodiversity and archaeology.</Text>
      <More>More</More>
    </CardContent>
  </Card>




  
  
  </Content>
   )
  }

}


export default Links