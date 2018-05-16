import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {earn_money} from "../actions";
import {connect} from "react-redux";

class Money extends Component {
    render() {
        return (
            <div>
                {this.props.money}
            </div>
        );
    }
}

Money.propTypes = {};

function mapStateToProps(state){
    return {
        money: state.money
    }
}



export default connect(mapStateToProps)(Money)