const { ApolloServer, gql } = require("apollo-server");
const transactions = [
  {
    id: 0,
    date: "01/02/2022",
    name: "Juan",
    lastName: "Perez",
    amount: 1000,
    country: "Chile",
    type: "CPL",
  },
  {
    id: 1,
    date: "19/03/2022",
    name: "Pedro",
    lastName: "Pereira",
    amount: 5500,
    country: "Mexico",
    type: "MXN",
  },
  {
    id: 2,
    date: "01/04/2022",
    name: "Carla",
    lastName: "Gallegos",
    amount: 1700,
    country: "Argentina",
    type: "USD",
  },
  {
    id: 3,
    date: "20/03/2022",
    name: "Alberto",
    lastName: "Castillo",
    amount: 4000,
    country: "Mexico",
    type: "MXN",
  },
  {
    id: 4,
    date: "24/03/2022",
    name: "Elizabeth",
    lastName: "Sepúlveda",
    amount: 1000,
    country: "Nicaragua",
    type: "EUR",
  },
  {
    id: 5,
    date: "08/09/2022",
    name: "Alexis",
    lastName: "Moreno",
    amount: 300,
    country: "Perú",
    type: "MXN",
  },
  {
    id: 6,
    date: "13/08/2022",
    name: "Camila",
    lastName: "Solis",
    amount: 100,
    country: "Colombia",
    type: "CPL",
  },
  {
    id: 7,
    date: "17/04/2022",
    name: "Hector",
    lastName: "Lagos",
    amount: 8200,
    country: "Puerto Rico",
    type: "USD",
  },
  {
    id: 8,
    date: "02/09/2022",
    name: "Benjamin",
    lastName: "Pino",
    amount: 8000,
    country: "España",
    type: "CPL",
  },
  {
    id: 9,
    date: "03/06/2022",
    name: "Valentin",
    lastName: "San Martin",
    amount: 8000,
    country: "Canadá",
    type: "CAD",
  },
  {
    id: 10,
    date: "03/06/2022",
    name: "Alejandro",
    lastName: "Muñoz",
    amount: 8000,
    country: "Argentina",
    type: "CAD",
  },
  {
    id: 11,
    date: "01/08/2022",
    name: "Camila",
    lastName: "Alvarez",
    amount: 1007,
    country: "Colombia",
    type: "CPL",
  },
  {
    id: 12,
    date: "17/04/2022",
    name: "Gabriela",
    lastName: "Andrades",
    amount: 8200,
    country: "Salvador",
    type: "USD",
  },
];

const typeDefs = gql`
  type Transaction {
    id: Int!
    date: String!
    name: String!
    lastName: String!
    amount: Int!
    country: String!
    type: String!
  }
  type Query {
    allTransaction: [Transaction]
  }
`;

const resolvers = {
  Query: {
    allTransaction: () => transactions,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen({
  port: 4000,
});
