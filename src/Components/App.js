import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';
import MidSection from './MidSection';
import Faq from './Faq';
import Footer from './Footer';
import './Styles/App.css';

class App extends React.Component{
  render()
  {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <Intro />
        <MidSection />
        <Faq />
        <Footer />
      </div>
  
    )
  }
}
  
export default App;
