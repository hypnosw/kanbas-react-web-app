import db from "../../Database";
import {createSlice} from "@reduxjs/toolkit";
import assignments from "./index";
const emptyAssignment = {
    _id:new Date().getTime().toString(),
    course: "Unknown",
    title:"New Title",
    dueDate: "2023-10-28",
    points: 100,
    availableFromDate: "2000-01-01",
    availableUntilDate: "2100-01-01",
    description: "No description yet for now",
}

const initialState = {
    assignments:db.assignments,
    newAssignment:emptyAssignment,
};

const assignmentSlice = createSlice(
    {
        name:"assignments",
        initialState,
        reducers:{
            addAssignment:(state, action)=>{
                state.assignments = [...state.assignments, state.newAssignment];
                state.newAssignment = emptyAssignment;

            },
            deleteAssignment:(state, action)=>{
                state.assignments = state.assignments.filter((a)=> a._id !== action.payload);
            },
            updateAssignment:(state, action)=>{

            },
            setNewAssignment:(state, action)=>{
                state.newAssignment = action.payload;
            }

        }
    }
);

export const{setNewAssignment, addAssignment, deleteAssignment,updateAssignment} = assignmentSlice.actions;
export default assignmentSlice.reducer;