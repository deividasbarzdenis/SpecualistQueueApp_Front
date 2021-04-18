import {useEffect, useState} from "react";
import {fetchClients, fetchQueue} from "../../api/queueApi";
import Container from "@material-ui/core/Container";
import {CircularProgress, Grid, makeStyles, Typography} from "@material-ui/core";
import QueueMonitoringTable from "./QueueMonitoringTable";

const useStyles = makeStyles((theme) => ({
    spinner: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    topText: {
        margin: '20px'
    }
}));
const QueueMonitoring = () => {
    const classes = useStyles();
    const [queue, setQueue] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadQueue();
    }, [])

    const loadQueue = () => {
        setIsLoading(true);
        fetchQueue(0)
            .then(response => {
                setQueue(response.data)
            }).catch((e)=>{
                console.log(e)
        })
            .finally(() => {
                setIsLoading(false);
            })
    }
    return (
         <Container component="main" maxWidth="sm">
                 <Grid item xs={12} align="center" >
                     <Typography component="h1" variant="h5" className={classes.topText}>
                         Queue to Specialist
                     </Typography>
                 </Grid>
             <Grid item xs={12}>
                 {
                     isLoading ?
                         (
                             <div className={classes.spinner} role="status">
                                 <CircularProgress color="secondary" />
                             </div>
                         ) :
                         <QueueMonitoringTable
                             queue={queue}
                         />
                 }
             </Grid>
         </Container>
    );
}

export default QueueMonitoring;

