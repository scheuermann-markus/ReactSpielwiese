function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg position-absolute _m-10rem" data-bs-theme="dark">
                <div className="container-fluid _padding-0">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active _flex" aria-current="page" href="#">
                                <i className="bi bi-house-door-fill"></i>
                                Home
                            </a>
                            <a className="nav-link" href="#">Seite 2</a>
                            <a className="nav-link" href="/simongame">Simon Game</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;