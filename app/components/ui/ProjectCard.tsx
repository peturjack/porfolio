"use client";
import React from "react";
import { fetchStarredRepos } from "@/server/repo";
import { Repo } from "@/app/types/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Text from "../typography/Text";

const ProjectCard = () => {
  const {
    data: starredRepos,
    error,
    isLoading,
  } = useQuery<Repo[] | undefined>({
    queryKey: ["starredRepos"],
    queryFn: fetchStarredRepos,
  });
  if (isLoading) return <div>Is Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {starredRepos?.map((data) => {
        return (
          <div
            key={data.id}
            className=" rounded-lg shadow-md p-4 flex flex-col justify-between"
          >
            <Text type="h3">{data.name}</Text>
            <Text>{data.description}</Text>
            <Link
              target="_blank"
              href={data.html_url}
              className="cursor-pointer"
            >
              <button className="py-2 px-4 rounded border-2 mt-4">
                Go to project
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
