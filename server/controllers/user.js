//inital working code for initial user points
import User from '../models/auth.js';

export const updateUserPoints = async (req, res) => {
  const { id } = req.params;
  const { points } = req.body;

  try {
      const user = await User.findById(id);

      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      user.points += points;
      await user.save();

      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

//update on 17/07 - to connect to mongodb
// import mongoose from "mongoose";
// import users from "../models/auth.js";

// export const allocatePoints = async (req, res) => {
//   const { userId, points } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(userId)) {
//     return res.status(404).send("User not found.");
//   }

//   try {
//     const user = await users.findById(userId);
//     if (!user) {
//       return res.status(404).send("User not found.");
//     }

//     user.points = (user.points || 0) + points;
//     await user.save();

//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
