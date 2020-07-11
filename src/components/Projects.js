import React,{useState} from "react";
import Typist from 'react-typist';
import { Tabs, Tab, Card, CardActions, CardTitle, CardText, Button, Grid, Cell} from 'react-mdl';

const Project = () => {

    const [state,setState] = useState(
        {
            activeTab:0
        }
    )

    const tabFunction = () => {
        if(state.activeTab === 0 ){
            return(
                <div>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>InstaGram Bot</CardTitle>
                        <CardText>
                            Bot to handel likes, comment and tohandel and  manage filter profiles.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Project</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }

        else if(state.activeTab === 1){
            return(
                <div style={{display: 'flex'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Covid-19 Tracker</CardTitle>
                        <CardText>
                            Detailed Information on covid19 affected areas and counts.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Project</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>MyPortfolio Website</CardTitle>
                        <CardText>
                            Detailed Information about Myself and Ongoing Projects.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Project</Button>
                        </CardActions>
                    </Card>


                </div>
            )
        }

        else if(state.activeTab === 2){
            return(
                <div style={{display:"flex"}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Covid-19 Tracker App</CardTitle>
                        <CardText>
                            All Details about Covid on your Android Application Now.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Project</Button>
                        </CardActions>
                    </Card>

                </div>
            )
        }

        else if(state.activeTab === 3){
            return(
                <div style={{display:'flex'}}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Web Scraper</CardTitle>
                        <CardText>
                            A Web Date Scraper to Scrap Data from Website using Node JS.
                        </CardText>
                        <CardActions border>
                            <Button colored>View Project</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }

    return(
        <div>
            <Tabs activeTab={state.activeTab} onChange={(tabID) => {setState({...state,activeTab:tabID})}} ripple>
                    <Tab>Python</Tab>
                    <Tab>ReactJs</Tab>
                    <Tab>Flutter</Tab>
                    <Tab>Node.Js</Tab>
                </Tabs>
                <section>
                    <Grid>
                        <Cell col={12}>
                            {tabFunction()}
                        </Cell>
                    </Grid>
                </section>
        </div>
    )
}

 export default Project