import React, {Component} from 'react';
import PropTypes from 'prop-types';
import toHHMMSS from '../toHHMMSS'
import {timer_tick} from "../actions";
import {connect} from "react-redux";

class Work extends Component {
    render() {
        return (
            <div>
                dadasdasda
            </div>
        );
    }
}

Work.propTypes = {};
function mapStateToProps(state){
    return {
        seconds: state.seconds
    }
}




export default connect(mapStateToProps)(Work)