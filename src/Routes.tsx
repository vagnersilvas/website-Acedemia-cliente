import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'

export function RoutePath() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
    )
}