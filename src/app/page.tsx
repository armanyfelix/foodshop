import CallToAction from '@/components/CallToAction'
import SearchBar from '@/components/SearchBar'
import SuggestionCard from '@/components/containers/SuggestionCard'

const suggestions = [
  {
    id: 1,
    name: 'rice_bowl.jpg',
  },
  {
    id: 2,
    name: 'rice_bowl.jpg',
  },
  {
    id: 3,
    name: 'rice_bowl.jpg',
  },
  {
    id: 4,
    name: 'rice_bowl.jpg',
  },
  {
    id: 5,
    name: 'rice_bowl.jpg',
  },
  {
    id: 6,
    name: 'rice_bowl.jpg',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6">
      <h1 className="mt-10 font-mono text-xl">Create your next food</h1>
      <div className="mt-10">
        <SearchBar />
      </div>
      <section className="mt-14 grid grid-cols-2 gap-5">
        {suggestions.map((s) => (
          <SuggestionCard item={s} key={s.id} />
        ))}
      </section>
      <div className="fixed bottom-5 right-1/2 z-50 translate-x-1/2">
        <CallToAction />
      </div>
    </main>
  )
}
