// // import productModel from "../models/productModel.js"
// // import orderModel from "../models/orderModel.js"
// // import userModel from "../models/userModel.js"

// // const getDashboardStats = async (req, res) => {
// //   try {

// //     const totalProducts = await productModel.countDocuments()
// //     const totalUsers = await userModel.countDocuments()
// //     const totalOrders = await orderModel.countDocuments()

// //     const orders = await orderModel.find()

// //     let revenue = 0

// //     orders.forEach(order => {
// //       revenue += order.amount
// //     })

// //     res.json({
// //       success: true,
// //       stats: {
// //         totalProducts,
// //         totalUsers,
// //         totalOrders,
// //         revenue
// //       }
// //     })

// //   } catch (error) {

// //     res.json({
// //       success: false,
// //       message: error.message
// //     })

// //   }
// // }

// // export { getDashboardStats }


// // import productModel from "../models/productModel.js"
// // import orderModel from "../models/orderModel.js"
// // import userModel from "../models/userModel.js"

// // const getDashboardStats = async (req, res) => {
// //   try {
// //     const totalProducts = await productModel.countDocuments()
// //     const totalUsers = await userModel.countDocuments()
// //     const totalOrders = await orderModel.countDocuments()

// //     const orders = await orderModel.find()

// //     let revenue = 0
// //     orders.forEach(order => {
// //       revenue += order.amount
// //     })

// //     res.json({
// //       success: true,
// //       stats: {
// //         totalProducts,
// //         totalUsers,
// //         totalOrders,
// //         revenue
// //       }
// //     })

// //   } catch (error) {
// //     res.json({
// //       success: false,
// //       message: error.message
// //     })
// //   }
// // }

// // export { getDashboardStats }


// // import productModel from "../models/productModel.js"
// // import orderModel from "../models/orderModel.js"
// // import userModel from "../models/userModel.js"

// // /* Dashboard Overview */

// // const getDashboardStats = async (req, res) => {
// //   try {

// //     const totalProducts = await productModel.countDocuments()
// //     const totalUsers = await userModel.countDocuments()
// //     const totalOrders = await orderModel.countDocuments()

// //     const orders = await orderModel.find()

// //     let revenue = 0

// //     orders.forEach(order => {
// //       revenue += order.amount
// //     })

// //     /* Latest Orders */

// //     const latestOrders = await orderModel
// //       .find()
// //       .sort({ date: -1 })
// //       .limit(5)

// //     /* Latest Users */

// //     const latestUsers = await userModel
// //       .find()
// //       .sort({ _id: -1 })
// //       .limit(5)

// //     res.json({
// //       success: true,
// //       stats: {
// //         totalProducts,
// //         totalUsers,
// //         totalOrders,
// //         revenue
// //       },
// //       latestOrders,
// //       latestUsers
// //     })

// //   } catch (error) {

// //     res.json({
// //       success: false,
// //       message: error.message
// //     })

// //   }
// // }


// // /* Delete Order */

// // const deleteOrder = async (req, res) => {

// //   try {

// //     const { id } = req.body

// //     await orderModel.findByIdAndDelete(id)

// //     res.json({
// //       success: true,
// //       message: "Order Deleted"
// //     })

// //   } catch (error) {

// //     res.json({
// //       success: false,
// //       message: error.message
// //     })

// //   }

// // }


// // /* Delete User */

// // const deleteUser = async (req, res) => {

// //   try {

// //     const { id } = req.body

// //     await userModel.findByIdAndDelete(id)

// //     res.json({
// //       success: true,
// //       message: "User Deleted"
// //     })

// //   } catch (error) {

// //     res.json({
// //       success: false,
// //       message: error.message
// //     })

// //   }

// // }


// // export {
// //   getDashboardStats,
// //   deleteOrder,
// //   deleteUser
// // }

// // import productModel from "../models/productModel.js"
// // import orderModel from "../models/orderModel.js"
// // import userModel from "../models/userModel.js"

// // /* Dashboard Overview */

// // const getDashboardStats = async (req, res) => {
// //   try {

// //     const totalProducts = await productModel.countDocuments()
// //     const totalUsers = await userModel.countDocuments()
// //     const totalOrders = await orderModel.countDocuments()

// //     const orders = await orderModel.find()

// //     let revenue = 0

// //     orders.forEach(order => {
// //       revenue += order.amount
// //     })

// //     /* Latest Orders */

// //     const latestOrders = await orderModel
// //       .find()
// //       .sort({ date: -1 })
// //       .limit(5)

// //     /* Latest Users */

// //     const latestUsers = await userModel
// //       .find()
// //       .sort({ _id: -1 })
// //       .limit(5)

// //     res.json({
// //       success: true,
// //       stats: {
// //         totalProducts,
// //         totalUsers,
// //         totalOrders,
// //         revenue
// //       },
// //       latestOrders,
// //       latestUsers
// //     })

// //   } catch (error) {

// //     res.json({
// //       success: false,
// //       message: error.message
// //     })

// //   }
// // }


// // /* Get All Users (Manage Users Page) */

// // const getAllUsers = async (req, res) => {

// //   try {

// //     const users = await userModel.find().select("-password")

// //     res.json({
// //       success: true,
// //       users
// //     })

// //   } catch (error) {

// //     res.json({
// //       success: false,
// //       message: error.message
// //     })

// //   }

// // }


// // /* Delete Order */

// // const deleteOrder = async (req, res) => {

// //   try {

// //     const { id } = req.body

// //     await orderModel.findByIdAndDelete(id)

// //     res.json({
// //       success: true,
// //       message: "Order Deleted"
// //     })

// //   } catch (error) {

// //     res.json({
// //       success: false,
// //       message: error.message
// //     })

// //   }

// // }


// // /* Delete User */

// // const deleteUser = async (req, res) => {

// //   try {

// //     const { id } = req.body

// //     await userModel.findByIdAndDelete(id)

// //     res.json({
// //       success: true,
// //       message: "User Deleted"
// //     })

// //   } catch (error) {

// //     res.json({
// //       success: false,
// //       message: error.message
// //     })

// //   }

// // }


// // export {
// //   getDashboardStats,
// //   getAllUsers,
// //   deleteOrder,
// //   deleteUser
// // }


// import productModel from "../models/productModel.js"
// import orderModel from "../models/orderModel.js"
// import userModel from "../models/userModel.js"

// /* Dashboard Overview */

// const getDashboardStats = async (req, res) => {
//   try {

//     const totalProducts = await productModel.countDocuments()
//     const totalUsers = await userModel.countDocuments()
//     const totalOrders = await orderModel.countDocuments()

//     const orders = await orderModel.find()

//     let revenue = 0

//     orders.forEach(order => {
//       revenue += order.amount
//     })

//     /* Latest Orders */

//     const latestOrders = await orderModel
//       .find()
//       .sort({ date: -1 })
//       .limit(5)

//     /* Latest Users */

//     const latestUsers = await userModel
//       .find()
//       .sort({ _id: -1 })
//       .limit(5)

//     res.json({
//       success: true,
//       stats: {
//         totalProducts,
//         totalUsers,
//         totalOrders,
//         revenue
//       },
//       latestOrders,
//       latestUsers
//     })

//   } catch (error) {

//     res.json({
//       success: false,
//       message: error.message
//     })

//   }
// }


// /* Get All Users (Manage Users Page) */

// const getAllUsers = async (req, res) => {

//   try {

//     const users = await userModel.find().select("-password")

//     res.json({
//       success: true,
//       users
//     })

//   } catch (error) {

//     res.json({
//       success: false,
//       message: error.message
//     })

//   }

// }


// /* Reports API */

// const getReports = async (req, res) => {

//   try {

//     const totalProducts = await productModel.countDocuments()
//     const totalUsers = await userModel.countDocuments()
//     const totalOrders = await orderModel.countDocuments()

//     const orders = await orderModel.find()

//     let revenue = 0

//     orders.forEach(order => {
//       revenue += order.amount
//     })

//     res.json({
//       success: true,
//       reports: {
//         totalProducts,
//         totalUsers,
//         totalOrders,
//         revenue
//       }
//     })

//   } catch (error) {

//     res.json({
//       success: false,
//       message: error.message
//     })

//   }

// }


// /* Delete Order */

// const deleteOrder = async (req, res) => {

//   try {

//     const { id } = req.body

//     await orderModel.findByIdAndDelete(id)

//     res.json({
//       success: true,
//       message: "Order Deleted"
//     })

//   } catch (error) {

//     res.json({
//       success: false,
//       message: error.message
//     })

//   }

// }


// /* Delete User */

// const deleteUser = async (req, res) => {

//   try {

//     const { id } = req.body

//     await userModel.findByIdAndDelete(id)

//     res.json({
//       success: true,
//       message: "User Deleted"
//     })

//   } catch (error) {

//     res.json({
//       success: false,
//       message: error.message
//     })

//   }

// }


// export {
//   getDashboardStats,
//   getAllUsers,
//   getReports,
//   deleteOrder,
//   deleteUser
// }


// import productModel from "../models/productModel.js"
// import orderModel from "../models/orderModel.js"
// import userModel from "../models/userModel.js"

// /* Dashboard Overview */
// const getDashboardStats = async (req, res) => {
//   try {

//     const totalProducts = await productModel.countDocuments()
//     const totalUsers = await userModel.countDocuments()
//     const totalOrders = await orderModel.countDocuments()

//     const orders = await orderModel.find()

//     let revenue = 0
//     orders.forEach(order => {
//       revenue += order.amount
//     })

//     /* Latest Orders */
//     const latestOrders = await orderModel
//       .find()
//       .sort({ date: -1 })
//       .limit(5)

//     /* Latest Users */
//     const latestUsers = await userModel
//       .find()
//       .sort({ _id: -1 })
//       .limit(5)

//     res.json({
//       success: true,
//       stats: {
//         totalProducts,
//         totalUsers,
//         totalOrders,
//         revenue
//       },
//       latestOrders,
//       latestUsers
//     })

//   } catch (error) {
//     res.json({ success: false, message: error.message })
//   }
// }

// /* Get All Users (Manage Users Page) */
// const getAllUsers = async (req, res) => {
//   try {

//     const users = await userModel.find().select("-password")

//     res.json({
//       success: true,
//       users
//     })

//   } catch (error) {
//     res.json({ success: false, message: error.message })
//   }
// }

// /* Reports API */
// const getReports = async (req, res) => {
//   try {

//     const totalProducts = await productModel.countDocuments()
//     const totalUsers = await userModel.countDocuments()
//     const totalOrders = await orderModel.countDocuments()

//     const orders = await orderModel.find()

//     let totalRevenue = 0
//     orders.forEach(order => {
//       totalRevenue += order.amount
//     })

//     res.json({
//       success: true,
//       totalProducts,
//       totalUsers,
//       totalOrders,
//       totalRevenue
//     })

//   } catch (error) {
//     res.json({ success: false, message: error.message })
//   }
// }

// /* Delete Order */
// const deleteOrder = async (req, res) => {
//   try {

//     const { id } = req.body

//     await orderModel.findByIdAndDelete(id)

//     res.json({
//       success: true,
//       message: "Order Deleted"
//     })

//   } catch (error) {
//     res.json({ success: false, message: error.message })
//   }
// }

// /* Delete User */
// const deleteUser = async (req, res) => {
//   try {

//     const { id } = req.body

//     await userModel.findByIdAndDelete(id)

//     res.json({
//       success: true,
//       message: "User Deleted"
//     })

//   } catch (error) {
//     res.json({ success: false, message: error.message })
//   }
// }

// export {
//   getDashboardStats,
//   getAllUsers,
//   getReports,
//   deleteOrder,
//   deleteUser
// }


import productModel from "../models/productModel.js"
import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

/* Dashboard Overview */
const getDashboardStats = async (req, res) => {
  try {

    const totalProducts = await productModel.countDocuments()
    const totalUsers = await userModel.countDocuments()
    const totalOrders = await orderModel.countDocuments()

    const orders = await orderModel.find()

    let revenue = 0
    orders.forEach(order => {
      revenue += order.amount
    })

    /* Latest Orders */
    const latestOrders = await orderModel
      .find()
      .sort({ date: -1 })
      .limit(5)

    /* Latest Users */
    const latestUsers = await userModel
      .find()
      .sort({ _id: -1 })
      .limit(5)

    res.json({
      success: true,
      stats: {
        totalProducts,
        totalUsers,
        totalOrders,
        revenue
      },
      latestOrders,
      latestUsers
    })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

/* Get All Users (Manage Users Page) */
const getAllUsers = async (req, res) => {
  try {

    const users = await userModel.find().select("-password")

    res.json({
      success: true,
      users
    })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

/* Reports API */
const getReports = async (req, res) => {
  try {

    const totalProducts = await productModel.countDocuments()
    const totalUsers = await userModel.countDocuments()
    const totalOrders = await orderModel.countDocuments()

    const orders = await orderModel.find()

    let totalRevenue = 0
    orders.forEach(order => {
      totalRevenue += order.amount
    })

    res.json({
      success: true,
      totalProducts,
      totalUsers,
      totalOrders,
      totalRevenue
    })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

/* Delete Order */
const deleteOrder = async (req, res) => {
  try {

    const { id } = req.body

    await orderModel.findByIdAndDelete(id)

    res.json({
      success: true,
      message: "Order Deleted"
    })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

/* Delete User */
const deleteUser = async (req, res) => {
  try {

    const { id } = req.body

    await userModel.findByIdAndDelete(id)

    res.json({
      success: true,
      message: "User Deleted"
    })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export {
  getDashboardStats,
  getAllUsers,
  getReports,
  deleteOrder,
  deleteUser
}