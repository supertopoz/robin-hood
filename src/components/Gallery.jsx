import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { history } from 'react-router'
import Slider from 'react-slick'
import InstagramEmbed from 'react-instagram-embed'

const tags = ["BhC4fVLA_YI","BhCqPP4D2wg","BhCnbxiB8nL","BhCkkYngFSH","BhCgtTWHLN8","BhCgaoogSRL","BhCWH45ncdu","BhCVTtngl1i","BhCS0vcl-G_","BhCPboghAsQ","BhCN4f8FJ-K","BhCLgOsnnLh","BhCJalQgTpl","BhCHQIBnTfl","BhCFzaVHFSz","BhCCND8BOWY","BhB6qiyl28D","BhB0Ei2Bz40","BhB0AK7H9jg","BhByWkFgc3G","BhBxI6GhUjj","BhBtLyDh4WN","BhBilgnAv5i","BhBem0MlKPo","BhBbatzljeB","BhBZ0ZoAN_L","BhBUpc9Aj1o","BhBRNRtgNuB","BhBO4Lph4-2","BhASZLSlTsV","BhAQ9XYl0OF","BhAFHpfAIsP","Bg__sq5BYlb","Bg__Mpal9nw","Bg__IacgOht","Bg_9BQ9gHBu","Bg_8oBygISi","Bg_5U6yFn7c","Bg_4-fKljIn","Bg_4yoTlnno","Bg_4k_QFwNG","Bg_1YMIllCf","Bg_xjRDhNKA","Bg_xiTMFYKV","Bg_wtpuA2bj","Bg_upU6B6Ll","Bg_s9XMF4ok","Bg_r0alAy-0","Bg_qMriHFfo","Bg_lMXqA8mW","Bg_fDZRANQF","BW2x6HoAqwO","39n8TkCziK"];

const Content = styled.div`
  align-content: space-between;
  justify-content: space-around;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100%;
  overflow-y: auto;
`;

const ButtonFrame = styled.div`
  display: grid;
   grid-template-columns: 20% 60% 20%;
`;

const Button = styled.div`
  background: #fffce1;
  padding: 0.3em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  border-top-left-radius: 20px 50px;
  border-top-right-radius: 20px 50px;
  border-bottom-right-radius: 20px 50px;
  border-bottom-left-radius: 20px 50px;
  cursor: pointer;
  color: #4e4a46;
  font-size: 0.8em;
  &:hover{
    background: #c94e50;
  color:#fffce1;
  };
`;


class  Gallery extends React.Component {
  constructor(props) {
    super(props)
   this.state = {
      instaPair: ["BhDJVNpFVIc","BhDIoeeF7dJ"],
      count: 2
    }
  }



  render() {
    var settings = {
      dots: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    
    return (
      <Content>
      <ButtonFrame>

     
      <Button onClick={() => {this.slider.slickPrev()}}><i className="fa fa-chevron-left"></i></Button>
         <div></div>
            <Button onClick={() => {
        this.slider.slickNext()
        this.setState({count: this.state.count +1})
        const arr = [...this.state.instaPair, tags[this.state.count] ]
        this.setState({instaPair:arr}) }}><i className="fa fa-chevron-right"></i></Button>
      </ButtonFrame>
        <Slider ref={c => (this.slider = c)} className="sliderDetails" {...settings}>
      { this.state.instaPair.map((item, index) => {
      return (  <InstagramEmbed
          key={ index }
          url={`https://instagr.am/p/${item}`}
          containerTagName='div'
          protocol=''
          hideCaption ={true}
          onLoading={() => {console.log()}}
          onSuccess={() => {console.log()}}
          onAfterRender={() => {console.log()}}
          onFailure={() => {console.log()}}
        />
        ) 
     })
    }    
    </Slider>
    </Content>
        ) 
  }
}

export default Gallery