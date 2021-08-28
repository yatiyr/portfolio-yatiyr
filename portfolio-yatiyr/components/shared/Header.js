/* eslint-disable @next/next/no-html-link-for-pages */
import React, {useState} from "react";
import Link from "next/link";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";

const BsNavLink = props => {
    const {href, title} = props;
    return (
        <Link href={href}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

const BsNavBrand = () => 
    <Link href="/">
        <a className="navbar-brand port-navbar-brand">Yatiyr</a>
    </Link>


const LoginLink = () => 
    <a className="nav-link port-navbar-link" href="/api/v1/login">Login</a>

const LogoutLink = () =>
    <a className="nav-link port-navbar-link" href="/api/v1/logout">Logout</a>

const Header = ({user, loading}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar
                className="port-navbar port-default absolute"
                color="transparent"
                dark
                expand="md">
                <BsNavBrand/>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="part-navbar-item">
                            <BsNavLink href="/" title="Home"/>
                        </NavItem>
                        <NavItem className="part-navbar-item">
                            <BsNavLink href="/about" title="About"/>
                        </NavItem>
                        <NavItem className="part-navbar-item">
                            <BsNavLink href="/portfolios" title="Portfolios"/>
                        </NavItem>
                        <NavItem className="part-navbar-item">
                            <BsNavLink href="/blogs" title="Blog"/>
                        </NavItem>
                        <NavItem className="part-navbar-item">
                            <BsNavLink href="/cv" title="Cv"/>
                        </NavItem> 
                        {/* <NavItem className="part-navbar-item">
                            <BsNavLink href="/secret" title="Secret"/>
                        </NavItem>
                        <NavItem className="part-navbar-item">
                            <BsNavLink href="/secretssr" title="SecretSSR"/>
                        </NavItem>
                        <NavItem className="part-navbar-item">
                            <BsNavLink href="/onlyadmin" title="Admin"/>
                        </NavItem>
                        <NavItem className="part-navbar-item">
                            <BsNavLink href="/onlyadminssr" title="AdminSSR"/>
                        </NavItem>                                                                                                                                                                                             */}
                    </Nav>
                    <Nav navbar>
                        { !loading &&
                            <>
                                { user &&
                                    <NavItem className="part-navbar-item">
                                        <LogoutLink/>
                                    </NavItem>   
                                }
                                { !user &&
                                    <NavItem className="part-navbar-item">
                                        <LoginLink/>
                                    </NavItem> 
                                }
                            </>
                        }                    
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;