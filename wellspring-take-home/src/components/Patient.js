import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent'
import StatusChip from './StatusChip';
import { Typography } from '@mui/material';

const Patient = ({ patient }) => {
  const { patientName, caregiverName, visitStatus } = patient;

  return (
    <Card>
      <Typography component='h1'>
        {patientName}
      </Typography>
      <CardContent>
        <Typography component='h5'>
          {caregiverName}
          <StatusChip status= { visitStatus }/>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Patient;
