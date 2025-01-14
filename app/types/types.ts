export type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null; // Description can be null
    // Add any other fields you need from the GitHub API
  };