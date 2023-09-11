'use client'

import { Card, CardFooter, Image } from '@nextui-org/react'

interface Props {
  item: {
    id: number
    name: string
  }
}

export default function SuggestionCard({ item }: Props) {
  return (
    <Card isFooterBlurred className="col-span-12 h-[300px] w-full sm:col-span-7">
      {/* <CardHeader className="absolute top-1 z-10 flex-col items-start">
              <p className="text-tiny font-bold uppercase text-white/60">Your day your way</p>
              <h4 className="text-xl font-medium text-white/90">Your checklist for better sleep</h4>
            </CardHeader> */}
      <Image
        removeWrapper
        alt="Rice Bowl"
        className="z-0 h-full w-full object-cover"
        src="/images/rice_bowl.jpg"
      />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
        <div className="flex flex-grow items-center gap-2">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
