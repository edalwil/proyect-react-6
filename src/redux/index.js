import { actions } from "./actions";

const INITIAL_STATE = {
	products : [],
	inloading : false,
	category: [],
	validateUser: false,
	card: false,
	getCard: [],
	purchases : []
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){
		case actions.getProducts:
		    return{
			  ...state,
			  products: action.payload
		    }
		case actions.inLoading:
			return{
				...state,
				inloading: action.payload
			}
		case actions.setCategory:
			return {
				...state,
				category: action.payload
			}
		case actions.setValidateUser:

			return{
				...state,
				validateUser:action.payload
			}
		case actions.setCard:
			return{
				...state,
				card: action.payload
			}
		case actions.getCard:
			return {
				...state,
				getCard: action.payload
			}
		case actions.getPurchases:
			return {
				...state,
				purchases: action.payload
			}

	  default:
		return state;
    }
}

export default reducer;