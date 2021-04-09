import Container from "@material-ui/core/Container";
import {Route, Switch} from "react-router-dom";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Home from "../../pages/Home/Home";

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
            </Switch>
        </Container>
    );
}

export default Content;