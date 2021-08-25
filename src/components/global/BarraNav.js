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
  

const BarraNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="dark"  expand="md" class="navbar-nav nav-fill w-100">
          <NavbarBrand className="text-light" href="/">MY STORE</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="text-light navbar-text" href="/components/">About</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink className="text-light navbar-text" href="/components/">All Products</NavLink>
              </NavItem>


              <InputGroup>
                <Input />
                <InputGroupAddon addonType="append">
                  <Button color="secondary">Search</Button>
                </InputGroupAddon>
              </InputGroup>

              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="text-light">
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>

            <NavItem>
                <NavLink className="text-light navbar-text" href="https://github.com/reactstrap/reactstrap">Profile</NavLink>
            </NavItem>

            <NavbarText className="text-light navbar-text" >Whatsapp</NavbarText>
          
          </Collapse>
        </Navbar>




{/* 



        <Navbar
          className="navbar-horizontal navbar-dark bg-default"
          expand="lg"
        >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Default Color
            </NavbarBrand>
            <button
              aria-controls="navbar-default"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-default"
              data-toggle="collapse"
              id="navbar-default"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-default">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src={require("assets/img/brand/blue.png")}
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-default"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-default"
                      data-toggle="collapse"
                      id="navbar-default"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="ni ni-favourite-28" />
                    <span className="nav-link-inner--text d-lg-none">
                      Discover
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link-icon"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="ni ni-notification-70" />
                    <span className="nav-link-inner--text d-lg-none">
                      Profile
                    </span>
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <NavLink
                    aria-expanded={false}
                    aria-haspopup={true}
                    className="nav-link-icon"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="navbar-default_dropdown_1"
                    onClick={e => e.preventDefault()}
                    role="button"
                  >
                    <i className="ni ni-settings-gear-65" />
                    <span className="nav-link-inner--text d-lg-none">
                      Settings
                    </span>
                  </NavLink>
                  <DropdownMenu
                    aria-labelledby="navbar-default_dropdown_1"
                    right
                  >
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Something else here
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar> */}

      </div>
    );
}

export default BarraNav;