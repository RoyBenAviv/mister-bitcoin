import './styles/style.scss'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage'
import { ContactEdit } from './pages/ContactEdit'
import { ContactPage } from './pages/ContactPage'
import { StatisticPage } from './pages/StatisticPage'
import { ContactDetails } from './pages/ContactDetails';


function App() {

  return (
    <Router>

    <div className="app">
        <AppHeader />
        <main className="main-layout">
          <Switch>
              <Route path='/contact/edit/:id?' component={ContactEdit} />
              <Route path='/contact/:id' component={ContactDetails} />
              <Route path="/statistic" component={StatisticPage}/>
              <Route path="/contact" component={ContactPage}/>
              <Route path="/" component={HomePage}/>
          </Switch>
        </main>
    </div>
    </Router>
  )
}

export default App;
