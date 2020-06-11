import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Components/Layout'
import ProjectDetail from './Views/ProjectDetail/SmDashboard';
import LandingMars from './Views/ProjectDetail/LandingMars'
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
                <Route exact path='/projects/sm-dashboard' component={ProjectDetail}/>
                <Route exact path='/projects/landing-in-mars' component={LandingMars}/>
                <Route exact path='/contact' component={Contact} />
                <Route component={Error404} />
            </Switch>
        </Layout>
  </BrowserRouter>
    )
}

export default Router 