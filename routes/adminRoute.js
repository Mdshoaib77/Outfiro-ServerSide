// // import express from "express"
// // import { getDashboardStats } from "../controllers/adminController.js"
// // import adminAuth from "../middleware/adminAuth.js"

// // const adminRouter = express.Router()

// // adminRouter.get("/dashboard", adminAuth, getDashboardStats)

// // export default adminRouter

// // import express from "express"
// // import { getDashboardStats } from "../controllers/adminController.js"
// // import adminAuth from "../middleware/adminAuth.js"

// // const adminRouter = express.Router()

// // adminRouter.get("/dashboard", adminAuth, getDashboardStats)

// // export default adminRouter


// // import express from "express"
// // import { 
// //   getDashboardStats,
// //   deleteOrder,
// //   deleteUser
// // } from "../controllers/adminController.js"

// // import adminAuth from "../middleware/adminAuth.js"

// // const adminRouter = express.Router()

// // /* Dashboard Overview */

// // adminRouter.get("/dashboard", adminAuth, getDashboardStats)

// // /* Delete Order */

// // adminRouter.post("/delete-order", adminAuth, deleteOrder)

// // /* Delete User */

// // adminRouter.post("/delete-user", adminAuth, deleteUser)

// // export default adminRouter


// import express from "express"
// import { 
//   getDashboardStats,
//   deleteOrder,
//   deleteUser,
//   getAllUsers
// } from "../controllers/adminController.js"

// import adminAuth from "../middleware/adminAuth.js"

// const adminRouter = express.Router()

// /* Dashboard Overview */

// adminRouter.get("/dashboard", adminAuth, getDashboardStats)

// /* Get All Users (Manage Users Page) */

// adminRouter.get("/users", adminAuth, getAllUsers)

// /* Delete Order */

// adminRouter.post("/delete-order", adminAuth, deleteOrder)

// /* Delete User */

// adminRouter.post("/delete-user", adminAuth, deleteUser)

// export default adminRouter


import express from "express"
import { 
  getDashboardStats,
  deleteOrder,
  deleteUser,
  getAllUsers,
  getReports
} from "../controllers/adminController.js"

import adminAuth from "../middleware/adminAuth.js"

const adminRouter = express.Router()

/* Dashboard Overview */

adminRouter.get("/dashboard", adminAuth, getDashboardStats)

/* Get All Users (Manage Users Page) */

adminRouter.get("/users", adminAuth, getAllUsers)

/* Reports */

adminRouter.get("/reports", adminAuth, getReports)

/* Delete Order */

adminRouter.post("/delete-order", adminAuth, deleteOrder)

/* Delete User */

adminRouter.post("/delete-user", adminAuth, deleteUser)

export default adminRouter