import React, { useEffect, useState } from 'react';

// GET /api/appointments Returns an array of appointments.
export default function Visits() {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    getAppointments();
  }, []);


  // Fetch appointments data
  async function getAppointments() {
    let appointmentsData;

    try {
      appointmentsData = await (await fetch('/api/appointments')).json();
    } catch(error) {
      console.log('FAILED TO GET APPOINTMENTS: ', error.message);
    }

    if (appointmentsData) {
      setVisits(appointmentsData);
    }
  }

  // TODO: Render appointments for Today, Tomorrow, and This Week
    // Maybe create helper function that gets called when passed in "Today" or "Tomorrow" or "This week"
    // Render on this tab below

  return(
    <div>
      <h2>Upcoming Visits</h2>
    </div>
  )
}
