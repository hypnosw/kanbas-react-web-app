import axios from "axios";
const ASSIGNMENTS_URL = process.env.REACT_APP_SERVER_URL +"/assignments"
export const findAllAssignments = async(id)=>{
    const response = await axios.get(`${ASSIGNMENTS_URL}/${id}`);
    return response.data;
}

export const deleteDBAssignment = async(id)=>{
    const response = await axios.delete(`${ASSIGNMENTS_URL}/${id}`);
    return response.data;
}

export const putAssignment = async (id, assignment)=>{
    const response = await axios.put(`${ASSIGNMENTS_URL}/${id}`, assignment);
    return response.data;
}
export const postAssignment = async(assignment)=>{
    const response = await axios.post(`${ASSIGNMENTS_URL}/`, assignment);
    return response.data;
}