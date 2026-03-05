import { Suspense, useState } from 'react'
import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Tickets from './Components/Tickets/Tickets'

const fetchTickets = async () => {
  const res = await fetch("/tickets.json")
  return res.json()
}
const ticketsPromise = fetchTickets();

function App() {

  const [purchasedTickets, setPurchasedTickets] = useState([]);
  const [In_Progress, setIn_Progress] = useState(0);

  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [Resolve, setResolve] = useState(0);

  // Incrige the In_Progress value
  const handleTicketClick = (ticketData) => {
    setIn_Progress(prev => prev + 1);
    setPurchasedTickets(prev => [...prev, ticketData]);
  };

  const handleCompleteTicket = (ticketData) => {
    // Remove from purchased tickets
    setPurchasedTickets(prev => prev.filter(ticket => ticket.ticket_id !== ticketData.ticket_id));
    setIn_Progress(prev => prev - 1);

    // Add to resolved tickets
    setResolvedTickets(prev => [...prev, ticketData]);
    setResolve(prev => prev + 1);
  };

  return (
    <>
      {/* Nave-Bar */}

      <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabindex="-1"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Changelog</a></li>
            </ul>
          </div>

          <div className='flex justify-between'>
            <a class="btn btn-ghost text-xl">daisyUI</a>
          </div>


        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Changelog</a></li>

            <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded-lg">
              New Ticket
            </button>
          </ul>

        </div>

      </div>



      {/* Hero Section **/}
      <HeroSection In_Progress={In_Progress} Resolve={Resolve}></HeroSection>

      {/* Tickets Section */}
      <Suspense fallback={<div className="text-center p-10">Loading Tickets...</div>}>
        <Tickets
          handleTicketClick={handleTicketClick}
          purchasedTickets={purchasedTickets}
          setPurchasedTickets={setPurchasedTickets}
          ticketsPromise={ticketsPromise}
          handleCompleteTicket={handleCompleteTicket}
          resolvedTickets={resolvedTickets}
        ></Tickets>
      </Suspense>
    </>
  )
}

export default App
