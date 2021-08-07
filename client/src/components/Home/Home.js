import React, { useState, useEffect } from 'react';
import { Container, Grow } from '@material-ui/core';
import { useDispatch } from 'react-redux';


import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';


const Home = (props) => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  

  return (
    <Grow in>
      <Container>
        <Posts setCurrentId={setCurrentId} />
      </Container>
    </Grow>
  );
};

export default Home;
