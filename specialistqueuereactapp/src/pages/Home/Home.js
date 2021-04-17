import Container from "@material-ui/core/Container";
import {Grid, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import {fetchSpecialists} from "../../api/userApi";
import SpecialistsTable from "../../components/Specialist/SpecialistsTable";


const Home = () => {
    const [specialists, setSpecialists] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadAllSpecialists();
    }, []);

    const loadAllSpecialists = () => {
        setIsLoading(true);
        fetchSpecialists()
            .then(response => {
                setSpecialists(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
         <Container component="main">
             <Container container justify="center">
                 <Grid item xs={12} align="center">
                     <Typography component="h1" variant="h4">Register to the specialist</Typography>
                 </Grid>
                 <Grid item xs={12}>
                     {
                         isLoading ?
                             (
                                 <Grid component="div" className="spinner" role="status">

                                 </Grid>
                             ) : (
                                 <SpecialistsTable
                                     specialists={specialists}/>
                             )
                     }

                 </Grid>
             </Container>
         </Container>
    );
}

export default Home;

