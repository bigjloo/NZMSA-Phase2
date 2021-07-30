import { gql } from "@apollo/client";

export const GET_ALL_USERS_DAYS_EVENTS = gql`
  query {
    users {
      id
      name
      days {
        date
        events {
          name
          description
        }
      }
    }
  }
`;
