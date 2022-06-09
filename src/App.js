import { useState } from "react";
import { Button } from "@mui/material";
import AddNewItem from "./components/AddNewItem";
import TrackItem from "./components/TrackItem";
import EditITem from "./components/EditItem";
import ViewAllItems from "./components/ViewAllItems";

export default function App() {
    return (
        <div className="App-menu">
            <AddNewItem />
            <TrackItem />
            <EditITem />
            <ViewAllItems />
        </div>
    );
}
