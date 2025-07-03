import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FeatureSection from './components/FeaturedSection';
import SubscriptionForm from './components/SubscriptionForm';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';
import GlobalStyles from './Theme/GlobalStyles';

function App() {

  return (

    <ThemeProvider theme={Theme}>
    <GlobalStyles/>
      <main className="App">

          <Header/>
          <SubscriptionForm/>
          <FeatureSection/>
          <Testimonials/>
          <Footer/>
      </main>
    </ThemeProvider>
  );
}

export default App;
