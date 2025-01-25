import { useContract, useSigner } from "wagmi";
import { abi } from "./QueueSystem.json"; // ABI of the deployed contract

const contractAddress = "0xYourDeployedContractAddress";

export const useQueueSystem = () => {
  const { data: signer } = useSigner();

  const contract = useContract({
    address: contractAddress,
    abi,
    signerOrProvider: signer,
  });

  return {
    joinQueue: async () => {
      if (!contract) return;
      await contract.joinQueue();
    },
    leaveQueue: async () => {
      if (!contract) return;
      await contract.leaveQueue();
    },
    getQueue: async () => {
      if (!contract) return [];
      return await contract.getQueue();
    },
  };
};
