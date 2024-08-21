import './global.css'
/*import 'bootstrap/dist/css/bootstrap.css'*/
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Home'
import Footer from './layout/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './layout/Header'
import SimonGame from './projects/SimonGame/SimonGame'
import TicTacToe from './projects/TicTacToe/TicTacToe'


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<Navigate to="/" />} /> {/* default redirect to Home */}
                <Route path="/" element={<Home />} />
                <Route path="/simongame" element={<SimonGame />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
