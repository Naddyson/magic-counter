import React, {Component} from 'react';
import PropTypes from 'prop-types';
import toHHMMSS from '../toHHMMSS'
import { earn_money, timer_tick } from "../actions";
import './Work.css'
import {connect} from "react-redux";
import { Tabs, Tab, Button } from 'material-ui'

class Work extends Component {

    render() {
        return (
            <div className='container'>
                <div className="buttons_container">
                <Button onClick={() => this.props.earn_money(100)} variant="raised" color="secondary" className='earn_money_button'>
                    <h1>100</h1>
                </Button>
                <Button onClick={() => this.props.earn_money(200)} variant="raised" color="secondary" className='earn_money_button'>
                    <h1>200</h1>
                </Button>
                <Button onClick={() => this.props.earn_money(300)} variant="raised" color="secondary" className='earn_money_button'>
                    <h1>300</h1>
                </Button>
                <Button onClick={() => this.props.earn_money(400)} variant="raised" color="secondary" className='earn_money_button'>
                    <h1>400</h1>
                </Button>
                </div>
            </div>
        );
    }
}

Work.propTypes = {};
function mapStateToProps(state){
    return {
        money: state.money
    }
}

function mapDispatchToProps(dispatch){
    return {
        earn_money: (earned) => {
            dispatch(earn_money(earned));
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Work)