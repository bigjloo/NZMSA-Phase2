import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { CONFIGURATION } from "../apollo-client/apollo";
import { LOGIN_WITH_GITHUB_CODE } from "../apollo-client/query";

const GITHUB_OAUTH_URI = `https://github.com/login/oauth/authorize?client_id=${CONFIGURATION.CLIENT_ID}`;

export async function githubLogin() {
  const response = await fetch(GITHUB_OAUTH_URI);
  console.log(response);
}

export const LoginWithGitHubCode = ({ code }: { code: string }) => {
  const [getToken, { data, loading, error }] = useMutation(
    LOGIN_WITH_GITHUB_CODE
  );

  useEffect(() => {
    getToken({
      variables: { code: code },
    });
  }, [getToken, code]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  if (data) console.log(data);

  return <h1>Login w Github</h1>;
};
