// Dependencies
const { users, posts } = require("../data");
const { DateType, EmailType, PasswordType } = require("./customTypes");



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
        addUser(_, { input: { firstName, lastName, gender, phone, email, isMarried, password } }) {

            const user = {
                id: users.length + 1,
                firstName,
                lastName,
                gender,
                phone,
                email,
                isMarried,
                posts: [],
                createdAt: new Date(),
                password
            }
            users.push(user);
            return user;
        },

        userUpdate(_, { id, input: { firstName, lastName, gender, phone, email, isMarried, password } }) {

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
                    if (password) {
                        user.password = password;
                    }

                    userUpdate = user;
                }
            });
            return userUpdate;
        },

        addPost(_, { input: { title, description, user } }) {
            const post = {

                id: posts.length + 1,
                title,
                description,
                user
            }
            posts.push(post);
            return post
        },

        postUpdate(_, { id, input: { title, description, user } }) {

            let postUpdate = null;
            posts.forEach(post => {

                if (post.id !== id) return;

                if (title) post.title = title;
                if (description) post.description = description;
                if (user) post.user = user;

                postUpdate = post;
            })
            return postUpdate;
        },

        userDelete(_, { id }) {
            const index = users.findIndex((user) => user.id == id);


            if (index >= 0) {
                users.splice(index, 1);
            } else {
                return false;
            }
        },

        postDelete(_, { id }) {
            const index = posts.findIndex((post) => post.id == id);


            if (index >= 0) {
                posts.splice(index, 1);
            } else {
                return false;
            }
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
    },

    DateType: DateType,
    PasswordType: PasswordType,
    EmailType: EmailType,

};



// Module Export
module.exports = resolvers;