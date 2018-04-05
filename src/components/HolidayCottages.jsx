import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'
import Slider from 'react-slick'


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
  <AccCard >
 
  <Slider {...settings}>
        <div><Img  src="https://a0.muscache.com/im/pictures/80b548fb-057b-47c2-836c-8ace76476a52.jpg"/></div>
        <div><Img  src="https://a0.muscache.com/im/pictures/f448700a-649e-4338-aef2-c9b1bbafb76b.jpg"/></div>
        <div><Img  src="https://a0.muscache.com/im/pictures/4d5eae9d-56c2-4024-87d4-e49beca7ebb8.jpg"/></div>
  </Slider>
   <a href="http://olsen.rhbay.co.uk/index.html" target="_blank">
  <h3>Olsen Cottage </h3>
  <Description>Attractive and comfortable cottage on Sunnyside in the heart of the old village</Description>
  <h3><i class="fa fa-bed"></i>x4 <i class="fa fa-wifi"></i> 🚭 <i class="fa fa-car"></i></h3>
  
  </a>
  </AccCard>
  <AccCard>
  <Slider {...settings}>
        <div><Img  src="https://a0.muscache.com/im/pictures/80b548fb-057b-47c2-836c-8ace76476a52.jpg"/></div>
        <div><Img  src="https://a0.muscache.com/im/pictures/f448700a-649e-4338-aef2-c9b1bbafb76b.jpg"/></div>
        <div><Img  src="https://a0.muscache.com/im/pictures/4d5eae9d-56c2-4024-87d4-e49beca7ebb8.jpg"/></div>
  </Slider>
  <h1>Heading</h1>
  </AccCard>
  </Content>
   )
  }

}


export default HolidayCottages