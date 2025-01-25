import React, { useState, useEffect } from "react";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  useContract,
  useAccount,
  useContractRead,
  useContractWrite,
} from "wagmi";
import { hardhat } from "wagmi/chains";
import { abi } from "./QueueSystemABI"; // Replace with the actual ABI file import

const { chains, provider } = configureChains([hardhat], [publicProvider()]);
const client = createClient({ autoConnect: true, provider });

const contractConfig = {
  address: "YOUR_DEPLOYED_CONTRACT_ADDRESS", // Replace with deployed contract address
  abi,
};

function Test() {
  const { address } = useAccount();
  const [queue, setQueue] = useState<string[]>([]);
  const contract = useContract(contractConfig);

  const { data: queueData } = useContractRead({
    ...contractConfig,
    functionName: "getQueue",
    watch: true,
  });

  const { write: joinQueue } = useContractWrite({
    ...contractConfig,
    functionName: "joinQueue",
  });

  useEffect(() => {
    if (queueData) {
      setQueue(queueData as string[]);
    }
  }, [queueData]);

  return (
    <WagmiConfig client={client}>
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Queue System</h1>
        {address ? (
          <>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => joinQueue()}
            >
              Join Queue
            </button>
            <div className="mt-4">
              <h2 className="text-xl">Current Queue:</h2>
              <ul>
                {queue.map((addr, index) => (
                  <li key={index}>
                    {index + 1}. {addr}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>Please connect your wallet to join the queue.</p>
        )}
      </div>
    </WagmiConfig>
  );
}

export default Test;
