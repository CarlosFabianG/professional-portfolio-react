import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Components/Layout'
import * as serviceWorker from './serviceWorker';
import ProjectDetail from './Views/ProjectDetail';
import Projects from './Views/Projects';
import Home from './Views/Home'
import Contact from './Views/Contact'
import Error404 from './Views/Error404'

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/projects/:id' component={ProjectDetail}/>
        <Route exact path='/contact' component={Contact} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
