import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, ButtonGroup } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';


const Navbar = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">TRAVELbytes</Typography>
        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
        
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <ButtonGroup variant="contained" color="default" aria-label="contained primary button group">
            <Button component={Link} to="/" variant="contained" color="default">Home</Button>
            <Button variant="contained" color="default" onClick={props.handleAddPost}>+</Button>
            <Button component={Link} to="/explore" variant="contained" color="default">Explore</Button>
            <Button component={Link} to="/auth" variant="contained" color="default">Sign In</Button>
          </ButtonGroup>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
