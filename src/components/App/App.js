import { Typography } from '@mui/material';
import { Fragment } from 'react';

import { usePowerShell } from 'hooks/usePowerShell';
import { cpu, temperature } from 'commands';

export default function App() {
  const [cpuData, tempData] = usePowerShell(10000, cpu, temperature);

  return (
    <Fragment>
      <Typography variant="h1">System Monitor</Typography>
      <Typography variant="h4">CPU: {JSON.stringify(cpuData)}</Typography>
      <Typography variant="h4">Temp: {JSON.stringify(tempData)}</Typography>
    </Fragment>
  );
}
