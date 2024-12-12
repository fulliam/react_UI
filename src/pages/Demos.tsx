import React, { useRef, /* useState */ } from 'react';
import BaseInputDemo from '@/components/templates/BaseInputDemo';
import PhoneInputDemo from '@/components/templates/PhoneInputDemo';
import PinCodeInputDemo from '@/components/templates/PinCodeInputDemo';
import TextareaDemo from '@/components/templates/TextareaDemo';
import SelectDemo from '@/components/templates/SelectDemo';
import BaseButtonDemo from '@/components/templates/BaseButtonDemo';
import ButtonSelectDemo from '@/components/templates/ButtonSelectDemo';
import RangeSliderDemo from '@/components/templates/RangeSliderDemo';
import SwitchDemo from '@/components/templates/SwitchDemo';
import BaseCheckboxDemo from '@/components/templates/BaseCheckboxDemo';
import TabsDemo from '@/components/templates/TabsDemo';
import TooltipDemo from '@/components/templates/TooltipDemo';
import ModalDemo from '@/components/templates/ModalDemo';
import MenuDemo from '@/components/templates/MenuDemo';
import FileInputDemo from '@/components/templates/FileInputDemo';
import TreeSelectDemo from '@/components/templates/TreeSelectDemo';
import IconsDemo from '@/components/templates/IconsDemo';
import './Demos.scss';

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
    useRef<HTMLDivElement>(null)
    // useRef<HTMLDivElement>(null)
  ];
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const scrollToSection = (index: number) => {
  //   if (index >= 0 && index < sections.length) {
  //     sections[index]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     setCurrentIndex(index);
  //   }
  // };

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
      {/* <div className="scroll-controls">
        <button onClick={() => scrollToSection(currentIndex - 1)}>
          <Chevron />
        </button>
        <button onClick={() => scrollToSection(currentIndex + 1)}>
          <Chevron />
        </button>
      </div> */}
    </div>
  );
};

export default Demos;
