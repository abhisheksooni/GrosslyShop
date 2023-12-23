import { createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    cart : [{id:1212 , text:"hello"}]
}


const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        add(state, action){
            const id = nanoid
            // state.push(action.payload)
            state.cart.push({id, text: action.payload})
        },
        remove(state,action){
            // return state.filter((e)=>e.id !== action.payload)
            state.cart = state.cart.filter((item)=>item.id !==action.payload) 
        }
    }
})


export const { add, remove} = cartSlice.actions;

export default cartSlice.reducer