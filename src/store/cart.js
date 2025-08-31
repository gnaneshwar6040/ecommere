const { createSlice } = require("@reduxjs/toolkit");

let cartItemsSlice = createSlice({
    name : "cartItems",
    initialState : [],
    reducers : {
        addItem : (state , action) => {
            state.push(action.payload)
            return state
        },
        removeItem : (state , action) => {
            return state
        }
    }
})

export const {addItem , removeItem} = cartItemsSlice.actions

export default cartItemsSlice.reducer