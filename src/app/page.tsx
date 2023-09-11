import CallToAction from '@/components/home/CallToAction'
import SearchBar from '@/components/home/SearchBar'
// import { spoonacularKey } from '@/constants/constants'
// import SuggestionCard from '@/components/home/SuggestionCard'

// async function getRandomRecipes() {
//   try {
//     const res = await fetch(
//       `https://api.spoonacular.com/recipes/random?apiKey=${spoonacularKey}&limitLicense=true&number=10&tags=mexican`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     )
//     const data = await res.text()
//     console.log(data)
//     // return data.code === 200 ? data : null
//   } catch (error) {
//     return error
//   }
// }

export default function Home() {
  // const randomRecipes = getRandomRecipes()

  return (
    <main className="flex min-h-screen flex-col px-6">
      <h1 className="mt-10 font-mono text-xl">Create your next food</h1>
      {/* <section className="mt-14 grid grid-cols-2 gap-5">
        {randomRecipes && randomRecipes?.map((s: any) => <SuggestionCard item={s} key={s.id} />)}
      </section> */}
      <SearchBar />
      <div className="fixed bottom-5 right-1/2 z-50 translate-x-1/2">
        <CallToAction />
      </div>
    </main>
  )
}
