import React, { use } from 'react';
import ShowCard from '../ShowCard/ShowCard';
import TaskStatus from '../TaskStatus/TaskStatus';

const Tickets = ({ ticketsPromise, handleTicketClick, setPurchasedTickets, purchasedTickets }) => {
    const ticketsData = use(ticketsPromise);


    return (
        <div className='w-10/12 mx-auto my-5 flex justify-between gap-3'>

            <div className='w-2/3'>
                <h1 className='text-4xl font-bold mb-4'>Customer Tickets</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* Card Section */}
                    {
                        ticketsData.map(cards => <ShowCard handleTicketClick={handleTicketClick} cards={cards} setPurchasedTickets={setPurchasedTickets} purchasedTickets={purchasedTickets}></ShowCard>)
                    }

                </div>
            </div>



            <div className='w-1/3 pl-5'>
                <div>
                    <h1 className='text-4xl font-bold mb-4'>Task Status</h1>

                    {
                        purchasedTickets.map(selectedCard => <TaskStatus selectedCard={selectedCard}></TaskStatus>)
                    }


                </div>

                <div>
                    <h1 className='text-4xl font-bold mb-4'>Resolved Status</h1>
                </div>

            </div>
        </div>
    );
};

export default Tickets;