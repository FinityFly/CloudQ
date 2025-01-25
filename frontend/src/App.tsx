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
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import CreateEventPage from "./pages/CreateEventPage";
import JoinEventLine from "./pages/JoinEventLine";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage/>}/>
      <Route path="create-event" element = {<CreateEventPage/>}/>
      <Route path="join-event-line" element = {<JoinEventLine/>}/>
    </Route>
    )
);

function App() {
  return (
    <WagmiProvider config={config}>
      <Layout>
      <RouterProvider router={router} />
      </Layout>
    </WagmiProvider>
  );
}

export default App;
