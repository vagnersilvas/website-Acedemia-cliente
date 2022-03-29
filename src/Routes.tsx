import { Routes as Router, Route } from 'react-router-dom'
import { About } from './components/About'
import { Home } from './components/Home'

export function Routes() {
    return (
        <Router>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
        </Router>
    )
}