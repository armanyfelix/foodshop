import TabsC from './TabsC'

// interface Ingredient {
//   name: string
//   description: string
//   image: string
//   types: {
//     name: string
//     description: string
//     image: string
//     calorie: number
//     protein: number
//     fat: number
//     prices: {
//       sizes: {
//         small: number | null
//         medium: number | null
//         large: number | null
//       }
//       liter: number | null
//       kilo: number | null
//       piece: number | null
//     }
//   }[]
// }

export default async function Create() {
  return (
    <div className="min-h-screen p-3">
      <TabsC />
    </div>
  )
}
