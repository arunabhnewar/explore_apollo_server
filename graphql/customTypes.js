// Dependencies
const { GraphQLError,
    GraphQLScalarType } = require("graphql");


// email validation
function emailValidate(email) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(regex)) {
        return email;
    } else {
        throw new GraphQLError(`${value} is not a valid email`)
    }
}


// Password Validation
function passwordValidation(password) {
    let pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (pwdRegex.test(password)) {
        return password
    } else {
        throw new GraphQLError(`Password is not strong`)
    }
}



// Date Valdation
function dateValidation(value) {
    const date = new Date(value);
    if (date.toString() === "Invalid Date") {
        throw new GraphQLError(`${value} is not a valid date`)
    } else {
        return date.toISOString()
    }
};




// Date Type
const DateType = new GraphQLScalarType({
    name: "DateType",
    description: "It shows a date",
    parseValue: dateValidation,
    parseLiteral: (AST) => {
        if (AST.kind === Kind.STRING || AST.kind === Kind.INT) {
            return dateValidation(AST.value);
        } else {
            throw new GraphQLError(`${AST.value} is not a string or number`)
        }
    },
    serialize: dateValidation,
})



// Password Type
const PasswordType = new GraphQLScalarType({
    name: "PasswordType",
    description: "Strong Password with 1 uppercase, 1 lowercase, 1 number",
    parseValue: passwordValidation,
    parseLiteral: (AST) => {
        if (AST.kind === Kind.STRING) {
            return passwordValidation(AST.value);
        } else {
            throw new GraphQLError(`Password is not string`)
        }
    },
    serialize: passwordValidation,
})



// Email Type
const EmailType = new GraphQLScalarType({
    name: "EmailType",
    description: "Its for email",
    parseValue: emailValidate,
    parseLiteral: (AST) => {
        if (AST.kind === Kind.STRING) {
            return emailValidate(AST.value);
        } else {
            throw new GraphQLError(`${AST.value} is not a string`)
        }
    },
    serialize: emailValidate,
})



// Module Exports
module.exports = { DateType, PasswordType, EmailType };