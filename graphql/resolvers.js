const { users, posts } = require("../data")

const resolvers = {
    Query: {
        users(root, args) {
            return users
        },

        user(_, { id }) {
            return users.find(user => user.id == id)
        },

        posts() {
            return posts;
        },

        post(_, { id }) {
            return posts.find(post => post.id == id)
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

        userUpdate(_, { id, input: { firstName, lastName, gender, phone, email, isMarried } }) {

            let userUpdate = null;
            users.forEach(user => {
                if (user.id == id) {

                    if (firstName) {
                        user.firstName = firstName;
                    }
                    if (lastName) {
                        user.lastName = lastName;
                    }
                    if (gender) {
                        user.gender = gender;
                    }
                    if (phone) {
                        user.phone = phone;
                    }
                    if (email) {
                        user.email = email;
                    }
                    if (isMarried) {
                        user.isMarried = isMarried;
                    }

                    userUpdate = user;
                }
            });
            return userUpdate;
        },


    },

    Post: {
        user(post) {
            return users.find(user => user.id == post.user)
        }
    },

    User: {
        posts(user) {
            return posts.filter(post => {

                if (user.posts.includes(post.id)) {
                    return true
                } else {
                    return false;
                }
            })
        }
    }
};



// Module Export
module.exports = resolvers;