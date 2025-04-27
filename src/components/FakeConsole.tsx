"use client";

import { useEffect, useState, useRef, useMemo } from "react";

export default function FakeConsole() {
  const [output, setOutput] = useState<string[]>([]);
  const consoleIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Memoized command data
  const commandStart = useMemo(
    () => [
      "Performing DNS Lookups for",
      "Searching",
      "Analyzing",
      "Estimating Approximate Location of",
      "Compressing",
      "Requesting Authorization From:",
      "wget -a -t",
      "tar -xzf",
      "Entering Location",
      "Compilation Started of",
      "Downloading",
    ],
    []
  );

  const commandParts = useMemo(
    () => [
      "Data Structure",
      "http://wwjd.com?au&2",
      "Texture",
      "TPS Reports",
      ".... Searching ...",
      "http://zanb.se/?23&88&far=2",
      "http://ab.ret45-33/?timing=1ww",
    ],
    []
  );

  const commandResponses = useMemo(
    () => [
      "Authorizing",
      "Authorized...",
      "Access Granted..",
      "Going Deeper....",
      "Compression Complete.",
      "Compilation of Data Structures Complete..",
      "Entering Security Console...",
      "Encryption Unsuccessful Attempting Retry...",
      "Waiting for response...",
      "....Searching...",
      "Calculating Space Requirements",
    ],
    []
  );

  useEffect(() => {
    const addConsoleOutput = () => {
      const commandType = Math.floor(Math.random() * 4);
      let newLine = "";

      switch (commandType) {
        case 0:
          newLine = `${commandStart[Math.floor(Math.random() * commandStart.length)]} ${
            commandParts[Math.floor(Math.random() * commandParts.length)]
          }`;
          break;
        case 1:
          newLine = `$ ${commandResponses[Math.floor(Math.random() * commandResponses.length)]}`;
          break;
        case 2:
          newLine = `[${new Date().toLocaleTimeString()}] ${
            commandResponses[Math.floor(Math.random() * commandResponses.length)]
          }`;
          break;
        default:
          newLine = `> ${Math.random().toString(36).substring(2, 8)}`;
      }

      setOutput((prev) => [...prev.slice(-50), newLine]); // Keep last 50 lines
    };

    // Start with a few initial lines
    for (let i = 0; i < 5; i++) {
      addConsoleOutput();
    }

    // Start console output
    consoleIntervalRef.current = setInterval(addConsoleOutput, 100 + Math.random() * 200);

    return () => {
      if (consoleIntervalRef.current) clearInterval(consoleIntervalRef.current);
    };
  }, [commandStart, commandParts, commandResponses]);

  return (
    <div className="text-green-500 font-mono text-xs overflow-hidden z-0 pointer-events-none">
      <div className="overflow-hidden opacity-5">
        {output.map((line, index) => (
          <div key={index} className="whitespace-nowrap">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}