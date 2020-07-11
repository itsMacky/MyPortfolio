import React from 'react';
import './App.css';
import {Header, Navigation, Drawer, Content, Layout} from 'react-mdl';
import Home from './components/Home';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  return (
      <div > 
          <BrowserRouter>  
    <div className="demo-big-content">
    <Layout>
        <Header title="Makrand Lokhande"  className="title">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title="Makrand Lokhande">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content className="content">
            <div className="page-content" />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path='/About' component={About}></Route>
                <Route exact path='/Projects' component={Projects}></Route>
                <Route exact path='/Contact' component={Contact}></Route>
                <Route exact path='/Resume' component={Resume}></Route>
            </Switch>

            

        </Content>
    </Layout>
</div>
</BrowserRouter>
</div> 
  );
}

export default App;
