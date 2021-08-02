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

export const GET_USER_WITH_JWT = gql`
  query {
    self {
      id
      name
    }
  }
`
