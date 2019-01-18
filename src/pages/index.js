import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const styles = {

 
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

 
  paper: {
    padding: 30,
    marginLeft: 0,
    marginRight: 0,
    margin: 30,
    maxWidth: 'auto',
   },  

   textField: {
     margin:30,
     color: '#000000',
   }

};


 


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>      
      </AppBar>

       <Paper className={classes.paper}>
          <Grid container spacing={16}>
          <div className={classes.root}>
     
     
            <Typography variant="h3" gutterBottom>
            Sell Quote Detail 
            </Typography>
            <Typography variant="h5" gutterBottom>
            2015 MINI F56 manual 
            </Typography>



       <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Colour</TableCell>
            <TableCell align="right"> Green</TableCell>
    
          </TableRow>
          <TableRow>
            <TableCell>Hand</TableCell>
            <TableCell align="right"> 0</TableCell>

          </TableRow>

                <TableRow>
            <TableCell>Mileage</TableCell>
            <TableCell align="right">  14000</TableCell>

          </TableRow>

                <TableRow>
            <TableCell>DS</TableCell>
            <TableCell align="right">  Yes </TableCell>

          </TableRow>

                  <TableRow>
            <TableCell>CSGN</TableCell>
            <TableCell align="right">  Yes </TableCell>

          </TableRow>
          

          
        </TableHead>
        </Table>
   </div>
          </Grid>
        </Paper>


        <Paper className={classes.paper}>
          <Grid container spacing={16}>
      
          <div className={classes.root}>
     
     

     <Typography variant="h5" gutterBottom>
     PRICE
     </Typography>

   <TextField
          id="standard-full-width"
          label="COSIGN PRICE"
          style={{ margin: 8 }}
          placeholder="10"
           fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />

          <TextField
          id="standard-full-width"
          label="DEALER PRICE"
          style={{ margin: 8 }}
          placeholder="90"
           fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />

        

    <Typography variant="h5" gutterBottom>
             OPTIONS
     </Typography>

     <FormControl component="fieldset" className={classes.formControl}>
           <RadioGroup aria-label="option">
            <FormControlLabel value="Dealer Only" control={<Radio />} label="Dealer Only" />
            <FormControlLabel value="Cosign Only" control={<Radio />} label="Cosign Only" />
            <FormControlLabel value="Consign + Dealer" control={<Radio />} label="Consign + Dealer" />
            </RadioGroup>
      </FormControl>

       <Typography variant="h4" gutterBottom>

       </Typography>

            <Button variant="contained" color="primary" className={classes.button}>
            Save
      </Button>

    </div>
          </Grid>
        </Paper>



          <Paper className={classes.paper}>
          <Grid container spacing={16}>
      
          <div className={classes.root}>
     
     

     <Typography variant="h5" gutterBottom>
     EMAIL - Chinese
     </Typography>

          <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>consignOnly</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>DS: $ 90</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>CSGN: $ 10 </Paper>
        </Grid>
      </Grid>
        

    

     


            <Button variant="contained" color="primary" className={classes.button}>
            CHEAP CAR EMAIL
      </Button>

    </div>
          </Grid>
        </Paper>





        <Paper className={classes.paper}>
          <Grid container spacing={16}>
      
          <div className={classes.root}>
     
     

     <Typography variant="h5" gutterBottom>
     Customer Detail
     </Typography>

          <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>Leung Denis</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}> 66101732 </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>benjys@gmail.com </Paper>
        </Grid>
      </Grid>
        

    

     


            <Button variant="contained" color="primary" className={classes.button}>
            Whatsapp User
      </Button>

    </div>
          </Grid>
        </Paper>


       <Typography variant="h6" gutterBottom>   Record Created At: 2019-01-15T15:48:53.739140Z</Typography>
       <Typography variant="h6" gutterBottom>Firestore ID: ZLAvIxLCAdYvwOAJBcze</Typography>
    </div>

    
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);




