import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import './Destination.css';
import Button from '@material-ui/core/Button';
import fakeData from '../FakeDataJson/fakeDataJson.json';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Destination = () => {

    const [ridersFullData, setRidersFullData] = useState([]);

    useEffect(() => {
        setRidersFullData(fakeData);
    }, [])

    const [place, setPlace] = useState({
        findPlace: false,
        from: '',
        to: ''
    });

    const handlePlaceBlur = (e) => {
        if (e.target.name === 'pickFrom') {
            const newPlace = {...place};
            newPlace.from = e.target.value;
            newPlace.findPlace = true;
            setPlace(newPlace);

        }

        if (e.target.name === 'toFrom') {
            const newPlace = {...place};
            newPlace.to = e.target.value;
            newPlace.findPlace = true;
            setPlace(newPlace);
        }
    }

    const handleSearch = () => {
        
    }


    const classes = useStyles();
    return (<div className={classes.root}>
        <Container className = 'maiBody'>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <div className="findDestination">
                        <p>Pick: {place.from}</p>
                        <b>Pick From </b>
                        <br/>
                        <input className="inputField" type="text" name = "pickFrom" onBlur={handlePlaceBlur} required placeholder="place from"/>
                        <br />
                        <b >Pick To </b>
                        <br />
                        <input className="inputField" name = "toFrom" type="text" onBlur={handlePlaceBlur} required />
                        <br />
                        <Button className = 'searchBtn' onClick={handleSearch} variant="contained" color="primary">
                            Search 
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                </Grid>
            </Grid>
            {
                
            }
        </Container>
    </div>
    );
};

export default Destination;