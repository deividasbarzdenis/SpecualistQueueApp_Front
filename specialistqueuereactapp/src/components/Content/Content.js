import Container from "@material-ui/core/Container";
import {Route, Switch} from "react-router-dom";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Home from "../../pages/Home/Home";
import ClientForm from "../Client/ClientForm";

const Content = () => {
    return (
        <Container component="main" >
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <Route path="/clientform">
                    <ClientForm/>
                </Route>
            </Switch>
        </Container>
    );
}

export default Content;