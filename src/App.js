import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import SearchScreen from './components/SearchScreen/SearchScreen'

function App() {
    return (
        <div>
            <Router>
                <Route path="/" exact component={HomePage}/>
                <Route path="/search/:query" component={SearchScreen}/>
            </Router>
        </div>
    )
}

export default App
