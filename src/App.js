import Button from "./components/buttons/Buttons";
import Dialog from "./components/dialog/Dialog";
import DialogActions from "./components/dialog/DialogActions";
import DialogContent from "./components/dialog/DialogContent";
import DialogTitle from "./components/dialog/DialogTitle";


function App() {
  return (
    <div>
      <Dialog>
        <DialogTitle>
          This is title
        </DialogTitle>
        <DialogContent>
          This is content
        </DialogContent>
        <DialogActions>
          <Button variant="default" onClick={()=>alert('ss')}>Confirm</Button>
          <Button variant="alternative" onClick={()=>alert('ss')}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
