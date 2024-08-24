import React, { ReactNode, Children, isValidElement, useState } from 'react';
import './top-nav.css';


export enum Theme {
    Lumos = "lumos",
    Nox = "nox",
}

interface TopNavProps {
    theme?: Theme,
    children: ReactNode,
}

export default function TopNav({ theme = Theme.Lumos, children }: TopNavProps) {
    const [activeItem, setActiveItem] = useState<number>(0);
    const HandleNavItemClick = (index: number) => {
        setActiveItem(index);
    };

    const navBrand = Children.toArray(children).find(child => {
        return isValidElement(child) && child.type === NavBrand;
    });

    const navItems = Children.toArray(children).filter(child => {
        return (
            isValidElement(child) && (child.type === NavItem || child.type === NavDropDown)
        );
    });

    const navSocial = Children.toArray(children).find(child => {
        return isValidElement(child) && child.type === NavSocial;
    });


    return (
        <nav className={`topnav topnav--${theme}`} >

            <div className="topnav__left">
                {navBrand}
            </div>

            <div className="topnav__center">
                {navItems.map((child, index) => (
                    <li key={index}
                        className={`topnav-item ${activeItem === index ? 'topnav-item--active' : ''}`}
                        onClick={() => {
                            if (isValidElement(child) && child.type === NavItem) {
                                HandleNavItemClick(index);
                            }
                        }}>
                        {child}
                    </li>
                ))}
            </div>

            <div className="topnav__right">
                {navSocial}
            </div>

        </nav>
    );
}



export const NavItem = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    );
}

export const NavBrand = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
        </>
    );
}

export const NavSocial = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
        </>
    );
}

interface NavDropDownProps {
    title: string;
    children: ReactNode;
}

export const NavDropDown = ({ title, children }: NavDropDownProps) => {
    return (
        <li className="topnav-item topnav-dropdown">
            <div className="topnav-dropdown__titel">
                {title}
            </div>
            <div className="topnav-dropdown__container">
                {children}
            </div>
        </li>
    );
}

export const NavDropDownItem = ({ children }: { children: ReactNode }) => {
    return (
        <div className="topnav__drop-down-item">
            {children}
        </div>
    );
}