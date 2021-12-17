module.exports = `

    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        messages: [Message!]
    }

    type Mutation {
        postMessage(user: String!, content: String!): ID
    }

    type Subscription {
        messages: [Message!]
    }

`