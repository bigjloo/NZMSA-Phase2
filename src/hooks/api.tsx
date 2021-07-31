import { CONFIGURATION } from "../apollo-client/apollo";

const GITHUB_OAUTH_URI = `https://github.com/login/oauth/authorize?client_id=${CONFIGURATION.CLIENT_ID}`;

export async function githubLogin() {
  const response = await fetch(GITHUB_OAUTH_URI);
  console.log(response);
}
