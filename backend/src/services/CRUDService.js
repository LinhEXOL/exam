import bcrypt from "bcryptjs";
import db from "../models/index";
const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      //lưu ý, truyền vào đúng password cần hash
      // let hashPassWord = await bcrypt.hashSync("B4c0/\/", salt); => copy paste mà ko edit nè
      let hashPassWord = await bcrypt.hashSync(password, salt);

      resolve(hashPassWord);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //let hashPasswordFromBcrypt = await hashUserPassword(data.password)
      await db.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
      resolve("Create a new user success");
    } catch (e) {
      reject(e);
    }
  });
};

let createNewRestaurant = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //let hashPasswordFromBcrypt = await hashUserPassword(data.password)
      await db.User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
      resolve("Create a new user success");
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      //let hashPasswordFromBcrypt = await hashUserPassword(data.password)
      let users = await db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser,
  getAllUsers,
};
