import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Scheduler } from "@aldabil/react-scheduler";

export default function AppointmentsShow(): React.JSX.Element {
  return (
    <Stack spacing={3}>
          <Scheduler
      view="week"
      selectedDate={new Date(2021, 4, 5)}
    />
    </Stack>
  );
}
