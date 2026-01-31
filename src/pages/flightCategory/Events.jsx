import { useEffect } from "react";
import bookedVaribleContext from "../../context/bookedFlights/bookedCreateContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Events() {
  let { bookedFlightsContext } = useContext(bookedVaribleContext);
  let navigate = useNavigate();

  console.log(bookedFlightsContext);

  //! dummy data . todo
  const events = [
    {
      id: 1,
      icon: "✅",
      title: "Flight Booked",
      message: "Your IndiGo flight has been booked",
      time: "02 Mar 2026, 10:00 AM",
    },
    {
      id: 2,
      icon: "⏰",
      title: "Check-in Open",
      message: "Online check-in is now available",
      time: "03 Mar 2026, 3:00 PM",
    },
    {
      id: 3,
      icon: "⚠️",
      title: "Flight Delayed",
      message: "Flight delayed by 30 minutes",
      time: "03 Mar 2026, 6:30 PM",
    },
  ];

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition m-2 "
      >
        ← back
      </button>
      <div className="space-y-4 max-h-210 h-210 px-2 md:h-150 md:flex md:flex-col md:items-center">
        {events.map((event) => (
          <div
            key={event.id}
            className="max-w-md h-40 rounded-xl border bg-white p-4 shadow md:w-150 md:h-40"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">{event.icon}</div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {event.title}
                </h3>

                <p className="text-sm text-slate-600">{event.message}</p>

                <p className="mt-1 text-xs text-slate-400">🕒 {event.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
