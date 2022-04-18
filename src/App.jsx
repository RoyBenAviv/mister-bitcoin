import './styles/style.scss'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage'
import { ContactEdit } from './pages/ContactEdit'
import { ContactPage } from './pages/ContactPage'
import { StatisticPage } from './pages/StatisticPage'
import { ContactDetails } from './pages/ContactDetails';
import { userService } from './services/userService';
import { Redirect } from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';

function App() {
  const PrivateRoute = (props) => {
    const user = userService.getUser()
    return user ? <Route {...props} /> : <Redirect to="/signup" />
  }

  return (
    <Router>

    <div className="app">
        <AppHeader />
        <main className="main-layout">
          <Switch>
              <PrivateRoute path='/contact/edit/:id?' component={ContactEdit} />
              <PrivateRoute path='/contact/:id' component={ContactDetails} />
              <PrivateRoute path="/statistic" component={StatisticPage}/>
              <PrivateRoute path="/contact" component={ContactPage}/>
              <Route path="/signup" component={SignupPage} />
              <PrivateRoute path="/" component={HomePage}/>
          </Switch>
        </main>
    </div>
    </Router>
  )
}

export default App;
