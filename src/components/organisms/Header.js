import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  home: {
    flexGrow: 1,
  },
  navButton: {
    textAlign: "center"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.home} classes={{label:classes.navButton}} >
            <Button component={Link} to={'/'} color="inherit" data-testid='home-link'>
              ☕ Coding Challenge
            </Button>
          </Typography>
          <Button classes={{label:classes.navButton}} component={Link} to={'/difficulty'}
            color="inherit" data-testid='difficulty-link'
          >
            Difficulty Metric
          </Button>
          <Button classes={{label:classes.navButton}} component={Link} to={'/hash-rate'}
            color="inherit" data-testid='hash-rate-link'
          >
            Hash Rate Metric
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
