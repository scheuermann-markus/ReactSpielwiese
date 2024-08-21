import { Link } from "react-router-dom";
import TopNav, { NavBrand, NavItem, NavSocial, Theme } from "../components/TopNav/TopNav";

function Header() {
    return (
        <>
            <div style={{ width: "100%", padding: "1rem 10rem", position: "absolute" }} >
                <TopNav theme={Theme.Nox}>
                    <NavBrand>
                        MARKUS SCHEUERMANN
                    </NavBrand>
                    <NavSocial>
                        <a href="https://github.com/scheuermann-markus/ReactSpielwiese" target="_blank">
                            <i className="bi bi-github"></i>
                        </a>
                    </NavSocial>

                    <NavItem>
                        <Link to="/">
                            <div className="_flex">
                                <i className="bi bi-house-door-fill"></i>
                                Home
                            </div>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/simongame">Simon Game</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/tictactoe">TicTacToe</Link>
                    </NavItem>

                </TopNav>
            </div>
        </>
    );
}

export default Header;