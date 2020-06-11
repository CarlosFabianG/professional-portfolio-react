import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Components/Layout'
import SmDashboard from './Views/ProjectDetail/SmDashboard';
import LandingMars from './Views/ProjectDetail/LandingMars'
import BestExchange from './Views/ProjectDetail/BestExchange'
import BestMovie from './Views/ProjectDetail/BestMovie'
import Projects from './Views/Projects';
import Home from './Views/Home'
import Contact from './Views/Contact'
import Error404 from './Views/Error404'



function Router() {
    return(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/projects/sm-dashboard' component={SmDashboard}/>
                <Route exact path='/projects/landing-in-mars' component={LandingMars}/>
                <Route exact path='/projects/best-exchange' component={BestExchange}/>
                <Route exact path='/projects/best-movie' component={BestMovie}/>
                <Route exact path='/contact' component={Contact} />
                <Route component={Error404} />
            </Switch>
        </Layout>
  </BrowserRouter>
    )
}

export default Router 