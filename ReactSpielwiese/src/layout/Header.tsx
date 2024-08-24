import { Link } from "react-router-dom";
import TopNav, { NavBrand, NavDropDown, NavDropDownItem, NavItem, NavSocial, Theme } from "../components/TopNav/TopNav";
import { ScrollSectionIntoView } from "../functions/ScrollSectionIntoView";

export default function Header() {
    return (
        <>
            <div style={{ width: "100%", padding: "1rem 10rem", position: "absolute" }} >
                <TopNav theme={Theme.Nox}>
                    <NavBrand>
                        MARKUS SCHEUERMANN
                    </NavBrand>
                    <NavSocial>
                        <a href="https://github.com/scheuermann-markus/ReactSpielwiese" target="_blank" title="GitHub Repository">
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

                    <NavDropDown title="Sections" >
                        <NavDropDownItem>
                            <a onClick={(e) => {
                                e.preventDefault();
                                ScrollSectionIntoView("color-input");
                            }}
                            >
                                Color Input
                            </a>
                        </NavDropDownItem>
                        <NavDropDownItem>
                            Item 2
                        </NavDropDownItem>
                        <NavDropDownItem>
                            Item 3
                        </NavDropDownItem>
                    </NavDropDown>
                </TopNav>
            </div>
        </>
    );
}
