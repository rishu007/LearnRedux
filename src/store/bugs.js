//import {createAction,createReducer} from '@reduxjs/toolkit'

// //action creators
// export const bugAdded=createAction("bugAdded");
// export const bugRemoved=createAction("bugRemoved");


// //reducer
// let count=0;

// export default createReducer([],{
//     //key : value
//     //action :actionhanlers
//     [bugAdded.type]:(state,action)=>{
//         //mutation code immer is used by redux dev toolkit behind the scene
//         state.push({
//             id:++count,
//             description:action.payload.description,
//             resolved:false
//         })
//     },
//     [bugRemoved.type]:(state,action)=>{

//         return state.filter(bug =>bug.id !=action.payload.id)
//     }
// })

//or

import { createSlice } from '@reduxjs/toolkit';
let count=0;
const slice=createSlice({
    initialState: [],
    name: "bugs",
    reducers:{
        bugAdded: (state, action) => {
            state.push({
                id: ++count,
                description: action.payload.description,
                resolved: false
            })
        },
    
       bugRemoved:(state,action)=>{
        return state.filter(bug =>bug.id !=action.payload.id)
       }

    }
    
})

export const {bugAdded,bugRemoved}=slice.actions;
export default slice.reducer;