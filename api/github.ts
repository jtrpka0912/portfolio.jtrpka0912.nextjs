import {
  checkIfErrorMessageResponse,
  convertRepoURLToOwnerAndRepo,
} from "../helpers/api/github";

export const getRepo = async (repoUrl: string) => {
  const [owner, repo] = convertRepoURLToOwnerAndRepo(repoUrl);

  const githubRepoApiUrl = `https://api.github.com/repos/${owner}/${repo}`;

  const response: Response = await fetch(githubRepoApiUrl, {
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) throw new Error("Unable to retrieve Github repo data.");

  const responseJson = await response.json();

  // Might be redundant at this point since it throws a 404 anyway with a bad repo link or a private repo.
  if (checkIfErrorMessageResponse(responseJson))
    throw new Error("Unable to retrieve Github repo data.");

  return responseJson;
};
