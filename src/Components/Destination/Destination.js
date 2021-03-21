import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import './Destination.css';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router';
import fakeData from '../FakeDataJson/fakeDataJson.json';
import PeopleIcon from '@material-ui/icons/People';


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
    const [getDetailsData, setGetDetailsData] = useState([]);
    useEffect(() => {
        setGetDetailsData(fakeData);
    }, [])
    const { key } = useParams();

    const getData = getDetailsData && getDetailsData.find(data => data.id == key);
    console.log(getData);

    const [place, setPlace] = useState({
        findPlace: false,
        from: '',
        to: ''
    });

    const handlePlaceBlur = (e) => {
        if (e.target.name === 'pickFrom') {
            const newPlace = { ...place };
            newPlace.from = e.target.value;
            setPlace(newPlace);

        }

        if (e.target.name === 'toFrom') {
            const newPlace = { ...place };
            newPlace.to = e.target.value;
            setPlace(newPlace);
        }
    }

    const handleSearch = () => {
        const newPlace = { ...place };
        newPlace.findPlace = true;
        setPlace(newPlace);
    }




    const classes = useStyles();
    return (<div className={classes.root}>
        <Container className='maiBody'>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>

                    {place.findPlace ? <div className="detalsMainBox">
                        <div className="placeBox">
                            <div className='lineDiv'>
                                <div className='from'>
                                    <p>{place.from}</p>
                                </div>
                                <div className='to'>
                                    <p>{place.to}</p>
                                </div>
                            </div>
                        </div>
                        <div className='detailsBox'>
                            <div className='detailsImage'>
                                <img src={getData?.photo} alt="" />
                            </div>
                            <div className='count'>
                                <PeopleIcon color="secondary" />  {getData?.count}
                            </div>
                            <div className='price'>
                                <span>$ {getData?.price} </span>
                            </div>

                        </div>
                        <div className='detailsBox'>
                            <div className='detailsImage'>
                                <img src={getData?.photo} alt="" />
                            </div>
                            <div className='count'>
                                <PeopleIcon color="secondary" />  {getData?.count}
                            </div>
                            <div className='price'>
                                <span>$ {getData?.price} </span>
                            </div>

                        </div>
                        <div className='detailsBox'>
                            <div className='detailsImage'>
                                <img src={getData?.photo} alt="" />
                            </div>
                            <div className='count'>
                                <PeopleIcon color="secondary" />  {getData?.count}
                            </div>
                            <div className='price'>
                                <span>$ {getData?.price} </span>
                            </div>

                        </div>
                    </div> :

                        <div className="findDestination">

                            <br />
                            <b>Pick From </b>
                            <br />
                            <input className="inputField" type="text" name="pickFrom" onBlur={handlePlaceBlur} required placeholder="place from" />
                            <br />
                            <b >Pick To </b>
                            <br />
                            <input className="inputField" name="toFrom" type="text" onBlur={handlePlaceBlur} required />
                            <br />

                            <Button className='searchBtn' onClick={() => handleSearch()} variant="contained" color="primary">
                                Search
                            </Button>



                        </div>
                    }
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className= "mapBox" >
                        <img src="https://i.ibb.co/dKmMRnM/Map.png" alt="" />
                    </div>
                </Grid>
            </Grid>
        </Container>


    </div>
    );
};

export default Destination;