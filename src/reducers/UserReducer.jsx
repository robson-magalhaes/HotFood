let initialState = {
    name: 'Robson',
    token: ''
}
const UserReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, name: action.payload.name }
        case 'SET_TOKEN':
            return { ...state, token: action.payload.token }
        case 'SET_LOGOUT':
            return {...state, token:''}
        default:
            return state;
    }
}
export default UserReducer;