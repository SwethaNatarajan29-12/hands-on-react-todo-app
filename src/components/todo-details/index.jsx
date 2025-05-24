import { Fragment } from "react";
import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

function TodoDetails({
  todoDetails,
  openDialog,
  setOpenDialog,
  setTodoDetails,
}) {
  return (
    <Fragment>
      <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setTodoDetails(null);
              setOpenDialog(false);
            }}
            sx={{
              backgroundColor: "#787b28",
              color: "#fff",
              opacity: "0.75",
              "&:hover": {
                backgroundColor: "#4b4d19",
                color: "#fff",
                opacity: "1",
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
export default TodoDetails;
