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
import CreateEventPage from "./pages/CreateEventPage";
import JoinEventLine from "./pages/JoinEventLine";
import ManageEventPage from "./pages/ManageEventPage";
import ProfilePage from "./pages/ProfilePage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage/>}/>
      <Route path="create-event" element = {<CreateEventPage/>}/>
      <Route path="join/:id" element = {<JoinEventLine/>}/>
      <Route path="manage/:id" element = {<ManageEventPage/>}/>
      <Route path="profile" element = {<ProfilePage/>}/>

    </Route>
    )
);

function App() {
  return (
    <WagmiProvider config={config}>
      <RouterProvider router={router} />
    </WagmiProvider>
  );
}

export default App;
