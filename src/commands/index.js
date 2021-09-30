export const cpu = `
    $Performance = Get-CimInstance -ClassName Win32_PerfFormattedData_PerfOS_System
    Write-Output "processCount=$($Performance.Processes),processQueue=$($Performance.ProcessorQueueLength)"
    `;

export const temperature = `
    $Temp = Get-CimInstance -ClassName Win32_PerfFormattedData_Counters_ThermalZoneInformation
    $TempK = $Temp.HighPrecisionTemperature / 10
    $TempC = $TempK - 273.15
    $TempF = (9 / 5) * $TempC + 32

    Write-Output "f=$($TempF),c=$($TempC)"
    `;
