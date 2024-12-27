import { Course } from '../models/course.model.js'

export const createCourse = async (req, res) => {
    try {
        const {courseTitle, category} = req.body 
        if (!courseTitle || !category) {
            return res.status(400).json({
                success: false,
                message: 'Course title and category are required'
            })
        }
        const course = await Course.create({
            courseTitle,
            category,
            creator: req.id
        })
        return res.status(201).json({
            success: true,
            course,
            message: 'Course created'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to create course'
        })
    }
}

export const getCreatorCourses = async (req, res) => {
    try {
        const userID = req.id
        const courses = await Course.find({creator: userID})
        if (!courses) {
            return res.status(404).json({
                success: false,
                course: [],
                message: 'Course Not Found'
            })
        }
        return res.status(200).json({
            success: true,
            courses,
            message: 'Courses listed successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to get Creators Courses'
        })
    }
}