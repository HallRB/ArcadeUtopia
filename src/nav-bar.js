// import React from "react";
// import { NavLink as RouterNavLink } from "react-router-dom";
// import { Nav } from "react-bootstrap";
// import { useAuth0 } from "@auth0/auth0-react";
// import LogoutButton from "./logout-button";
// import LoginButton from "./login-button";

// const MainNav = () => (
//     <Nav className="mr-auto">
//         <Nav.Link
//         as={RouterNavLink}
//         to="/"
//         exact
//         activeClassName="router-link-exact-active"
//         >
//             Home
//         </Nav.Link>
//         <Nav.Link
//         as={RouterNavLink}
//         to="/profile"
//         exact
//         activeClassName="router-link-exact-active"
//         >
//             Profile
//         </Nav.Link>
//         <Nav.Link
//         as={RouterNavLink}
//         to="/external-api"
//         exact
//         activeClassName="router-link-exact-active"
//         >
//             External API
//         </Nav.Link>
//     </Nav>
// );

// const AuthNav = () => {
//     const { isAuthenticated } = useAuth0();

//     return(
//         <Nav className="justify-content-end">
//             {isAuthenticated ? <LogoutButton /> : <LoginButton />}
//         </Nav>
//     );
// };

// export default AuthNav