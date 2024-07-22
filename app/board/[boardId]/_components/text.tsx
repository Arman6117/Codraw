import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { Kalam } from "next/font/google";

import { cn, colorToCss } from "@/lib/utils";
import { TextLayer } from "@/types/canvas";
import { useMutation } from "@liveblocks/react/suspense";

interface TextProps {
  id: string;
  selectionColor: string;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  layer: TextLayer;
}

const font = Kalam({ subsets: ["latin"], weight: ["400"] });
const calculateFontSize = (width: number, height: number) => {
  const max_font_size = 96;
  const scaleFactor = 0.5;
  const fontSizeBasedOnWidth = width * scaleFactor;
  const fontSizeBasedOnHeight = height * scaleFactor;

  return Math.min(fontSizeBasedOnHeight, fontSizeBasedOnWidth, max_font_size);
};
export const Text = ({
  id,
  onPointerDown,
  layer,
  selectionColor,
}: TextProps) => {
  const { fill, height, width, x, y, value } = layer;

  const updateTextValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");

    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleValueChange = (e: ContentEditableEvent) => {
    updateTextValue(e.target.value);
  };
  return (
    <foreignObject
      className=""
      x={x}
      y={y}
      width={width}
      height={height}
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{
        outline: selectionColor ? `1px solid ${selectionColor}` : "none",
      }}
    >
      <ContentEditable
        html={value || "Text"}
        onChange={handleValueChange}
        className={cn(
          "h-full w-full flex items-center justify-center text-center drop-shadow-md outline-none",
          font.className
        )}
        style={{
          fontSize: calculateFontSize(width, height),
          color: fill ? colorToCss(fill) : "#000",
        }}
      />
    </foreignObject>
  );
};
