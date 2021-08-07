import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from './components/Form/Form';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Map from "./components/Map/Map";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const App = () => {

  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();

  const [addPost, setAddPost] = useState(false);

  const handleAddPost = () =>{
    setAddPost((prevValue)=>(!prevValue));
  }

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar handleAddPost={handleAddPost}/>
        {addPost ? (
          <Modal
            open={addPost} 
            className={classes.modal}
            onClose={handleAddPost} 
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }} >
            <Fade in={addPost}>
              <Container maxWidth='sm'>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Container>
            </Fade>
          </Modal>
        ) : null}
        <Switch>
          <Route path="/" exact render={()=>(<Home addPost={addPost} handleAddPost={handleAddPost} />)} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/explore" exact component={Map} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
