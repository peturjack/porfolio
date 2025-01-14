
import { Repo } from "@/app/types/types";// Import the Repo type

export const fetchStarredRepos = async (): Promise<Repo[]> => { // Specify the return type
  const response = await fetch('https://api.github.com/users/peturjack/starred', {
   /*  headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`, // Use your token here
    }, */
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return await response.json();
};