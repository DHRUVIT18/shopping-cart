export const cartReducer = (state,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case "REMOVE_FROM_CART":
            return {...state,cart:state.cart.filter(c=>c.id!==action.payload.id)};


        case 'CHANGE_CART_QTY':
            return {...state,cart:state.cart.filter(c=>c.id===action.payload.id?c.qty=action.payload.qty:c.qty)}

       default:
           return state; 
    }
}

export const productreducer = (state,action)=>{
    switch(action.type){
        case 'SORT_BY_PRICE':
            return {...state,sort:action.payload};

        case 'FILTER_BY_STOCK':
            return {...state,bystock:!state.bystock}

        case 'SORT_BY_DELIVERY':
            return {...state,byfastdelivery:!state.byfastdelivery};
    
        case 'FILTER_BY_RATING':
            return {...state,byrating:action.payload}
        
        case 'FILTER_BY_SEARCH':
            return {...state,searchquery:action.payload}
            
        case 'CLEAR_FILTERS':
            return {
                bystock:false,
                byfastdelivery:false,
                byrating:0,
                searchquery:"",
            };


        default:
            return state;
    }
}