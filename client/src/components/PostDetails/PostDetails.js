import React, { useEffect } from "react";
import { CircularProgress, Paper, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams } from "react-router-dom";
import { getPost } from "../../actions/posts";

import useStyles from "./styles";

const PostDetails = () => {
    const post = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    if(!post) {
        return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
        )
    };

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div className={classes.card}>
              <div className={classes.section}>
                <Typography className={classes.username} variant="h6">Created by: {post.name}</Typography>
                <Typography className={classes.createdAt} variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                <Typography className={classes.title} variant="h3" component="h2">{post.title}</Typography>
                <Typography className={classes.body} gutterBottom variant="body1" component="p">{post.message}</Typography>
              </div>
              <div className={classes.imageSection}>
                <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
              </div>
            </div>
        </Paper>
    )
};

export default PostDetails;