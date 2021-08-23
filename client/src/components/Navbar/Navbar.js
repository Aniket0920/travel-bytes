import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom"
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from "./styles";
import memoriesLogo from "../../images/logo.png";

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if(token) {
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, user?.token]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
          <div to="/" className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">TRAVELbytes</Typography>
            <img className={classes.image} src={memoriesLogo} alt="icon" height="50px" />
          </div>
            
          <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button component={Link} to="/explore" variant="contained" className={classes.explore} color="default">Explore</Button>
                    <Button variant="contained" className={classes.logout} color="default" onClick={logout}>Logout</Button>
                </div>
            ) : (
              <div>
              <Button component={Link} to="/explore" variant="contained" className={classes.explore} color="default">Explore</Button>
              <Button component={Link} to="/auth" variant="contained" color="default">Sign In</Button>
              </div>     
            )}
          </Toolbar>  
        </AppBar>
    );
}

export default Navbar;
