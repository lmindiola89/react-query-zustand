import Card from "./components/Card";
import useFetchRepositoris from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const { isLoading, data } = useFetchRepositoris("lmindiola89");
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div>Loading...</div>;

  // console.log(data);

  return (
    <div>
      {data?.map((repository) => (
        <Card
          key={repository.id}
          repository={repository}
          isFavorite={favoriteReposIds.includes(repository.id)}
        ></Card>
      ))}
    </div>
  );
}

export default App;
