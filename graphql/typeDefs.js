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


    input UserInput{
        firstName: String!
        lastName: String!
        gender: GenderEnum!
        phone: String!
        email: String!
        isMarried: Boolean!
    }



    type Query {
        users: [User!]!
        user(id:ID!):User
        posts: [Post!]
        post(id:ID!):Post
    }


    type Mutation{
        addUser(input: UserInput):User
    }


`;


// Module Export
module.exports = typeDefs;