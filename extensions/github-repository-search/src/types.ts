export interface Repository {
  id: string;
  nameWithOwner: string;
  owner: {
    avatarUrl?: string;
  };
  viewerHasStarred: boolean;
  stargazerCount: number;
  primaryLanguage?: {
    name: string;
  };
  updatedAt: string;
  url: string;
  hasIssuesEnabled: boolean;
  hasWikiEnabled: boolean;
  hasProjectsEnabled: boolean;
  releases: {
    totalCount: number;
  };
}

export interface SearchRepositoriesResponse {
  search: {
    repositoryCount: number;
    nodes: Repository[];
  };
}

export interface UserDataResponse {
  viewer: {
    login: string;
    avatarUrl?: string;
    organizations: {
      nodes: {
        login: string;
        avatarUrl?: string;
      }[];
    };
  };
}

export interface Release {
  id: string;
  description: string;
  name: string;
  publishedAt: string;
  createdAt: string;
  tagName: string;
  url: string;
}

export interface RepositoryReleasesResponse {
  repository: {
    releases: {
      nodes: Release[];
    };
  };
}

export interface Preferences {
  token: string;
  includeForks: boolean;
}
