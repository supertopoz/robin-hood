import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import { history } from 'react-router'
import InstagramEmbed from 'react-instagram-embed'



const Content = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(auto-fill, 320px);
  border: 1px solid;
  max-height: 750px;
  overflow-y: auto;
  align-content: space-between;
  justify-content: space-around;
`;

class  Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.loadInstagram = this.loadInstagram.bind(this)
  }

  loadInstagram() {
    if (!window.instgrm) {
      const s = document.createElement('script')
      s.async = s.defer = true
      s.src = `https:\//platform.instagram.com/en_US/embeds.js`
      s.id = 'react-instagram-embed-script'
      s.onload = this._onLoad
      const body = document.body || null
      if (body) {
        body.appendChild(s)
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.loadInstagram()
    },100)
  }

  render() {
    const tags = ["BhDJVNpFVIc","BhDI_6CF9Ks","BhDIoeeF7dJ","BhC4fVLA_YI","BhCqPP4D2wg","BhCnbxiB8nL","BhCkkYngFSH","BhCgtTWHLN8","BhCgaoogSRL","BhCWH45ncdu","BhCVTtngl1i","BhCS0vcl-G_","BhCPboghAsQ","BhCN4f8FJ-K","BhCLgOsnnLh","BhCJalQgTpl","BhCHQIBnTfl","BhCFzaVHFSz","BhCCND8BOWY","BhB6qiyl28D","BhB0Ei2Bz40","BhB0AK7H9jg","BhByWkFgc3G","BhBxI6GhUjj","BhBtLyDh4WN","BhBilgnAv5i","BhBem0MlKPo","BhBbatzljeB","BhBZ0ZoAN_L","BhBUpc9Aj1o","BhBRNRtgNuB","BhBO4Lph4-2","BhASZLSlTsV","BhAQ9XYl0OF","BhAFHpfAIsP","Bg__sq5BYlb","Bg__Mpal9nw","Bg__IacgOht","Bg_9BQ9gHBu","Bg_8oBygISi","Bg_5U6yFn7c","Bg_4-fKljIn","Bg_4yoTlnno","Bg_4k_QFwNG","Bg_1YMIllCf","Bg_xjRDhNKA","Bg_xiTMFYKV","Bg_wtpuA2bj","Bg_upU6B6Ll","Bg_s9XMF4ok","Bg_r0alAy-0","Bg_qMriHFfo","Bg_lMXqA8mW","Bg_fDZRANQF","BW2x6HoAqwO","39n8TkCziK"];
    return (
      <Content>
      { tags.map((item, index) => {
      return (  <InstagramEmbed
          key={ index }
          url={`https://instagr.am/p/${item}`}
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          onLoading={() => {console.log()}}
          onSuccess={() => {console.log()}}
          onAfterRender={() => {console.log()}}
          onFailure={() => {console.log()}}
        />
        ) 
     })
    }    
    </Content>
        ) 
  }
}

export default Gallery