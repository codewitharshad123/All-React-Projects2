/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//createAsyncThunk (Redux Thunk yaa midleware ki traa work krta haa jab bhi apnaa response me delay set karna haa yaa Async Request kaa liaa used hota haa time ko adjust kanraa kaa lia used karta hnaa hum log)
//Achaa saa humri Api request hnalde us kaa liaa hum used karta hnaa jab tak server saa ana me response lagta haa tab humaa spener dkhnaa haa tab yaa used hota haa
export const  fetchCocktails=createAsyncThunk("cocktails/fetchCocktails",async()=>{
return fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s').then(res=>res.json())
})

const cocktailSlice=createSlice(
    {
        name:"cocktails",
        initialState:{
loading:false,
cocktails:[],
error:null,
cocktail:[]
        }
    },
    extraReducers:{
        [fetchCocktails.pending]:(state,action)=>{
        state.loading=true
        },
        [fetchCocktails.fulfilled]:(state,action)=>{
            state.loading=false
            state.cocktails=actions.payload.drinks
        }
    }
)*/


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    ).then((res) => res.json());
  }
);


export const fetchSingleCocktails = createAsyncThunk(
    "cocktails/fetchSingleCocktails",
    async ({id})=> {
      return fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      ).then((res) => res.json());
    }
  )

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [],
    error: null,
    cocktail: [],
  },

  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSingleCocktails.pending]: (state, action) => {
        state.loading = true;
      },
      [fetchSingleCocktails.fulfilled]: (state, action) => {
        state.loading = false;
        state.cocktail = action.payload.drinks;
      },
      [fetchSingleCocktails.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  },
});

export default cocktailSlice.reducer;