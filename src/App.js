import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from './Components/landingpage';
import About from './Components/Header/Navigation/Menu/about';
import Blog from './Components/Header/Navigation/Menu/blog';
import DailyDevotions from './Components/Header/Navigation/Menu/devotions';
import AskPastorJuanita from './Components/Header/Navigation/Menu/ask_juanita';
import Support from './Components/Header/Navigation/Menu/support';
import Navbar from './Components/Header/Navigation/navbar';
import Footer from './Components/Footer/footer';
import PageNotFound from './Components/Error404';



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Footer />
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/dailydevotions" exact component={DailyDevotions} />
      <Route path="/contact" exact component={AskPastorJuanita} />
      <Route path="/support" exact component={Support} />
      <Route component={PageNotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
