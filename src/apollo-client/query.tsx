import { gql } from "@apollo/client"

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
`

export const LOGIN_WITH_GITHUB_CODE = gql`
  mutation ($code: String!) {
    login(input: { code: $code }) {
      jwt
    }
  }
`

export const ADD_DAY = gql`
  mutation ($USERID: Int!) {
    addDay(input: { userId: $USERID }) {
      date
      userId
    }
  }
`

export const GET_USER_INFO_WITH_JWT = gql`
  query {
    self {
      days {
        date
        events {
          name
          description
        }
      }
    }
  }
`
// TODO
export const SAVE_EVENTS = gql`
  mutation ($EVENTS: ){
    saveEvent(input: {events: $EVENTS})
  }
`

export const GET_DAY = gql`
  query {
    day {
      date
      events {
        name
        description
      }
    }
  }
`
