import { gql } from "@apollo/client"

// USED
export const LOGIN_WITH_GITHUB_CODE = gql`
  mutation ($code: String!) {
    login(input: { code: $code }) {
      jwt
    }
  }
`

// TODO
export const SAVE_EVENTS = gql`
  mutation {
    saveEvent(input: { events: $EVENTS })
  }
`

// export const GET_DAY = gql`
//   query {
//     dayByUser {
//       date
//       id
//       events {
//         name
//         description
//       }
//     }
//   }
// `

// USED
export const GET_EVENTS_BY_USER_TODAY = gql`
  query {
    eventsForToday {
      name
      description
      order
    }
  }
`

// TO BE IMPLEMENTED
export const GET_EVENTS_BY_PUBLISH_KEY = gql`
  query ($PUBLISHKEY: String!) {
    events(input: { publishKey: $PUBLISHKEY }) {
      name
      description
    }
  }
`
