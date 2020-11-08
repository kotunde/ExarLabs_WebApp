import AppComponent from "./App.js";

class Routes extends React.Component {
    render() {
        <Switch>
            <Route exact path = "/" component = {AppComponent}/>
        </Switch>
    }
}

export default Routes;