const graphql = require('graphql');

const {
    GraphQLString,
    GraphQLID,
    GraphQLObjectType
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        id: { type: GraphQLID },
        email: { type: GraphQLString }
    }
});

module.exports = UserType;