const typeDefs = `#graphql

    scalar DateType
    scalar PasswordType
    scalar EmailType


    """Gender defined"""
    enum GenderEnum {
        male 
        female 
    }


    """Single User data"""
    type User {
        id: ID!
        firstName: String!
        lastName: String!
        gender: GenderEnum!
        phone: String!
        email: EmailType!
        isMarried: Boolean!
        posts:[Post!]
        createdAt: DateType!
        password: PasswordType!
    }

    """User Post"""
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
        email: EmailType!
        isMarried: Boolean!
        password: PasswordType!
    }


    input UserInputUpdate {
        firstName: String
        lastName: String
        gender: GenderEnum
        phone: String
        email: EmailType
        isMarried: Boolean
        password: PasswordType
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