import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChartBar,
  faAddressCard,
  faStar,
  faCodeBranch,
  faBoxes,
  faBox,
  faClock,
} from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Github from 'pages/github'

library.add(faChartBar)
library.add(faStar)
library.add(faAddressCard)
library.add(faCodeBranch)
library.add(faBoxes)
library.add(faBox)
library.add(faClock)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Github />
      </div>
    )
  }
}

export default App
