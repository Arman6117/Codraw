import { colorToCss } from "@/lib/utils";
import { Colors } from "@/types/canvas";

import React, { useState } from "react";
import { ChromePicker, ColorResult } from "react-color";
// import {ColorPicker as ReactColorPicker} from 'react-pick-color'

const defaultColor: Colors[] = [
  { r: 243, g: 82, b: 35 },
  { r: 255, g: 249, b: 177 },
  { r: 68, g: 202, b: 99 },
  { r: 39, g: 142, b: 237 },
  { r: 155, g: 105, b: 245 },
  { r: 252, g: 142, b: 42 },
  { r: 243, g: 82, b: 35 },
  { r: 23, g: 65, b: 45 },
  { r: 233, g: 55, b: 45 },
  { r: 0, g: 0, b: 0 },
  { r: 255, g: 255, b: 255 },
];
interface ColorPickerProps {
  onChange: (color: Colors) => void;
}
const ColorPicker = ({ onChange }: ColorPickerProps) => {
  const [showPicker, setShowPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState<Colors | null>(null);

  const handleButtonClick = () => {
    setShowPicker(!showPicker);
  };

  const handleColorChange = (color: ColorResult) => {
    const { r, g, b } = color.rgb;
    const newColor = { r, g, b };
    setCurrentColor(newColor);
    onChange(newColor);
  };
  return (
    <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
      {defaultColor.map((color, index) => (
        <ColorButton
          key={index}
          onClick={onChange}
          color={{
            r: color.r,
            g: color.g,
            b: color.b,
          }}
        />
      ))}
      {/* <ColorButton /> */}
      <button
        className="h-8 w-8 flex justify-center items-center hover:opacity-75 transition"
        onClick={handleButtonClick}
      >
        <div className="h-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  w-8 rounded-md border border-neutral-300 " />
      </button>
      {showPicker && (
        <ChromePicker
          color={currentColor || { r: 0, g: 0, b: 0 }}
          onChange={handleColorChange}
        />
      )}
    </div>
  );
};

export default ColorPicker;

interface ColorButtonProps {
  onClick: (color: Colors) => void;
  color: Colors;
}

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      onClick={() => onClick(color)}
      className="h-8 w-8 flex justify-center items-center hover:opacity-75 transition"
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300 "
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
};
