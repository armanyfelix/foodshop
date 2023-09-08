import { Dish } from '@/types/ingredient'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react'
import DishCard from './DishCard'

interface Props {
  isOpen: boolean | undefined
  onOpenChange: () => void
  dish: Dish
  addDish: (dish: Dish) => void
}

export default function DishModal({ isOpen, onOpenChange, dish, addDish }: Props) {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      placement="center"
      scrollBehavior="inside"
      onOpenChange={onOpenChange}
      classNames={{
        // base: 'max-h-screen',
        body: 'p-0 bg-blue gap-0',
      }}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: 'easeIn',
            },
          },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Dish</ModalHeader>
            <ModalBody>
              {dish.ingredients.map((i: any) => (
                <DishCard
                  key={i.ingredient.id}
                  ingredient={i}
                  addDish={addDish}
                  dish={dish}
                  onClose={onClose}
                />
              ))}
              <div className="my-4 flex flex-col justify-center space-y-4">
                <Textarea
                  label="Instructions"
                  classNames={{
                    label: 'font-bold',
                    input: 'w-full',
                  }}
                  labelPlacement="outside"
                  // value={instructions}
                  // onValueChange={setInstructions}
                  placeholder="Specify how you want your food to be cooked or served"
                  minRows={3}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
