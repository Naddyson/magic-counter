export function timer_tick() {
    return dispatch => {
        dispatch({
            type: "TIMER_TICK"
        })
    }
}
