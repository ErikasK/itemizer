import { useState } from "react";
import { Button } from "@mui/material";
import AddNewItem from "./components/AddNewItem";
import TrackItem from "./components/TrackItem";
import EditITem from "./components/EditItem";

export default function App() {
    const [openModal, setOpenModal] = useState(false);

    const handleClose = () => setOpenModal(false);
    const handleOpen = () => setOpenModal(true);

    return (
        <div className="App-menu">
            <AddNewItem />
            <TrackItem />
            <EditITem />
        </div>
    );
}
