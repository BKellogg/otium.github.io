import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';

export default class Header extends React.Component {

   render() {
      return (
         <Navbar>
            <Navbar.Header>
               <Navbar.Brand>Ryan Coffman</Navbar.Brand>
               <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
               <Nav pullRight>
                  <IndexLinkContainer to="/">
                     <NavItem>Home</NavItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/projects">
                     <NavItem>Projects</NavItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/blog">
                     <NavItem>Blog</NavItem>
                  </IndexLinkContainer>
                  <IndexLinkContainer to="/about">
                     <NavItem>About</NavItem>
                  </IndexLinkContainer>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      );
   }
}
