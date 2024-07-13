import api from "../api/github";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Repository } from "./type";

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
}

function useFetchRepositoris(githubUser: string) {
  return useQuery({
    queryKey: ["repoData", githubUser],
    queryFn: fetchRepos,
  });
}

export default useFetchRepositoris;
