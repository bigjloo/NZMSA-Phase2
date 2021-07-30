import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const ShareDialogContent = () => {
  return (
    <>
      <DialogTitle>Share</DialogTitle>
      <DialogContent>
        <DialogContentText>Share to your friends</DialogContentText>
        <DialogActions>
          <Button>Share</Button>
        </DialogActions>
      </DialogContent>
    </>
  );
};

export default ShareDialogContent;
