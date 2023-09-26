'use client';

import usePrevieweModal from '@/hook/use-preview-modal';
import Modal from './ui/modal';
import Gallery from './gallery';
import Info from './info';

const PreviewModal = () => {
  const previeModal = usePrevieweModal();
  const product = usePrevieweModal((state) => state.data);

  console.log(product, '상품');

  if (!product) {
    return null;
  }

  return (
    <Modal open={previeModal.isOpen} onClose={previeModal.onClose}>
      <div className=" grid w-full grid-cols-1 items-start gap-x-6 gap-y-6 sm:grid-cols-12 lg:gap-x-8">
        <div className=" sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className=" sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
