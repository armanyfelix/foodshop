'use client'

import {
  Button,
  Card,
  CardBody,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from '@nextui-org/react'
import { useMemo, useState } from 'react'
import IngredientCard from './IngredientCard'

interface Calorie {
  name: string
  img: string
  types: any
}

export default function Create() {
  const list = [
    {
      name: 'Bread',
      img: 'bread.jpg',
      types: [
        {
          name: 'Burger',
          description: 'This is a burger',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'White',
          description: 'This is a white bread',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Multigram',
          description: 'This is a multigram bread',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Bagel',
          description: 'This is a bagel',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Baguette',
          description: 'This is a baguette',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
      ],
    },
    {
      name: 'Rice',
      img: 'rice.jpg',
      types: [
        {
          name: 'White',
          description: 'This is a white rice',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Integral',
          description: 'This is a integral rice',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Fried',
          description: 'This is a fried rice',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
      ],
    },
    {
      name: 'Tortillas',
      img: 'tortillas.jpg',
      types: [
        {
          name: 'Corn',
          description: 'This is a corn tortillas',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Corn yellow',
          description: 'This is a corn yellow tortillas',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'flour',
          description: 'This is a flour tortillas',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'nopal',
          description: 'This is a nopal tortillas',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
      ],
    },
    {
      name: 'Salad',
      img: 'salad.jpg',
      types: [
        {
          name: 'lettuce',
          description: 'This is a lettuce salad',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Cabbage',
          description: 'This is a cabbage salad',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Potato',
          description: 'This is a potato salad',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Mix',
          description: 'This is a mix salad',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
      ],
    },
    {
      name: 'Pasta',
      img: 'pasta.jpg',
      types: [
        {
          name: 'Spaghetti',
          description: 'This is a spaghetti',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Chow Mein',
          description: 'This is a chow mein',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Soba',
          description: 'This is a soba',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Rice',
          description: 'This is a rice',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Penne',
          description: 'This is a penne',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Macaroni',
          description: 'This is a macaroni',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Fettuccine',
          description: 'This is a fettuccine',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
      ],
    },
    {
      name: 'Soup',
      img: 'soup.jpg',
      types: [
        {
          name: 'Chicken',
          description: 'This is a chicken soup',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Beef',
          description: 'This is a beef soup',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Shrimp',
          description: 'This is a vegetable soup',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Tomato',
          description: 'This is a tomato soup',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Ramen',
          description: 'This is a ramen soup',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Miso',
          description: 'This is a miso soup',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Udon',
          description: 'This is a udon soup',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Tortilla',
          description: 'This is a tortilla soup',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
        {
          name: 'Cheese',
          description: 'This is a cheese soup',
          calorie: '100',
          protein: '20',
          fat: '10',
          price: '$5.00',
        },
      ],
    },
  ]

  const [order, setOrder] = useState<any>()
  const [calorie, setCalorie] = useState<Calorie>()
  const [type, setType] = useState<any>()
  // const [protein, setProtein] = useState<Object>()
  // const [fat, setFat] = useState<Object>()
  // const [vegetables, setVegetables] = useState<Object<{
  //   name: string
  //   description: string
  // }>>()
  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(['']))

  const { isOpen, onOpen, onClose } = useDisclosure()

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  )

  const handleOpen = (item: any) => {
    setSelectedKeys(new Set(['']))
    setCalorie(item)
    onOpen()
  }

  return (
    <div className="p-6">
      <Tabs aria-label="Options" className="w-full justify-center">
        <Tab key="calorie" title="Calorie">
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {list.map((item, index) => (
              <IngredientCard key={index} item={item} handleOpen={handleOpen} />
            ))}
            <Modal
              size="full"
              isOpen={isOpen}
              onClose={onClose}
              classNames={{
                closeButton: 'bg-black',
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader
                      className={`flex h-[240px] flex-col gap-1 bg-cover text-xl`}
                      style={{ backgroundImage: `url(/images/${calorie?.img})` }}
                    >
                      {calorie?.name}
                      {/* <Image
                          shadow="sm"
                          // radius="lg"
                          width="100%"
                          alt={carbs?.title}
                          className="object-cov h-[240px] w-full"
                          src={carbs?.img}
                        /> */}
                    </ModalHeader>
                    <ModalBody className="pt-6">
                      <Dropdown
                        showArrow
                        classNames={{
                          base: 'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
                          arrow: 'bg-default-200',
                        }}
                      >
                        <DropdownTrigger>
                          <Button variant="bordered">
                            {!selectedValue
                              ? `Select a type of ${calorie?.name?.toLowerCase()}`
                              : selectedValue}
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          variant="faded"
                          selectionMode="single"
                          selectedKeys={selectedKeys}
                          onSelectionChange={setSelectedKeys}
                          aria-label="Dropdown menu with description"
                        >
                          <DropdownSection title={calorie?.name}>
                            {calorie?.types?.map((t: any) => (
                              <DropdownItem
                                key={t.name}
                                onClick={() => setType(t)}
                                description={t.description}
                                // startContent={
                                //   <CheckCircleIcon className={iconClasses} />
                                // }
                              >
                                {t.name}
                              </DropdownItem>
                            ))}
                          </DropdownSection>
                        </DropdownMenu>
                      </Dropdown>
                      {type && (
                        <div className="p-2">
                          <div className="mb-4">
                            <p>{type.description}</p>
                            {/* <h1 className="text-2xl">{type.price}</h1> */}
                          </div>
                          <Divider />
                          {/* <h3 className="mt-4">Nutrition</h3> */}
                          <div className="mt-4 flex h-full flex-col justify-center space-y-4">
                            <p>
                              <b>Calorie:</b> {type.calorie}
                            </p>
                            <p>
                              <b>Protein:</b> {type.protein}
                            </p>
                            <p>
                              <b>Fat:</b> {type.fat}
                            </p>
                          </div>
                          <div className="mx-auto flex w-64 items-center justify-between rounded-full bg-zinc-600">
                            <button className="h-14 w-14 rounded-full text-2xl ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800">
                              -
                            </button>
                            <span>5</span>
                            <button className="h-14 w-14 rounded-full text-2xl ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800">
                              +
                            </button>
                          </div>
                        </div>
                      )}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onClick={onClose}>
                        Cancel
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Add
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </Tab>
        <Tab key="protein" title="Protein">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="fat" title="Fat">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="vegetables" title="Vegetables">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  )
}
