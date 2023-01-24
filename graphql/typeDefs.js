const typeDefs = `#graphql

    enum GenderEnum {
        male 
        female 
    }


    type User {
        id: ID!
        firstName: String!
        lastName: String!
        gender: GenderEnum!
        phone: String!
        email: String!
        isMarried: Boolean!
        posts:[Post!]
    }


    type Post {
        id: ID!
        title: String!
        description: String!
        user: User!
    }



    input PostInput{
        title: String!
        description: String!
        user: ID!

    }


    input PostInputUpdate{
        title: String
        description: String
        user: ID
    }


    input UserInput{
        firstName: String!
        lastName: String!
        gender: GenderEnum!
        phone: String!
        email: String!
        isMarried: Boolean!
    }


    input UserInputUpdate {
        firstName: String
        lastName: String
        gender: GenderEnum
        phone: String
        email: String
        isMarried: Boolean
    }



    type Query {
        users: [User!]!
        user(id:ID!):User
        posts: [Post!]!
        post(id:ID!):Post
    }


    type Mutation{
        addUser(input: UserInput):User
        userUpdate(id:ID!, input:UserInputUpdate):User
        addPost(input:PostInput):Post
        postUpdate(id:ID!, input: PostInputUpdate):Post
        userDelete(id:ID!):Boolean!
        postDelete(id:ID!):Boolean!
    }


`;


// Module Export
module.exports = typeDefs;