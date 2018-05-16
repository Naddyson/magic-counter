import React, {Component} from 'react';
import { Router, IndexRoute, Route, Switch, Link, Redirect } from 'react-router-dom';
import './AppProtected.css'
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab, Button } from 'material-ui'
import Work from './Work';
import History from './History';
import Winners from './Winners';
import Settings from './Settings';
import Timer from './Timer';

import Money from './Money'
const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'auto',
        position: 'fixed'
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        width: `100%`,
        height: '10%',
        display: 'inline-block'
    },
    content: {
        backgroundColor: theme.palette.background.default,
        marginTop: 50,
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: '100%',

    },

    tab: {
        height:'64px',
        width: '150px',

    },
    tabs: {
        float: 'left',
        width: '50%'
    },
    loginButton: {
        float: 'right',
        position:'relative',
        height: '50px',
        width: '80px'
    }
});
class AppProtected extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuValue: 0
        }
    }
    handleChange = (event, value) => {
        this.setState({ menuValue: value })
    }
    render() {
        const { menuValue } = this.state;
        return (
            <div style={styles.appFrame}>

                <AppBar style={styles.appBar}>
                    <Tabs value={menuValue} onChange={this.handleChange} style={styles.tabs}>
                        <Tab style={styles.tab} label="Work" component={Link} to='work' />
                        <Tab style={styles.tab} label="History" component={Link} to='history'/>
                        <Tab style={styles.tab} label="Winners" component={Link} to='winners'/>
                        <Tab style={styles.tab} label="Settings" component={Link} to='setting'/>
                    </Tabs>
                    <div className='head'>
                        <Timer/>
                        <Money/>
                    </div>
                </AppBar>

                <div className='content'>

                    <Switch>

                        <Route path="/work" component={Work}/>
                        <Route path='/history' component={History}/>
                        <Route path="/winners" component={Winners}/>
                        <Route path='/settings' component={Settings}/>

                    </Switch>
                    {/*<Redirect to="book" />*/}
                </div>
            </div>
        );
    }
}

AppProtected.propTypes = {};

export default AppProtected;
