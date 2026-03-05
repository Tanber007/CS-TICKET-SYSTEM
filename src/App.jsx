import { Suspense, useState } from 'react'
import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import Tickets from './Components/Tickets/Tickets'
 import { toast, ToastContainer } from 'react-toastify';

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

    toast('Resolved')

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
            <a class="btn btn-ghost text-xl">CS-TICKET SYSTEM</a>
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



      {/* Footer */}

      <footer class="bg-black text-gray-400 px-10 py-16 font-sans">
        <div class="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          <div class="lg:col-span-1">
            <h2 class="text-white text-xl font-bold mb-6">CS — Ticket System</h2>
            <p class="text-[14px] leading-[1.6] text-gray-400">
              This project, CS — Ticket System, is a React-based web application designed to help users manage and track customer support tickets through a simple, interactive workflow.
            </p>
          </div>

          <div class="lg:pl-10">
            <h3 class="text-white text-[17px] font-semibold mb-6">Company</h3>
            <ul class="space-y-4 text-[14px]">
              <li class="hover:text-white cursor-pointer">About Us</li>
              <li class="hover:text-white cursor-pointer">Our Mission</li>
              <li class="hover:text-white cursor-pointer">Contact Saled</li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-[17px] font-semibold mb-6">Services</h3>
            <ul class="space-y-4 text-[14px]">
              <li class="hover:text-white cursor-pointer">Products & Services</li>
              <li class="hover:text-white cursor-pointer">Customer Stories</li>
              <li class="hover:text-white cursor-pointer">Download Apps</li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-[17px] font-semibold mb-6">Information</h3>
            <ul class="space-y-4 text-[14px]">
              <li class="hover:text-white cursor-pointer">Privacy Policy</li>
              <li class="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li class="hover:text-white cursor-pointer">Join Us</li>
            </ul>
          </div>

          <div>
            <h3 class="text-white text-[17px] font-semibold mb-6">Social Links</h3>
            <ul class="space-y-4 text-[14px]">
              <li class="flex items-center gap-3">
                <span class="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">X</span>
                @CS — Ticket System
              </li>
              <li class="flex items-center gap-3">
                <span class="bg-white text-black rounded-sm w-5 h-5 flex items-center justify-center text-[10px] font-bold">in</span>
                @CS — Ticket System
              </li>
              <li class="flex items-center gap-3">
                <span class="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-[12px] font-bold">f</span>
                @CS — Ticket System
              </li>
              <li class="flex items-center gap-3">
                <span class="text-lg">✉</span>
                support@cst.com
              </li>
            </ul>
          </div>
        </div>

        <div class="mx-auto border-t border-gray-800 mt-16 pt-8 text-center text-[14px]">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </footer>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
