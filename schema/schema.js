const graphql = require('graphql')
const lodash = require('lodash')

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

/*
// dummy data
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
    { name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
    { name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3' },
    { name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3' },
];
const authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
];
*/

const BookType = new GraphQLObjectType({
    name : 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})
const RootQuery  = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: () => ({
        book: {
            type: BookType,
            args: {id: GraphQLString},
            resolve(parent,args){
                //code to get data from db or other source
                return_find(books,{id: args.id})
            },
            
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
})