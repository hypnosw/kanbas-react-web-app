import db from "../../Database";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    assignments:db.assignments,
    newAssignment:{
        _id:"New ",
        title:"New Title",
        course:"New Course",
    },
};

const assignmentSlice = createSlice(
    {
        name:"assignments",
        initialState,
        reducers:{
            addAssignment:(state, action)=>{

            },
            deleteAssignment:(state, action)=>{

            },
            updateAssignment:(state, action)=>{

            },
        }
    }
);

export const{addAssignments, deleteAssignment,updateAssignment} = assignmentSlice.actions;
export default assignmentSlice.reducer;