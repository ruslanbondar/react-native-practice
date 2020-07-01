import React from 'react';
import { Modal, Button } from 'react-native';

export const AddModal = ({ open, setOpen }) => {
  return (
    <Modal animationType="fade" visible={open} transparent={true}>
      <Button onPress={setOpen(false)}></Button>
    </Modal>
  );
};
