import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import MainTemplate from '../templates/MainTemplate';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "200px",
    marginTop: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: "white",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <MainTemplate>
      <Grid className={classes.root} container spacing={3} justify="center" alignItems="center">
        <Grid item xs={10} sm={8} >
          <Paper className={classes.paper} data-testid="home-message">
            <Typography variant="h4" >
              ⇗<br />
              Please select a metric you would like to display in the navigation bar
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </MainTemplate>
  );
}

export default Home;
