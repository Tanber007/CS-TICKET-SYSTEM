import React, { use } from 'react';
import ShowCard from '../ShowCard/ShowCard';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolveStatus from '../ResolveStatus/ResolveStatus';

const Tickets = ({ ticketsPromise, handleTicketClick, setPurchasedTickets, purchasedTickets }) => {
    const ticketsData = use(ticketsPromise);


    return (
        <div className='w-full px-4 lg:w-10/12 mx-auto my-5 flex flex-col lg:flex-row justify-between gap-6'>

            <div className='w-full lg:w-2/3'>
                <h1 className='text-2xl md:text-4xl font-bold mb-4'>Customer Tickets</h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* Card Section */}
                    {
                        ticketsData.map(cards => <ShowCard handleTicketClick={handleTicketClick} cards={cards} setPurchasedTickets={setPurchasedTickets} purchasedTickets={purchasedTickets}></ShowCard>)
                    }

                </div>
            </div>



            <div className='w-full lg:w-1/3 lg:pl-5 pt-6 lg:pt-0'>
                <div className="mb-8">
                    <h1 className='text-2xl md:text-4xl font-bold mb-4'>Task Status</h1>

                    {
                        purchasedTickets.map(selectedCard => <TaskStatus selectedCard={selectedCard}></TaskStatus>)
                    }


                </div>

                <div>
                    <h1 className='text-2xl md:text-4xl font-bold mb-4'>Resolved Status</h1>
                    
                    <ResolveStatus></ResolveStatus>
                </div>

            </div>
        </div>
    );
};

export default Tickets;