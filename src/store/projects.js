import {createSlice} from '@reduxjs/toolkit';
let lastID=0;

const slice=createSlice({
    name:"Project",
    initialState:[],
    reducers:{
        projectAdded:(state,action)=>{
            state.push({
                id:++lastID,
                name:action.payload.name
            })
        }
    }
})

export const {projectAdded}=slice.actions;
export default slice.reducer;