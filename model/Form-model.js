import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        },
        feedback: {
            type: String
        },
        currentProject: {
            type: String
        },
        mode: {
            type: String
        },
        web: {
            type: Boolean,
            default: false
        },
        android: {
            type: Boolean,
            default: false
        },
        cloud: {
            type: Boolean,
            default: false
        },
        gender: {
            type: String
        },
        department: {
            type: String
        },
        dateOfJoining: {
            type: Date, required: true
        },
    },
    { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);
export default Form;
