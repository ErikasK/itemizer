import React from "react";

import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function TrackItem() {
    const [showDialog, setShowDialog] = React.useState(false);

    const dialogOpen = () => setShowDialog(true);
    const dialogClose = () => setShowDialog(false);

    return (
        <>
            <Button variant="outlined" onClick={dialogOpen}>
                Track item
            </Button>
            <Dialog open={showDialog} onClose={dialogClose}>
                <DialogTitle>Add new item</DialogTitle>
                <DialogContent>Here be form for said item</DialogContent>
            </Dialog>
        </>
    );
}
