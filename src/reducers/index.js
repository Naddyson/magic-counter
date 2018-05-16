


const initialState = {
    id_setting: 1488,
    money: 0,
    seconds: 0,
    history: {
        time: '12:12',
        change: 300
    }
}

export default function indexReducer (state = initialState, action) {
    console.log(action)
    switch(action.type){
        case "FETCH_HISTORY":{
            return {...state, history: action.payload}
        }
        case "TIMER_TICK": {
            return {...state, seconds: state.seconds + 1}
        }
        case "EARN_CASH": {

            return {...state, cash: state.cash + action.cash_change, history: [...state.history, action.new_history]}
        }
        case "AUTH_STATUS": {
            console.log(action.payload)
            return { ...state, isAuthenticated: action.payload }
        }
        case "EARN_MONEY": {
            return { ...state, money: state.money + action.earned}
        }
        default: return state
    }

}