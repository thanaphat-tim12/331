import { configureStore } from '@reduxjs/toolkit'; 

import productReducer from './features/productSlice'; 

 

const Store = configureStore({ 

  reducer: { 

    products: productReducer, 

  }, 

}); 

 

export default Store; 