// import express from 'express'
// import { adminLogin, loginUser, registerUser } from '../controllers/userController.js'

// const userRouter = express.Router()

// userRouter.post('/register', registerUser)
// userRouter.post('/login', loginUser)
// userRouter.post('/admin', adminLogin)

// export default userRouter

import express from 'express'
import { adminLogin, loginUser, registerUser, getUserProfile, updateUserProfile, changePassword } from '../controllers/userController.js'
import authUser from '../middleware/auth.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)

/* -------- USER PROFILE -------- */

userRouter.get('/profile', authUser, getUserProfile)

userRouter.post('/update-profile', authUser, updateUserProfile)

userRouter.post('/change-password', authUser, changePassword)

export default userRouter