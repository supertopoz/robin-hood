import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { connect  } from "react-redux"
import { history } from 'react-router'
import fs from 'fs'
import Slider from 'react-slick'
const image1 = fs.readFileSync(__dirname + '/images/abbotsbury1.jpg')
const image2 = fs.readFileSync(__dirname + '/images/abbotsbury2.jpg')
const image3 = fs.readFileSync(__dirname + '/images/abbotsbury3.jpg')

const Heading = styled.div`
  display:grid; 
  color: #4e4a46;
  padding-bottom: 5px;
  padding-top: 10px;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Details = styled.div`
  display: grid;
  grid-template-rows: 25% 25% 70px;
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
  margin-top: 10px;
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
    console.log(image1)
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'onDemand'
    };
  return (  
  <Content>
  <AccCard >
 
  <Slider {...settings}>
        <div><Img  src={'data:image/jpg;base64,' + image1.toString('base64')}/></div>
        <div><Img  src={'data:image/jpg;base64,' + image2.toString('base64')}/></div>
        <div><Img  src={'data:image/jpg;base64,' + image3.toString('base64')}/></div>
        
        
  </Slider>
   <a href="http://olsen.rhbay.co.uk/index.html" target="_blank">
  <Details>
  <Heading>Olsen Cottage </Heading>
  <Symbols>
  <i className="fa fa-bed"> x4</i>
  <i className="fa fa-wifi"></i>
  <i className="fa fa-ban"></i>
  <i className="fa fa-car"></i>
  </Symbols>
  <Description>Attractive and comfortable cottage on Sunnyside in the heart of the old village</Description>
  
  </Details>
  </a>

  </AccCard>
   <AccCard >
 
  <Slider {...settings}>
        <div><Img  src={'data:image/jpg;base64,' + image1.toString('base64')}/></div>
        <div><Img  src={'data:image/jpg;base64,' + image2.toString('base64')}/></div>
        <div><Img  src={'data:image/jpg;base64,' + image3.toString('base64')}/></div>
        
        
  </Slider>
   <a href="http://olsen.rhbay.co.uk/index.html" target="_blank">
  <Details>
  <Heading>Olsen Cottage </Heading>
    <Symbols>
  <i className="fa fa-bed"> x4</i>
  <i className="fa fa-wifi"></i>
  <i className="fa fa-ban"></i>
  <i className="fa fa-car"></i>
  </Symbols>
  <Description>Attractive and comfortable cottage on Sunnyside in the heart of the old village</Description>

  </Details>
  </a>

  </AccCard>
   <AccCard >
 
  <Slider {...settings}>
        <div><Img  src={'data:image/jpg;base64,' + image1.toString('base64')}/></div>
        <div><Img  src={'data:image/jpg;base64,' + image2.toString('base64')}/></div>
        <div><Img  src={'data:image/jpg;base64,' + image3.toString('base64')}/></div>
        
        
  </Slider>
   <a href="http://olsen.rhbay.co.uk/index.html" target="_blank">
  <Details>
  <Heading>Olsen Cottage </Heading>
  <Symbols>
  <i className="fa fa-bed"> x4</i>
  <i className="fa fa-wifi"></i>
  <i className="fa fa-ban"></i>
  <i className="fa fa-car"></i>
  </Symbols>
  <Description>Attractive and comfortable cottage on Sunnyside in the heart of the old village</Description>
  
  </Details>
  </a>

  </AccCard>
   <AccCard >
 
  <Slider {...settings}>
        <div><Img  src={'data:image/jpg;base64,' + image1.toString('base64')}/></div>
        <div><Img  src={'data:image/jpg;base64,' + image2.toString('base64')}/></div>
        <div><Img  src={'data:image/jpg;base64,' + image3.toString('base64')}/></div>
  </Slider>
   <a href="http://olsen.rhbay.co.uk/index.html" target="_blank">
  <Details>
  <Heading>Abbotsbury</Heading>
  <Symbols>
  <i className="fa fa-bed"> x7</i>
  <i className="fa fa-wifi"></i>
  <i className="fa fa-ban"></i>
  <i className="fa fa-car"></i>
  </Symbols>
  <Description>Cottage with character in the Old Village. Gas central heating and log fire. Sea views if you squint.</Description>
  
  </Details>
  </a>

  </AccCard>
    
  </Content>
   )
  }

}


export default HolidayCottages