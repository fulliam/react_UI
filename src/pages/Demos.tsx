import React, { useRef, useState } from 'react';
import BaseInputDemo from '@/views/Demos/BaseInputDemo';
import PhoneInputDemo from '@/views/Demos/PhoneInputDemo';
import PinCodeInputDemo from '@/views/Demos/PinCodeInputDemo';
import TextareaDemo from '@/views/Demos/TextareaDemo';
import SelectDemo from '@/views/Demos/SelectDemo';
import BaseButtonDemo from '@/views/Demos/BaseButtonDemo';
import ButtonSelectDemo from '@/views/Demos/ButtonSelectDemo';
import RangeSliderDemo from '@/views/Demos/RangeSliderDemo';
import SwitchDemo from '@/views/Demos/SwitchDemo';
import BaseCheckboxDemo from '@/views/Demos/BaseCheckboxDemo';
import TabsDemo from '@/views/Demos/TabsDemo';
import TooltipDemo from '@/views/Demos/TooltipDemo';
import ModalDemo from '@/views/Demos/ModalDemo';
import MenuDemo from '@/views/Demos/MenuDemo';
import FileInputDemo from '@/views/Demos/FileInputDemo';
import TreeSelectDemo from '@/views/Demos/TreeSelectDemo';
import IconsDemo from '@/views/Demos/IconsDemo';
import './Demos.scss';
import Chevron from '@/assets/icons/Chevron';

const Demos: React.FC = () => {
  const sections = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    // useRef<HTMLDivElement>(null)
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      sections[index]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="page">
      {sections.map((ref, index) => (
        <div ref={ref} className="page-section" key={index}>
          {index === 0 && <BaseInputDemo />}
          {index === 1 && <PhoneInputDemo />}
          {index === 2 && <PinCodeInputDemo />}
          {index === 3 && <TextareaDemo />}
          {index === 4 && <SelectDemo />}
          {index === 5 && <BaseButtonDemo />}
          {index === 6 && <ButtonSelectDemo />}
          {index === 7 && <RangeSliderDemo />}
          {index === 8 && <SwitchDemo />}
          {index === 9 && <BaseCheckboxDemo />}
          {index === 10 && <TreeSelectDemo />}
          {index === 11 && <TabsDemo />}
          {index === 12 && <TooltipDemo />}
          {index === 13 && <ModalDemo />}
          {index === 14 && <MenuDemo />}
          {index === 15 && <FileInputDemo />}
          {index === 16 && <IconsDemo />}
        </div>
      ))}
      <div className="scroll-controls">
        <button onClick={() => scrollToSection(currentIndex - 1)}>
          <Chevron />
        </button>
        <button onClick={() => scrollToSection(currentIndex + 1)}>
          <Chevron />
        </button>
      </div>
    </div>
  );
};

export default Demos;
