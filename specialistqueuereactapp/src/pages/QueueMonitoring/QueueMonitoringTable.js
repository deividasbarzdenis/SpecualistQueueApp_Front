import {makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: 'rgba(112, 62, 239, 0.01)',
    },
    table: {
        minWidth: 500,
    },
    head: {
        fontWeight: "bold",
    },
    topTable: {
        backgroundColor: 'rgba(112, 62, 239, 0.2)',
    }
}));
const QueueMonitoringTable = ({queue}) => {
    const classes = useStyles();

    return (
        <Container component="main">
            <TableContainer component={Paper} className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead className={classes.topTable}>
                        <TableRow>
                            <TableCell align="center" className={classes.head}>Id</TableCell>
                            <TableCell align="center" className={classes.head}>Queue Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {

                            queue.map((que, index) => (
                                <TableRow key={queue.id} hover>
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="center">{que.queueNumber}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default QueueMonitoringTable;

