import User from "../Model/userModel.js";

export const create = async (req, res) => {
  console.log("checking issue", req.body);

  try {
    const { email } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User(req.body);
    const saveData = await newUser.save();

    return res.status(200).json({ message: "User created", data: saveData });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const allUserList = await User.findOne();
    if ( allUserList.length==0 ) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json({ message: "User created", data: allUserList });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id
  try {
    const data = await User.find();
    console.log(data,"data")
    const allUserList = await User.findById(userId);
    if ( allUserList.length == 0 ) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json({ message: "User created", data: allUserList });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};