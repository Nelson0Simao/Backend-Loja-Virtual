import mongoose from "mongoose";

const Schema = new mongoose.Schema({
            userName: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
})
    
    
export default mongoose.model("User", Schema);