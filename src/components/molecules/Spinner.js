import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: "20%"
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <CircularProgress data-testid="spinner" />
      </Grid>
    </Grid>
  );
}
