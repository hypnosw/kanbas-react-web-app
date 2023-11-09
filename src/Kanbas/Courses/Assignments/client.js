import axios from "axios";
const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments"
export const findAllAssignments = async(id)=>{
    const response = await axios.get(`${ASSIGNMENTS_URL}/${id}`);
    return response.data;
}

export const deleteDBAssignment = async(id)=>{
    const response = await axios.delete(`${ASSIGNMENTS_URL}/${id}`);
    return response.data;
}