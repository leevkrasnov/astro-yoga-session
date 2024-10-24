'use client';
import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

interface BusinessConsultationModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function BusinessConsultationModal({
  isOpen,
  setIsOpen,
}: BusinessConsultationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline"></Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] bg-[#f8f4e9] p-0 overflow-hidden">
        <div className="flex">
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-4">
              Бизнес-консультация. Деньги
            </h2>
            <ul className="space-y-2 mb-4">
              {[
                'Способы реализации себя (бизнес/найм/фриланс);',
                'Подходящие сферы для заработка;',
                'Профессии к которым у вас наибольший потенциал;',
                'Натальная карта вашего бизнеса (подбор персонала, хорошие даты для заключения сделок, вкладов, проектов и т.д.);',
                'Все риски;',
                'Приход/потеря денег в прогностике.',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mb-4">
              <p className="font-bold">Стоимость:</p>
              <p>1 час – 5 000₽</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Формат:</p>
              <p>
                консультации проходят в видеоформате, при живом общении (Skype,
                Telegram, WhatsApp, Zoom и т.д. + astrobook (печатный конспект
                основных моментов) + видеоконсультации).
              </p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Для консультации необходимы данные:</p>
              <ul className="list-disc list-inside">
                <li>Год, месяц и дата рождения;</li>
                <li>Город;</li>
                <li>ФИО</li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-[#d3d9cf] text-black hover:bg-[#bfc7bb]">
                ЗАКАЗАТЬ
              </Button>
              <Button
                variant="outline"
                className="border-[#d3d9cf] text-black hover:bg-[#e8efe3]"
              >
                ПОДАРИТЬ СЕРТИФИКАТ
              </Button>
            </div>
          </div>
          <div
            className="w-1/3 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://v0.dev/placeholder.svg?height=400&width=300')",
            }}
          ></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
