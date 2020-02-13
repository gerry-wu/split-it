import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/core'
import ExpenseForm from './ExpenseForm'

const ExpenseModalControl = ({ members }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ExpenseForm members={members} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ExpenseModalControl
