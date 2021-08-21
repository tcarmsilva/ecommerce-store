
import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


const UpperBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
        
        return(
            <div>
                
                <Navbar color="dark"  expand="md" className="card text-center">

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>

                            <NavItem>
                                <NavLink className="text-light mx-6"  href="/categories/electronics">Electronics</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/categories/jewelery">Jewelery</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/categories/men-clothing">Men clothing</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/categories/women-clothing">Women clothing</NavLink>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Navbar>
                
            </div>
        );
};


export default UpperBar;