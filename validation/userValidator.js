
const { body } = require('express-validator');
exports.registerValidation = [
    body("firstName")
        .not()
        .isEmpty()
        .withMessage("First name is required!")
        .isLength({ min: 2 })
        .withMessage("Enter a valid name!")
        .bail(),
    body("lastName")
        .not()
        .isEmpty()
        .withMessage("Last name is required!")
        .isLength({ min: 2 })
        .withMessage("Enter a valid name!")
        .bail(),
    body("email")
        .isEmail()
        .withMessage("Inavlid email")
        .isLength({ min: 7 })
        .withMessage("Email is required"),
    body("userName")
        .not()
        .isEmpty()
        .withMessage("Username is required")
        .isLength({ min: 5 })
        .withMessage("Should be minimum 5 characters!")
        .bail(),
    body("password")
        .not()
        .isEmpty()
        .withMessage("Enter a password")
        .isLength({ min: 6 })
        .withMessage("Password must be atleast 6 characters")
        .bail(),
    body("address")
        .not()
        .isEmpty()
        .withMessage("Address is required")
        .bail(),
];

