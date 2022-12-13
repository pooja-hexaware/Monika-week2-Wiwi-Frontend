import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";


function ToppingsDialog({ open, handleClose, toppings }) {



     //let arr = [];
    // let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    // for (let i = 0 ; i < checkboxes.length; i++) {
    //  arr.push(checkboxes[i].value)
    //  console.log(arr[i])

    //}
    // const handleChange = event => {    
    //   if (event.target.checked){ 
    //   arr.push(event.value)
    //   console.log(arr)}
    //   else {    
    //     arr.remove(event.value)   
    //     console.log(arr)  
    //  } 
    // }
    return (
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Toppings</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: 3,
            }}
          >
            {toppings.map((Toppings) => {
                                                return (
                                                    <FormControlLabel
                                                        label={Toppings}
                                                        control={<Checkbox />}
                                                        // onChange={handleChange}
                                                    />
                                                )
                                            })}
            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    )
}

export default ToppingsDialog;