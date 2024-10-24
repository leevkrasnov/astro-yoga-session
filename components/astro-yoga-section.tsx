'use client';

import { useState } from 'react';
import type { NextPage } from 'next';
import RetreatPrices from './retreat-prices';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export type AstroYogaSectionType = {
  className?: string;
};

const AstroYogaSection: NextPage<AstroYogaSectionType> = ({
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/1-2@2x.png',
    '/2-2@2x.png',
    '/3-2@2x.png',
    '/4-1@2x.png',
    '/5-1@2x.png',
    '/6-1@2x.png',
    '/7-1@2x.png',
    '/8@2x.png',
    '/image-collection@2x.png',
    '/10@2x.png',
    '/image-collection1@2x.png',
    '/image-collection2@2x.png',
    '/image-collection3@2x.png',
    '/image-collection4@2x.png',
    '/image-collection5@2x.png',
    '/image-collection6@2x.png',
    '/image-collection7@2x.png',
    '/image-collection8@2x.png',
    '/image-collection9@2x.png',
    '/image-collection10@2x.png',
    '/image-collection11@2x.png',
    '/image-collection12@2x.png',
    '/image-collection13@2x.png',
    '/image-collection14@2x.png',
    '/image-collection15@2x.png',
    '/image-collection16@2x.png',
  ];

  const visibleImagesCount = 9;
  const imageWidth = 100.5; // Adjusted image width in px
  const gapWidth = 24; // Gap between images in px
  const maxIndex = images.length - visibleImagesCount;

  const moveGallery = (direction: 'left' | 'right') => {
    setCurrentIndex((prev) => {
      if (direction === 'left') {
        return Math.max(prev - 1, 0);
      } else {
        return Math.min(prev + 1, maxIndex);
      }
    });
  };

  return (
    <section
      /*  Заметки : px-6 md:px-10 lg:px-20. Эти отступы решили проблему
       */
      className={`self-stretch bg-[#D5DABD] bg-beige-100 flex flex-col items-start justify-start py-10 px-6 md:px-10 lg:px-20 box-border gap-6 max-w-full text-left text-4xl text-dimgray-100 font-playfair-display ${className} `}
      data-scroll-to="astroYogaSection"
    >
      <h1 className="m-0 tracking-wide font-normal">Йога-ретриты</h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-6 max-w-full text-base text-black font-ibm-plex-sans">
        <div className="self-stretch flex flex-row items-center justify-start max-w-full text-xl font-playfair-display">
          <div className="flex-1">Индивидуальный ретрит-тур</div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start max-w-full text-dimgray-300">
          <div className="flex-1">
            Если вы хотите остановиться и перезагрузиться, улучшить своё
            душевное и духовное состояние, найти ответы, уйти в проработки,
            просто отдохнуть, сделать глубокий самоанализ под руководством
            мастеров с использованием духовных практик — присоединяйтесь к НАМ.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-6 gap-y-16 text-center text-xl">
          <RetreatPrices
            priceDetails="/1-1@2x.png"
            prop="170 000 ₽"
            prop1="(всё включено)"
            prop2="«Перезагрузка на Шри-Ланке»"
            pdfFileName="shrilanka.pdf"
          />
          <RetreatPrices
            priceDetails="/2-1@2x.png"
            prop="70 000 ₽"
            prop1="+ авиабилет и виза"
            prop2="«Индия»"
            pdfFileName="india.pdf"
          />
          <RetreatPrices
            priceDetails="/3-1@2x.png"
            prop="70 000 ₽"
            prop1="+ авиабилет и виза"
            prop2="«Абхазия»"
            pdfFileName="abkhazia.pdf"
          />
        </div>

        <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[300px]">
            <div className="self-stretch">
              <span className="font-medium">Главная цель:</span>
              <span className="text-dimgray-300">
                {' '}
                очистить сознание, физическое тело, посредством глубокого
                самоанализа, что приводит к духовному, ментальному и физическому
                восстановлению.
              </span>
            </div>
            <div className="self-stretch text-dimgray-300">
              <p className="m-0">
                <span className="font-medium">✓</span> Место cилы (вдали от
                социума);
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Йога;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Медитации;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Нейрографика;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Западная астрология;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Вегетарианское питание;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Удаленное место;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Здоровый образ жизни;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Практики;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Путешествие по острову;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Посещение храмов и
                заповедников;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Цигун;
              </p>
              <p className="m-0">
                <span className="font-medium">✓</span> Каждый выбирает свою цель
                и свой тип ретрита (духовный, творческий, биохакинг).
              </p>
            </div>
            <p className="m-0 self-stretch uppercase font-bold">
              Заезд в удобные для вас даты!!!
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-14 gap-5 max-w-full">
          <button
            onClick={() => moveGallery('left')}
            className="cursor-pointer bg-transparent border-none p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (imageWidth + gapWidth)
                }px)`,
              }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  className="h-auto w-[100.5px] flex-shrink-0 object-cover mr-6 last:mr-0"
                  loading="lazy"
                  alt={`Gallery image ${index + 1}`}
                  src={src}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => moveGallery('right')}
            className="cursor-pointer bg-transparent border-none p-2"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="self-stretch flex flex-col items-start justify-between py-1 min-h-[62px]">
          <button className="cursor-pointer border-none py-5 px-9 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 shadow-md rounded-full flex items-center justify-center">
            <div className="text-sm uppercase font-medium text-black text-center">
              Узнать подробнее
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AstroYogaSection;
