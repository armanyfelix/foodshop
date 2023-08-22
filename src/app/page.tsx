import CallToAction from '@/app/home/CallToAction'

export const runtime = 'edge'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6">
      <h1 className="mt-10 font-mono text-xl">Create your next food</h1>
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
