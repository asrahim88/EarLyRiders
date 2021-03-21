import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} className='logo'>
                    <h3>EaRLyRiDeRs</h3>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <nav>
                        <Link className='hover' to="/home">Home</Link>
                        <Link className='hover' to="/destination">Destination</Link>
                        <Link className='hover' to="/blog">Blog</Link>
                        <Link className='hover' to="/contact">Contact</Link>
                        {loggedInUser.success || loggedInUser.isSignedIn ? <span className='userName'>{loggedInUser.name}</span> :
                            <Link to="/login">
                                <Button variant="contained" color="primary" href="#contained-buttons">
                                    Login
                                </Button>
                            </Link>
                        }
                        
                    </nav>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;