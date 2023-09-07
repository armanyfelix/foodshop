import { Dish } from '@/types/ingredient'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
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
        body: 'px-0 bg-blue gap-0',
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
            <ModalHeader className="flex flex-col gap-1">Dish</ModalHeader>
            <ModalBody>
              {dish.ingredients.map((i: any) => (
                <DishCard key={i.ingredient.id} ingredient={i} addDish={addDish} dish={dish} />
              ))}
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
