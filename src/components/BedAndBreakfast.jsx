import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'
import Slider from 'react-slick'


const Heading = styled.div`
  color: #4e4a46;
  padding-bottom: 5px;
  padding-top: 10px;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 1px;
`;


const Symbols = styled.div`
  background: #fffce1;
  padding: 5px;
  display: grid;
  align-content: space-between;
  justify-content: space-around;
  margin-top: 5px;
  font-size: 15px;
  color: #4e4a46;
  grid-template-columns: minmax(50px, max-content)
                       repeat(auto-fill, 50px);
`;

const Description = styled.div`
  font-size: 15px;
  color: #4e4a46;
`;

const Content = styled.div`

  margin-top: 1rem;
  display: grid;
  grid-gap: 20px;
  * {
  min-height: 0;
  min-width: 0;
  }
  grid-template-columns: 1fr 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const AccCard = styled.div`
  display: grid;
`;

const Img = styled('img')`
  width: 100%;
`;

class  HolidayCottages extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (  
  <Content>

  </Content>
   )
  }

}


export default HolidayCottages