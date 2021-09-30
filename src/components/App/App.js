import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Fragment } from 'react';

import { usePowerShell } from 'hooks/usePowerShell';

export default function App() {
  const output = usePowerShell("echo 'powershell sucks'");

  return (
    <Fragment>
      <Typography variant="h1">Hello World</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {output.map((line, index) => (
            <TableRow key={index}>
              <TableCell>{line}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
}
