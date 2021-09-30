import { useEffect, useState } from 'react';

export const usePowerShell = (pollingInterval, ...commands) => {
  const [outputs, setOutputs] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const outputs = (
          await Promise.all(commands.map(window.powershell.execute))
        )
          .map((output) => output.join('\n').split(/,/))
          .map((outputRows) =>
            outputRows.map((outputRow) => outputRow.split(/=/))
          )
          .map((entries) => Object.fromEntries(entries));

        setOutputs(outputs);
      } catch (error) {
        console.error(error);
      }
    }, pollingInterval);

    return () => clearInterval(interval);
  });

  return outputs;
};
