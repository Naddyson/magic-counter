export function timer_tick() {
    return dispatch => {
        dispatch({
            type: "TIMER_TICK"
        })
    }
}
export function earn_money(earned){
    return dispatch => {
        dispatch({
            type: "EARN_MONEY",
            earned: earned
        })
    }
}
