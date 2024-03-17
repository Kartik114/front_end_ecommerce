import { configureStore, createSlice } from "@reduxjs/toolkit";

//generate different parts of reducer
const userSlice = createSlice(
    {
        name:  'user',  //slice name,identity
        initialState: {
            userId: null,
            email: null,
            userName: null,
            token:null
        },
        reducers:{
            setUser: (state, action) => { 
                state.email=action.payload.email;
                state.userId=action.payload.id;
                state.userName=action.payload.userName;
                state.token=action.payload.token;
            },
             
            logout: (state) => {
                state.userId=null;
                state.email=null;
                state.userName=null;
                state.token=null;
            }
        }
    }
);

export const {setUser, logout,getUser} = userSlice.actions;

export const store = configureStore(
    {
        //arguments: action and previous state
        //return a new state
        reducer: userSlice.reducer
    }
);
 