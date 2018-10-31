import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGhost, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Github from 'pages/github'

library.add(faGhost)
library.add(faAddressCard)

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
