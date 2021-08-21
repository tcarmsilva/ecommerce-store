
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
                
                <Navbar color="dark"  expand="md">

                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar >

                            <NavItem >
                                <NavLink className="text-light"  href="/components/">Categoria 1</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/components/">Categoria 2</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/components/">Categoria 3</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/components/">Categoria 4</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/components/">Categoria 5</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/components/">Categoria 6</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/components/">Categoria 7</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="text-light"  href="/components/">Categoria 8</NavLink>
                            </NavItem>


                        </Nav>

                    </Collapse>
                </Navbar>
                
            </div>
        );
};


export default UpperBar;