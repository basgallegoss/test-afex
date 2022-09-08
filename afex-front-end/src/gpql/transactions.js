import { gql } from "@apollo/client";

export const GET_TRANSACTIONS = gql`
  query AllTransaction {
    allTransaction {
      id
      date
      name
      lastName
      amount
      country
      type
    }
  }
`;
