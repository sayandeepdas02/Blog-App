// const JWT = require("jsonwebtoken");

// const secret = process.env.JWT_SECRET;

// function createTokenForUser(user) {
//   const payload = {
//     _id: user._id,
//     email: user.email,
//     profileImageURL: user.profileImageURL,
//     role: user.role,
//   };

//   return JWT.sign(payload, secret, {
//     expiresIn: "7d",
//   });
// }

// function validateToken(token) {
//   try {
//     return JWT.verify(token, secret);
//   } catch (err) {
//     console.error("JWT ERROR:", err.message);
//     return null;
//   }
// }

// module.exports = {
//   createTokenForUser,
//   validateToken,
// };









const JWT = require('jsonwebtoken');

const secret = "Superman@123";

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
};