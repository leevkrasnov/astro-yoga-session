'use client';

import AstroYogaSection from '../components/astro-yoga-section';
import BusinessConsultationModal from '../components/business-consultation-modal';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <AstroYogaSection />
      <BusinessConsultationModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
