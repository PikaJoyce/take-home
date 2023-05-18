import React from 'react';
import Chip from '@mui/material/Chip';

function statusColor(status) {
  switch(status) {
    case 'Started training':
      return 'success'
    case 'Missing documentation':
      return 'warning'
    default:
      return 'default'
  }
}

function StatusChip ({ status }) {
  return (
    <Chip color={statusColor(status)} size="small" label={status}></Chip>
  )
}

export default StatusChip;
