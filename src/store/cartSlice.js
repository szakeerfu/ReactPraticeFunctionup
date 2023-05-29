const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {

       
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },


        // add(state, action) {
        //     let find = state.cart.findIndex((item)=> item.length === action.payload.length);
        //     if (find > -1) {
        //          state.cart[find].length += 1;

        //     }else{
        //         state.cart.push(action.payload);
        //     }
        //     state.push(action.payload);
        // },

    
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
