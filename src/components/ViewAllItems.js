import React, { useEffect, useTransition } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    DialogContent,
    Table,
    TableContainer,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { db } from "../firebase";
import { ref, get, child } from "firebase/database";

export default function ViewAllItems() {
    const [showDialog, setShowDialog] = React.useState(false);
    const [items, setItems] = React.useState({});
    const itemKeys = Object.keys(items);

    const dialogOpen = () => {
        setShowDialog(true);
        fetchData();
    };

    const dialogClose = () => setShowDialog(false);

    const fetchData = () => {
        get(child(ref(db), "/items"))
            .then((snapshot) => {
                const data = snapshot.val();
                const items = { ...data };
                setItems(items);
                console.log(items);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Button variant="outlined" onClick={dialogOpen}>
                View Items
            </Button>
            <Dialog open={showDialog} maxWidth="false">
                <DialogTitle sx={{ alignSelf: "center" }}>
                    All items
                </DialogTitle>
                <DialogContent sx={{ maxWidth: "1000px" }}>
                    {itemKeys.length > 0 ? (
                        <TableContainer
                            component={Paper}
                            sx={{ width: "max-content" }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">ID</TableCell>
                                        <TableCell align="center">
                                            Name
                                        </TableCell>
                                        <TableCell align="center">
                                            Price
                                        </TableCell>
                                        <TableCell align="center">
                                            Location
                                        </TableCell>
                                        <TableCell align="center">
                                            Category
                                        </TableCell>
                                        <TableCell align="center">
                                            Date
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {itemKeys.map((key) => (
                                        <TableRow
                                            key={key}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    { border: 0 },
                                            }}
                                        >
                                            <TableCell align="center">
                                                {items[key].uniqueID}
                                            </TableCell>
                                            <TableCell align="center">
                                                {items[key].name}
                                            </TableCell>
                                            <TableCell align="center">
                                                {items[key].price}
                                            </TableCell>
                                            <TableCell align="center">
                                                {items[key].location}
                                            </TableCell>
                                            <TableCell align="center">
                                                {items[key].category}
                                            </TableCell>
                                            <TableCell align="center">
                                                {items[key].date}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <div>Fetching data...</div>
                    )}
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center" }}>
                    <Button variant="outlined" onClick={dialogClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
