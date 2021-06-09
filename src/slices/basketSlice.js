import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // Action
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      )

      let newBasket = [...state.items]

      // If the item exist, index will be the array item current place number else return -1
      if (index >= 0) {
        // Item exist in basket.. Remove it
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Cant remove the product (id: ${action.payload.id}) as its is not in basket`
        )
      }

      state.items = newBasket
    },
  },
})
// Action export to be use through out the app
export const { addToBasket, removeFromBasket } = basketSlice.actions

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0)

export default basketSlice.reducer
