export const CLOUDQ_ADDRESS =
  "0x123456789abcdef123456789abcdef123456789abcdef123456789abcdef1234";

export const RPC_URL = "http://localhost:5050";

export const CLOUDQ_ABI = [
  {
    name: "viewQueue",
    type: "function",
    inputs: [],
    outputs: [{ name: "queue", type: "felt[]" }],
    state_mutability: "view",
  },
  {
    name: "getFrontOfQueue",
    type: "function",
    inputs: [],
    outputs: [{ name: "front", type: "address" }],
    state_mutability: "view",
  },
  {
    name: "getPosition",
    type: "function",
    inputs: [{ name: "personId", type: "uint" }],
    outputs: [{ name: "position", type: "uint" }],
    state_mutability: "view",
  },
  {
    name: "getLength",
    type: "function",
    inputs: [],
    outputs: [{ name: "length", type: "uint" }],
    state_mutability: "view",
  },
  {
    name: "addPerson",
    type: "function",
    inputs: [{ name: "contractAddress", type: "address" }],
    outputs: [],
    state_mutability: "external",
  },
  {
    name: "removePerson",
    type: "function",
    inputs: [{ name: "personId", type: "uint" }],
    outputs: [],
    state_mutability: "external",
  },
] as const;
