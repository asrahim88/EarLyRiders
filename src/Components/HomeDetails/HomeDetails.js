import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './HomeDetails.css';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});
const HomeDetails = (props) => {
    const { name, photo } = props.rider;
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={3}>
            <Container>
                <Link to = '/destination'>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <div className="imgBox">
                                        <img src={photo} alt="" />
                                    </div>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div className="nameBox">
                                        <h1>{name}</h1>
                                    </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Container>
        </Grid>
    );
};

export default HomeDetails;