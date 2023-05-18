// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Stack from '@mui/joy/Stack';
import Patient from './Patient';

// GET /api/patients Returns an array of patients.
const RecentPatients = () => {
  const [ patients, setPatients ] = useState([])

  // Pass in Patient to check if we get new patients and update list
  useEffect(() => {
    getPatients();
  }, []);

  // Fetch patient data
  async function getPatients() {
    let patientData;
    try {
      patientData = await (await fetch('/api/patients')).json();
    } catch(error) {
      console.log('FAILED TO GET PATIENTS: ', error.message);
    }

    if (patientData) {
      setPatients(patientData);
    }
  }

  // Sort patients by lastCheckIn date in descending order
  const sortedPatients = [...patients].sort((a, b) => new Date(b.lastCheckIn) - new Date(a.lastCheckIn));

  return(
    <div>
      <h2>Recent Patients</h2>
      <Stack spacing={1}>
      {sortedPatients.slice(0, 7).map(patient => (
          <div key={patient.id}>
            <Patient patient={patient} />
          </div>
        ))}
      </Stack>
    </div>
  )
}

export default RecentPatients;