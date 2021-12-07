/**
 * @function convertRepoURLToOwnerAndRepo
 * @summary Convert repo url to owner and repo
 * @description Take a valid Github repo URL and retrieve the owner and repo values
 * @author J. Trpka
 * @param { string } repoUrl 
 * @example https://www.github.com/octocat/hello-world
 * @returns { [string, string] }
 */
export const convertRepoURLToOwnerAndRepo = (repoUrl: string): [string, string] => {
    const repoUrlBreakdown = repoUrl.split('/');

    // First check if the breakdown is successful
    if(repoUrlBreakdown[0] === 'https:' && // Nowadays this should be a https website
        repoUrlBreakdown[1] === '' && // Should be nothing. https:/{ this is why its empty}/
        (repoUrlBreakdown[2] === 'github.com' || repoUrlBreakdown[2] === 'www.github.com') && // Either with(out) the www. sub-domain
        (repoUrlBreakdown[3] && repoUrlBreakdown[4]) && // There needs to be values in the last two
        repoUrlBreakdown.length === 5 // Finally, no more than five array elements
    ) {
        return [repoUrlBreakdown[3], repoUrlBreakdown[4]];
    } else {
        throw new Error('Invalid Github URL');
    }
}

// TODO Add a checker if response is either valid or an error message

// EXAMPLE:
/*
{
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest/reference/repos#get-a-repository"
}
*/