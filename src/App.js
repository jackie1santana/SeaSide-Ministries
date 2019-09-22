import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './Components/landingpage';
import About from './Components/Header/Navigation/Menu/about';
import Testimonies from './Components/Header/Navigation/Menu/testimonies';
import DailyDevotions from './Components/Header/Navigation/Menu/devotions';
import AskPastorJuanita from './Components/Header/Navigation/Menu/ask_juanita';
import Give from './Components/Header/Navigation/Menu/give';
import Navbar from './Components/Header/Navigation/navbar';
import Footer from './Components/Footer/footer';
import PageNotFound from './Components/Error404';
import FAQ from './Components/Header/Navigation/Menu/FAQ';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Footer />
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/testimonies" component={Testimonies} />
      <Route path="/dailydevotions" component={DailyDevotions} />
      <Route path="/contact" component={AskPastorJuanita} />
      <Route path="/give" component={Give} />
      <Route path="/faq" component={FAQ} />
      <Route component={PageNotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
