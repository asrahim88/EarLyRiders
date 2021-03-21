import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Destination = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <h1>This is destination{loggedInUser.name}</h1>
        </div>
    );
};

export default Destination;