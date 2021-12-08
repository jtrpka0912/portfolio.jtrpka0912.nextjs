/**
 * @interface GithubRepo
 * @summary Github Repo
 * @author J. Trpka
 */
export interface GithubRepo {    
    id: number
    node_id: string
    name: string
    full_name: string
    owner: GithubRepoOwner
    private: boolean
    html_url: string
    description: string
    fork: boolean
    url: string
    archive_url: string
    assignees_url: string
    blobs_url: string
    branches_url: string
    collaborators_url: string
    comments_url: string
    commits_url: string
    compare_url: string
    contents_url: string
    contributors_url: string
    deployments_url: string
    downloads_url: string
    events_url: string
    forks_url: string
    git_commits_url: string
    git_refs_url: string
    git_tags_url: string
    git_url: string
    issue_comment_url: string
    issue_events_url: string
    issues_url: string
    keys_url: string
    labels_url: string
    languages_url: string
    merges_url: string
    milestones_url: string
    notifications_url: string
    pulls_url: string
    releases_url: string
    ssh_url: string
    stargazers_url: string
    statuses_url: string
    subscribers_url: string
    subscription_url: string
    tags_url: string
    teams_url: string
    trees_url: string
    clone_url: string
    mirror_url: string
    hooks_url: string
    svn_url: string
    homepage: string
    language: any // Unknown type
    forks_count: number
    forks: number
    stargazers_count: number
    watchers_count: number
    watchers: number
    size: number
    default_branch: string
    open_issues_count: number
    open_issues: number
    is_template: boolean
    topics: string[]
    has_issues: boolean
    has_projects: boolean
    has_wiki: boolean
    has_pages: boolean
    has_downloads: boolean
    archived: boolean
    disabled: boolean
    visibility: string
    pushed_at: string // Date
    created_at: string // Date
    updated_at: string // Date
    permissions: GithubRepoPermission
    allow_rebase_merge: boolean
    template_repository: GithubTemplateRepository
    temp_clone_token: string
    allow_squash_merge: boolean
    allow_auto_merge: boolean
    delete_branch_on_merge: boolean
    allow_merge_commit: boolean
    subscribers_count: number
    network_count: number
    license: GithubRepoLicense // This one was missing the html_url property
    organization: GithubRepoOrganization
    parent: GithubParent
    source: GithubRepoSource 
}

// These sub objects should stay private.

/**
 * @interface GithubRepoOwner
 * @summary Github repo owner
 * @author J. Trpka
 */
interface GithubRepoOwner {
    login: string
    id: number,
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
}

/**
 * @interface GithubRepoOrganization
 * @summary Github repo organization
 * @author J. Trpka
 * @todo Identical to GithubRepoOwner
 */
 interface GithubRepoOrganization {
    login: string
    id: number,
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
}

/**
 * @interface GithubRepoPermission
 * @summary Github repo permissions
 * @author J. Trpka
 */
interface GithubRepoPermission {
    pull: boolean
    push: boolean
    admin: boolean
}

/**
 * @interface GithubRepoTemplateRepository
 * @summary Github repo template repository
 * @author J. Trpka
 */
interface GithubTemplateRepository {
    id: number
    node_id: string
    name: string
    full_name: string
    owner: GithubRepoOwner
    private: boolean
    html_url: string
    description: string
    fork: boolean
    url: string
    archive_url: string
    assignees_url: string
    blobs_url: string
    branches_url: string
    collaborators_url: string
    comments_url: string
    commits_url: string
    compare_url: string
    contents_url: string
    contributors_url: string
    deployments_url: string
    downloads_url: string
    events_url: string
    forks_url: string
    git_commits_url: string
    git_refs_url: string
    git_tags_url: string
    git_url: string
    issue_comment_url: string
    issue_events_url: string
    issues_url: string
    keys_url: string
    labels_url: string
    languages_url: string
    merges_url: string
    milestones_url: string
    notifications_url: string
    pulls_url: string
    releases_url: string
    ssh_url: string
    stargazers_url: string
    statuses_url: string
    subscribers_url: string
    subscription_url: string
    tags_url: string
    teams_url: string
    trees_url: string
    clone_url: string
    mirror_url: string
    hooks_url: string
    svn_url: string
    homepage: string
    language: any // Unknown type
    forks: number
    forks_count: number
    stargazers_count: number
    watchers_count: number
    watchers: number
    size: number
    default_branch: string
    open_issues: number
    open_issues_count: number
    is_template: boolean
    license: GithubRepoLicense
    topics: string[]
    has_issues: boolean
    has_projects: boolean
    has_wiki: boolean
    has_pages: boolean
    has_downloads: boolean
    archived: boolean
    disabled: boolean
    visibility: string
    pushed_at: string // Date
    created_at: string // Date
    updated_at: string // Date
    permissions: GithubRepoPermission
    allow_rebase_merge: boolean
    temp_clone_token: string
    allow_squash_merge: boolean
    allow_auto_merge: boolean
    delete_branch_on_merge: boolean
    allow_merge_commit: boolean
    subscribers_count: number
    network_count: number
}

/**
 * @interface GithubRepoLicense
 * @summary Github repo license
 * @author J. Trpka
 */
interface GithubRepoLicense {
    key: string
    name: string
    url: string
    spdx_id: string
    node_id: string
    html_url: string
}

/**
 * @interface GithubRepoParent
 * @summary Github repo parent
 * @author J. Trpka
 */
interface GithubParent {
    id: number
    node_id: string
    name: string
    full_name: string
    owner: GithubRepoOwner
    private: boolean
    html_url: string
    description: string
    fork: boolean
    url: string
    archive_url: string
    assignees_url: string
    blobs_url: string
    branches_url: string
    collaborators_url: string
    comments_url: string
    commits_url: string
    compare_url: string
    contents_url: string
    contributors_url: string
    deployments_url: string
    downloads_url: string
    events_url: string
    forks_url: string
    git_commits_url: string
    git_refs_url: string
    git_tags_url: string
    git_url: string
    issue_comment_url: string
    issue_events_url: string
    issues_url: string
    keys_url: string
    labels_url: string
    languages_url: string
    merges_url: string
    milestones_url: string
    notifications_url: string
    pulls_url: string
    releases_url: string
    ssh_url: string
    stargazers_url: string
    statuses_url: string
    subscribers_url: string
    subscription_url: string
    tags_url: string
    teams_url: string
    trees_url: string
    clone_url: string
    mirror_url: string
    hooks_url: string
    svn_url: string
    homepage: string
    language: any // Unknown type
    forks_count: number
    stargazers_count: number
    watchers_count: number
    size: number
    default_branch: string
    open_issues_count: number
    is_template: boolean
    topics: string[]
    has_issues: boolean
    has_projects: boolean
    has_wiki: boolean
    has_pages: boolean
    has_downloads: boolean
    archived: boolean
    disabled: boolean
    visibility: boolean
    pushed_at: string // Date
    created_at: string // Date
    updated_at: string // Date
    permissions: GithubRepoPermission
    allow_rebase_merge: boolean
    temp_clone_token: string
    allow_squash_merge: boolean
    allow_auto_merge: boolean
    delete_branch_on_merge: boolean
    allow_merge_commit: boolean
    subscribers_count: number
    network_count: number
    license: GithubRepoLicense
    forks: number
    open_issues: number
    watchers: number
}

/**
 * @interface GithubRepoSource
 * @summary Github repo source
 * @author J. Trpka
 */
interface GithubRepoSource {
    id: number
    node_id: string
    name: string
    full_name: string
    owner: GithubRepoOwner
    private: boolean
    html_url: string
    description: string
    fork: boolean
    url: string
    archive_url: string
    assignees_url: string
    blobs_url: string
    branches_url: string
    collaborators_url: string
    comments_url: string
    commits_url: string
    compare_url: string
    contents_url: string
    contributors_url: string
    deployments_url: string
    downloads_url: string
    events_url: string
    forks_url: string
    git_commits_url: string
    git_refs_url: string
    git_tags_url: string
    git_url: string
    issue_comment_url: string
    issue_events_url: string
    issues_url: string
    keys_url: string
    labels_url: string
    languages_url: string
    merges_url: string
    milestones_url: string
    notifications_url: string
    pulls_url: string
    releases_url: string
    ssh_url: string
    stargazers_url: string
    statuses_url: string
    subscribers_url: string
    subscription_url: string
    tags_url: string
    teams_url: string
    trees_url: string
    clone_url: string
    mirror_url: string
    hooks_url: string
    svn_url: string
    homepage: string
    language: any // Unknown Type
    forks_count: number
    stargazers_count: number
    watchers_count: number
    size: number
    default_branch: string
    open_issues_count: number
    is_template: boolean
    topics: string[]
    has_issues: boolean
    has_projects: boolean
    has_wiki: boolean
    has_pages: boolean
    has_downloads: boolean
    archived: boolean
    disabled: boolean
    visibility: string
    pushed_at: string // Date
    created_at: string // Date
    updated_at: string // Date
    permissions: GithubRepoPermission
    allow_rebase_merge: boolean
    temp_clone_token: string
    allow_squash_merge: boolean
    allow_auto_merge: boolean
    delete_branch_on_merge: boolean
    allow_merge_commit: boolean
    subscribers_count: number
    network_count: number
    license: GithubRepoLicense,
    forks: number
    open_issues: number
    watchers: number
}