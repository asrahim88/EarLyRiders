import React, { useEffect, useState } from 'react';
import fakeData from '../FakeDataJson/fakeDataJson.json';
import HomeDetails from '../HomeDetails/HomeDetails';
import Grid from '@material-ui/core/Grid';
import './Home.css';
import { Container } from '@material-ui/core';

const Home = () => {
    const [ridersDta, setRidersData] = useState([])
    useEffect(() => {
        setRidersData(fakeData);
    }, [])
    return (
        <Container className="container">
           
                <Grid container spacing={5} direction="row" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                    {
                        ridersDta.map((rider) => <HomeDetails rider={rider}></HomeDetails>)
                    }
                </Grid>
            
        </Container>
    );
};

export default Home;