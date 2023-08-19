import CallToAction from '@/components/CallToAction'
import Search from '@/components/Search'
// import SuggestionCard from '@/components/containers/SuggestionCard'

// const suggestions = [
//   {
//     id: 1,
//     name: 'rice_bowl.jpg',
//   },
//   {
//     id: 2,
//     name: 'rice_bowl.jpg',
//   },
//   {
//     id: 3,
//     name: 'rice_bowl.jpg',
//   },
//   {
//     id: 4,
//     name: 'rice_bowl.jpg',
//   },
//   {
//     id: 5,
//     name: 'rice_bowl.jpg',
//   },
//   {
//     id: 6,
//     name: 'rice_bowl.jpg',
//   },
// ]
export const runtime = 'edge'

export default function Home() {
  // const onSearch = async (e: Event) => {
  //   e.preventDefault()
  //   const res = await fetch('/api/generate', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ prompt: e }),
  //   })
  //   const data = await res.json()
  // }

  return (
    <main className="flex min-h-screen flex-col px-6">
      <h1 className="mt-10 font-mono text-xl">Create your next food</h1>
      <div className="mt-10">
        <Search />
      </div>
      {/* <section className="mt-14 grid grid-cols-2 gap-5">
        {suggestions.map((s) => (
          <SuggestionCard item={s} key={s.id} />
        ))}
      </section> */}
      <div className="fixed bottom-5 right-1/2 z-50 translate-x-1/2">
        <CallToAction />
      </div>
    </main>
  )
}
