import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  let isWhiteish = true;

  while (isWhiteish) {
      color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      
     
      const r = parseInt(color.substring(1, 3), 16);
      const g = parseInt(color.substring(3, 5), 16);
      const b = parseInt(color.substring(5, 7), 16);

    
      if (r < 200 || g < 200 || b < 200) {
          isWhiteish = false;
      }
  }
  
  return color;
}

function generateRandomColors(numColors: number) {
  const colorsArray = [];
  for (let i = 0; i < numColors; i++) {
    colorsArray.push(getRandomColor());
  }
  return colorsArray;
}

export const connectionIdToColor = (connectionId: number): string => {
  const COLORS = generateRandomColors(10);
  return COLORS[connectionId % COLORS.length];
};
