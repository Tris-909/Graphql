const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require("graphql");
const _ = require("lodash");

const dummyData = [
  {
    id: "1",
    name: "Tri",
    age: 23,
    profession: "Software Engineer",
    hobbyId: "11",
  },
  {
    id: "2",
    name: "Nguyen Thuy Tho Thao",
    age: 19,
    profession: "University Student",
    hobbyId: "22",
  },
  {
    id: "3",
    name: "Phuong Nguyen",
    age: 23,
    profession: "Consultant",
    hobbyId: "33",
  },
  {
    id: "4",
    name: "Huy",
    age: 23,
    profession: "Business Analysit",
    hobbyId: "33",
  },
  {
    id: "5",
    name: "Ba Ngoai",
    age: 78,
    profession: "Home Owner",
    hobbyId: "33",
  },
];

const hobbies = [
  {
    id: "11",
    type: "Video Games",
    description: "Something 1",
  },
  {
    id: "22",
    type: "BlackPink",
    description: "Something 2",
  },
  {
    id: "33",
    type: "Social",
    description: "Something 3",
  },
];

const posts = [
  {
    id: "1-1-1",
    comment: "123",
  },
  {
    id: "1-1-2",
    comment: "456",
  },
  {
    id: "1-1-3",
    comment: "789",
  },
];

const UserType = new GraphQLObjectType({
  name: "User",
  description: "Schema for User type",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    profession: {
      type: GraphQLString,
    },
    hobbyId: {
      type: GraphQLID,
    },
  }),
});

const HobbyType = new GraphQLObjectType({
  name: "Hobby",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    type: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  }),
});

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    comment: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return _.find(dummyData, { id: args.id });
      },
    },
    hobby: {
      type: HobbyType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return _.find(hobbies, { id: args.id });
      },
    },
    post: {
      type: PostType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return _.find(posts, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
