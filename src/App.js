import {makeStyles} from "@material-ui/core";
import {BrowserRouter as Router} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    //backgroundImage: `url(${process.env.PUBLIC_URL + cover})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      CssBaseline />
        <Router>
          <Content/>
        </Router>
    </div>
  );
}

export default App;
