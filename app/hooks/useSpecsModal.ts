import { useState } from "react";

interface SpecsModalData {
  title: string;
  specSheetUrl: string;
}

export function useSpecsModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<SpecsModalData | null>(null);

  const openModal = (data: SpecsModalData) => {
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return {
    isOpen,
    modalData,
    openModal,
    closeModal,
  };
}