import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk("categoriesSLice/fetchCategories", async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  const capitalizedData = data.map((cat)=>cat.charAt(0).toUpperCase()+ cat.slice(1))
  //console.log(capitalizedData)
  capitalizedData.unshift("All");
  return capitalizedData;
});

export const categoriesSLice = createSlice({
  initialState: [],
  name: "categoriesSLice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled,(state,action)=>{
        return action.payload;
    })
  },
});

export const {} = categoriesSLice.actions;
export default categoriesSLice.reducer;
