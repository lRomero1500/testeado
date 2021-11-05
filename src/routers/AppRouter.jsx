import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/auth'
import Errors from '../pages/errors'
import Home from '../pages/home'
import NavigationBar from '../components/navigation'
import AppPrivateRoute from '../routers/AppPrivateRoute'
export default function AppRouter() {
    return (        
        <Router>
            <NavigationBar />
            <Switch>
                <Route path="/login" component={Login} />
                <AppPrivateRoute exact path="/" component={Home} />
                <Route path="*" component={Errors}/>
            </Switch>
        </Router>

    )
}