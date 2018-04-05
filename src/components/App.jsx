import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { connect } from "react-redux"
import Header from './Header.jsx'
import Menu from './Menu.jsx'

import Footer from './Footer.jsx'
import Ad from './Ad.jsx'
import Sidebar from './Sidebar.jsx'
import AdTwo from './AdTwo.jsx'
import './styles.css'

// Routes
import Home from './Home.jsx'
import Accommodation from './Accommodation.jsx'
import Gallery from './Gallery.jsx'
import News from './News.jsx'
import History from './History.jsx'
import Links from './Links.jsx'
import FolkClub from './FolkClub.jsx'
import Shop from './Shop.jsx'



const Wrapper = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   font: 1.2em Helvetica, arial, sans-serif;
   color: #fffce1;
   padding: 5px;
   border: 1px solid;
`;



@connect((store) => { 
  return {
    user: store.styleReducer.styles
  };
})

class App extends React.Component {
  constructor(props){
  	super(props);
  }

  render(){

  	return(
		<Router>
		<Wrapper className="wrapper">
		<Header />
    <Menu />
    <Ad />
    
    <Sidebar />
    <AdTwo />

    <Route exact path='/' component={Home} />    
    <Route  path='/accommodation' component={Accommodation} />    
    <Route  path='/gallery' component={Gallery} />    
    <Route  path='/news' component={News} />    
    <Route  path='/history' component={History} />    
    <Route  path='/links' component={Links} />    
    <Route  path='/folkclub' component={FolkClub} />    
    <Route  path='/shop' component={Shop} />    
    <Footer />
		</Wrapper>	    
		</Router>
  		)
  }
  


}


//export default hot(module)(App);
export default App;