import React, { useEffect } from "react";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    MenuItem,
    Stack,
    TextField,
    Select,
    InputLabel,
} from "@mui/material";
import { ref, push } from "firebase/database";
import { db } from "../firebase";
import QRCode from "react-qr-code";

export default function AddNewItem() {
    const date = new Date(Date.now()).toUTCString();

    const [showFormDialog, setShowFormDialog] = React.useState(false);
    const [showQRDialog, setShowQRDialog] = React.useState(false);

    const [data, setData] = React.useState({
        uniqueID: Math.floor(Math.random() * 10000000000),
        name: "",
        price: "",
        category: "",
        location: "",
        date: date,
        sold: false,
    });

    const dialogFormOpen = () => setShowFormDialog(true);
    const dialogFormClose = () => setShowFormDialog(false);
    const dialogQROpen = () => setShowQRDialog(true);
    const dialogQRClose = () => setShowQRDialog(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        push(ref(db, "/items"), data);
        dialogFormClose();
        dialogQROpen();
        console.log("form submitted with item", data);
    };

    return (
        <>
            <Button variant="outlined" onClick={dialogFormOpen}>
                Add new item
            </Button>
            <Dialog
                open={showFormDialog}
                onClose={dialogFormClose}
                onBackdropClick={"false"}
            >
                <form onSubmit={submitForm}>
                    <DialogTitle sx={{ alignSelf: "center" }}>
                        Add new item
                    </DialogTitle>
                    <DialogContent>
                        <Stack
                            direction="column"
                            spacing={4}
                            sx={{ paddingTop: "20px" }}
                        >
                            <FormControl>
                                <TextField
                                    required
                                    id="item-name"
                                    label="name"
                                    variant="outlined"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl>
                                <TextField
                                    required
                                    id="item-price"
                                    label="price"
                                    name="price"
                                    variant="outlined"
                                    value={data.price}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel id="item-category">
                                    Category
                                </InputLabel>
                                <Select
                                    required
                                    labelId="item-category"
                                    name="category"
                                    label="Category"
                                    variant="outlined"
                                    value={data.category}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Category #1"}>
                                        Category#1
                                    </MenuItem>
                                    <MenuItem value={"Category #2"}>
                                        Category#2
                                    </MenuItem>
                                    <MenuItem value={"Category #3"}>
                                        Category#3
                                    </MenuItem>
                                    <MenuItem value={"Category #4"}>
                                        Category#4
                                    </MenuItem>
                                    <MenuItem value={"Category #5"}>
                                        Category#5
                                    </MenuItem>
                                    <MenuItem value={"Category #6"}>
                                        Category#6
                                    </MenuItem>
                                    <MenuItem value={"Category #7"}>
                                        Category#7
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <TextField
                                    required
                                    id="item-location"
                                    label="location"
                                    name="location"
                                    variant="outlined"
                                    value={data.location}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Stack>
                    </DialogContent>
                    <DialogActions
                        sx={{ justifyContent: "space-around" }}
                        spacing={4}
                    >
                        <Button type="submit">Add</Button>
                        <Button onClick={dialogFormClose}>Cancel</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Dialog
                open={showQRDialog}
                onClose={dialogQRClose}
                onBackdropClick={"false"}
            >
                <DialogTitle sx={{ alignSelf: "center" }}>QR Code</DialogTitle>
                <DialogContent>
                    <QRCode value={data.uniqueID} />
                </DialogContent>
                <DialogActions
                    sx={{ justifyContent: "space-around" }}
                    spacing={4}
                >
                    <Button>Print</Button>
                    <Button onClick={dialogQRClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
