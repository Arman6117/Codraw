import { Camera, Colors } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const COLORS = [
  "#FC0088",
  "#00FC16",
  "#FF0000 ",
  "#C70039",
  "#FF6200 ",
  "#00E7FF ",
  "#DB2777 ",
  "#7C3AED ",
];

export const connectionIdToColor = (connectionId: number): string => {
  return COLORS[connectionId % COLORS.length];
};

export function pointerEventToCanvasPoint(
  camera: Camera,
  e: React.PointerEvent
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}

export const colorToCss = (color: Colors) => {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
};
