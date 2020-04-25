import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Base/Header'
import Footer from './Base/Footer'
import HomePage from './Homepage/HomePage'
import Vine from './Vine/Vine'
import Bascket from './ItemPages/Bascket/Bascket'
import VinePage from './ItemPages/Vine/VinePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/Vine" component={Vine} />
            <Route path="/Vin/:id" component={VinePage} />
            <Route path="/Shoping_bag" component={Bascket} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
