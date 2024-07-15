import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Home'
import Footer from './layout/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import SimonGame from './projects/SimonGame/SimonGame'


function App() {
    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} /> {/* default redirect to Home */}
                <Route path="/" element={<Home />} />
                <Route path="/simongame" element={<SimonGame />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
