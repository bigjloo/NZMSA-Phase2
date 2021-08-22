import { gql } from "@apollo/client"

// If no error is returned, user is verified
export const VERIFY_USER = gql`
  query {
    self {
      id
    }
  }
`

// When User page loads
// Gets users github name + imageURI and
// events for today
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

// Gets events from backend with publish key
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


