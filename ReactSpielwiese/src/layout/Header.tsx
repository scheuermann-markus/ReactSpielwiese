import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg position-absolute _m-10rem" data-bs-theme="dark">
                <div className="container-fluid _padding-0">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <div className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active _flex" aria-current="page">
                                    <i className="bi bi-house-door-fill"></i>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/simongame" className="nav-link">Simon Game</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tictactoe" className="nav-link" >TicTacToe</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;