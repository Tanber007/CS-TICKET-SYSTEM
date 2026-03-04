
const ShowCard = ({cards, purchasedTickets, setPurchasedTickets}) => {
    const handleSelected =(ticketData)=>{
        setPurchasedTickets([...purchasedTickets, ticketData])

    }

    const getPriorityColor = (priority) => {
    if (priority === "HIGH_PRIORITY") {
        return "text-red-500";
    }
    else if (priority === "MEDIUM_PRIORITY") {
        return "text-yellow-500";
    } 
    else if (priority === "LOW_PRIORITY") {
        return "text-green-500";
    } 
};

const getStatusColor = (status)=>{
    if (status === "In_Progress") {
        return "text-yellow-500";
    } 
    else if (status === "Open") {
        return "text-green-500";
    } 
    else {
        return "text-gray-500";
    }
};

    return (
        <div onClick={()=>handleSelected(cards)} className="bg-white rounded-xl shadow-md p-5 w-full max-w-md">
                    <div className="flex items-start justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">
                            {cards.title}
                        </h2>
                        <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            <span className={`${getStatusColor(cards.status)}`}>{cards.status}</span>
                        </span>
                    </div>

                    <p className="text-gray-500 text-sm mt-2">
                        {cards.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between mt-4 text-sm">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500">{cards.ticket_id}</span>
                            <span className={`${getPriorityColor(cards.priority)} font-medium`}>{cards.priority}</span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-500">
                            <span>John Smith</span>
                            <div className="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{cards.created_at}</span>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default ShowCard;