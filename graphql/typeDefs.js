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
    }


    type Mutation{
        addUser(input: UserInput):User
    }


`;


// Module Export
module.exports = typeDefs;