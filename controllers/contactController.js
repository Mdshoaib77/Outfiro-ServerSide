// import contactModel from "../models/contactModel.js"

// const addContact = async (req,res)=>{

//   try{

//     const {name,email,subject,message} = req.body

//     const newContact = new contactModel({

//       name,
//       email,
//       subject,
//       message,
//       date:Date.now()

//     })

//     await newContact.save()

//     res.json({

//       success:true,
//       message:"Message Sent Successfully"

//     })

//   }catch(error){

//     res.json({

//       success:false,
//       message:error.message

//     })

//   }

// }

// export {addContact}

import contactModel from "../models/contactModel.js"

const addContact = async (req,res)=>{

  try{

    const {name,email,subject,message} = req.body

    const newContact = new contactModel({

      name,
      email,
      subject,
      message,
      date:Date.now()

    })

    await newContact.save()

    res.json({

      success:true,
      message:"Message Sent Successfully"

    })

  }catch(error){

    res.json({

      success:false,
      message:error.message

    })

  }

}


/* GET ALL CONTACT MESSAGES (ADMIN) */

const getContacts = async (req,res)=>{

  try{

    const contacts = await contactModel
      .find()
      .sort({date:-1})

    res.json({

      success:true,
      contacts

    })

  }catch(error){

    res.json({

      success:false,
      message:error.message

    })

  }

}


export {addContact, getContacts}