import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { X } from "@phosphor-icons/react";
import { useState } from "react";
import AddTaskButton from "../button/AddTaskButton";

function AddTaskDialog() {
  const [openDialog, setOpenDialog] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <div className="flex justify-end py-2">
        <AddTaskButton onClick={handleClickOpen} />
      </div>
      <Dialog open={openDialog} fullWidth={true} maxWidth="md">
        <div className="flex justify-between items-center pr-2">
          <DialogTitle>Edit profile</DialogTitle>
          <IconButton onClick={handleClose}>
            <X />
          </IconButton>
        </div>
        <DialogContent className="flex flex-col gap-2">
          <DialogContentText>Make changes to your profile.</DialogContentText>
          <div className="font-bold mt-2">Name</div>
          <TextField
            fullWidth
            defaultValue="Freja Johnsen"
            placeholder="Enter your full name"
          />
          <div className="font-bold">Email</div>
          <TextField
            fullWidth
            defaultValue="freja@example.com"
            placeholder="Enter your email"
          />
        </DialogContent>
        <DialogActions className="px-2">
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Adicionar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddTaskDialog;
