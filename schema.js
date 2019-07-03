const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const { GraphQLDate } = require('graphql-iso-date');
  


//Hardcoded data
const users = [
    {id: '1', name: 'Farid'},
    {id: '2', name: 'Ali'},
    {id: '3', name: 'Harm'}
]

//User Type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString}
    })
});

//Todo Type
const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        user: {type: UserType},
        task: {type: GraphQLString},
        due: {type: GraphQLDate,
            resolve: () => Date.now()
        
        }
    })
})

//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                name: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                for (let i = 0; i < users.length; i++) {
                    if (users[i].name === args.name) {
                        return users[i];
                    }
                }
        }
        }
    }

})

module.exports = new GraphQLSchema({
        query: RootQuery
});