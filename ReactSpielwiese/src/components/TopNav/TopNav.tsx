import React, { ReactNode, Children, isValidElement } from 'react';
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
    const navBrand = Children.toArray(children).find(child => {
        return isValidElement(child) && child.type === NavBrand;
    });

    const navItems = Children.toArray(children).filter(child => {
        return (
            isValidElement(child) && child.type === NavItem
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
                {navItems}
            </div>

            <div className="topnav__right">
                {navSocial}
            </div>

        </nav>
    );
}


export const NavItem = ({ children }: { children: ReactNode }) => {
    return (
        <li className="topnav-item">

            {children}

        </li>
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