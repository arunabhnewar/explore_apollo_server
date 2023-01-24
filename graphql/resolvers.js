const { users } = require("../data")

const resolvers = {
    Query: {
        users(root, args) {
            return users
        },

        user(_, { id }) {
            return users.find(user => user.id == id)
        },


    },
    Mutation: {
        addUser(_, { input: { firstName, lastName, gender, phone, email, isMarried } }) {

            const user = {
                id: users.length + 1,
                firstName,
                lastName,
                gender,
                phone,
                email,
                isMarried,
                posts: [],
            }
            users.push(user);
            return user;
        },
    },
};



// Module Export
module.exports = resolvers;