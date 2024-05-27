import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
   cartitem : [],
  },
  reducers: {
    addToCart: (state, action) =>{
    let findproduct = state.cartitem.findIndex((item)=>item.id == action.payload.id)
    console.log(findproduct);
   }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = ProductSlice.actions

export default ProductSlice.reducer
