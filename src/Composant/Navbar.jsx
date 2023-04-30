import React from "react";
import { Navbar,Icon,NavItem } from "react-materialize";
import '../App.css';



function Header (){
    return(
                <Navbar className="nav"
                    alignLinks="right"
                    brand={<a className="brand-logo" href="#"><img className="logo" src="logocompassion.png" alt="" /></a>}
                    centerChildren
                    id="mobile-nav"
                    menuIcon={<Icon></Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                    >
                    <NavItem className="a" to="/"  href="">
                        Home
                    </NavItem>
                    
        </Navbar>
    )
} export default Header
