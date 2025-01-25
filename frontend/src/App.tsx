import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { config } from "./config";
import QueueApp from "./components/QueueApp";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<QueueApp />}></Route>)
);

function App() {
  return (
    <WagmiProvider config={config}>
      <RouterProvider router={router} />
    </WagmiProvider>
  );
}

export default App;
