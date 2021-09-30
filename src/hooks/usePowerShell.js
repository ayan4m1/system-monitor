import { useEffect, useState } from 'react';

export const usePowerShell = (command) => {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    const execute = async () => {
      try {
        const result = await window.powershell.execute(command);

        setOutput((out) => [...out, ...result]);
      } catch (error) {
        console.error(error);
      }
    };

    execute();
  }, [command, setOutput]);

  return output;
};
