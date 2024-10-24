import type { NextPage } from 'next';
import Image from 'next/image';
import BusinessConsultationModal from './business-consultation-modal';
import { useState } from 'react';

export type RetreatPricesType = {
  className?: string;
  priceDetails?: string;
  prop?: string;
  prop1?: string;
  prop2?: string;
  pdfFileName?: string;
};

const RetreatPrices: NextPage<RetreatPricesType> = ({
  className = '',
  priceDetails,
  prop,
  prop1,
  prop2,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProgramClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div
      className={`flex flex-col items-center justify-between gap-3 w-full max-w-sm mx-auto text-center text-black font-ibm-plex-sans ${className}`}
    >
      {/* Заметки : добавил размеры изображений для разных дисплеев*/}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[3/4] rounded-xl overflow-hidden">
        <Image
          src={priceDetails || '/placeholder.svg'}
          alt=""
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="w-full space-y-1">
        <p className="text-xl lg:text-2xl">{prop}</p>
        <p className="text-xl lg:text-2xl">{prop1}</p>
      </div>
      <div onClick={handleProgramClick} className="w-full cursor-pointer">
        <div className="inline-block rounded-full bg-oldlace px-4 py-2 text-sm bg-[#F6F1DF] uppercase">
          <p className="m-0">программа ретрита</p>
          <p className="m-0">{prop2}</p>
        </div>
      </div>
      {isModalOpen && (
        <BusinessConsultationModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default RetreatPrices;
