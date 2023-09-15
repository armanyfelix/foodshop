import CallToAction from '@/components/home/CallToAction'
import Search from '@/components/home/Search'
import SuggestionCard from '@/components/home/SuggestionCard'
import { getRandomRecipes } from './actions'

export default async function Home() {
  const randomRecipes = await getRandomRecipes()

  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className=" m-10 font-mono text-xl">Create your next food</h1>
      <Search />
      <section className="s mb-48 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {randomRecipes &&
          randomRecipes?.recipes.map((recipe: any) => <SuggestionCard recipe={recipe} key={recipe.id} />)}
      </section>
      <div className="fixed bottom-5 right-1/2 z-50 translate-x-1/2">
        <CallToAction />
      </div>
    </main>
  )
}
