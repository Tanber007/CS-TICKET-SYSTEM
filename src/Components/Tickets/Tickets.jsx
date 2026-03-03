import React, { use } from 'react';

const Tickets = ({ticketsPromise}) => {
    const ticketsData = use(ticketsPromise);
    console.log(ticketsData);
    return (
        <div>
            <h1>Tickets</h1>
        </div>
    );
};

export default Tickets;