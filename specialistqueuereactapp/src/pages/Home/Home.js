import Container from "@material-ui/core/Container";
import {Grid, Icon, makeStyles, Typography} from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {purple} from "@material-ui/core/colors";
import Image from "material-ui-image";
import Path from "../../assets/Path.png"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    header: {
        color: '#3A3768',
        size: '120px',
        fontFamily: 'Pacifico',
        opacity: '100%',
        boxShadow: '0 3 6',
        fontWeight: 'regular',
        margin: '40px',
    },
    textUnderHeader: {
        color: '#3A3768',
        opacity: '100%',
        size: '35px',
        fontFamily: 'Myanmar Text',
        fontWeight: 'bold',
        margin: '20px',
    },
    textUnderHeader1: {
        color: '#3A3768',
        opacity: '100%',
        size: '30px',
        fontFamily: 'Myanmar Text',
        fontWeight: 'regular',
        margin: '15px',
    },
    button: {
        margin: theme.spacing(1),
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Container component="main" className={classes.root}>
                <Container container justify="center">
                    <Grid item xs={12} align="center">
                        <Typography component="h1" variant="h4" className={classes.header}>
                            Register to the specialist
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Typography component="p" variant="p" className={classes.textUnderHeader}>
                            A long overdue alternative to physical queues
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Typography component="p" variant="p" className={classes.textUnderHeader1}>
                            Create and manage virtual queues instantly to help you and your customers have a great
                            business experience
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Button
                            classes={classes.button}
                            variant="contained"
                            color="secondary"
                            endIcon={<Icon>send</Icon>}
                            component={NavLink}
                            to="/clientform">
                            Register
                        </Button>
                    </Grid>
                    <Grid item xs={12} align="center">
                    </Grid>
                </Container>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;

