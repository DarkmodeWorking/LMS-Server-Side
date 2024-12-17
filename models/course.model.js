import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: true
    },
    subTitle: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    courseLevel: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    coursePrice: {
        type: Number
    },
    courseThumbnail: {
        type: String
    },
    enrolledStudents: {
        
    }
})