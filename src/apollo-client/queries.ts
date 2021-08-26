import { gql } from "@apollo/client"

// Verifies user exists in database
export const VERIFY_USER = gql`
  query {
    self {
      id
    }
  }
`

// When User page loads, fetches user's
// github name + imageURI and today's events
export const GET_USER_DATA = gql`
  query {
    userData: self {
      github
      imageURI
    }

    sasToken: accountSaSToken {
      token
    }

    today {
      events {
        name
        description
        photoURI
      }
    }
  }
`

// Fetches events from backend with publish key
export const GET_EVENTS_BY_PUBLISH_KEY = gql`
  query ($publishKey: String!) {
    day(publishKey: $publishKey) {
      date
      user {
        name
      }
      events {
        name
        description
        photoURI
      }
    }
  }
`


