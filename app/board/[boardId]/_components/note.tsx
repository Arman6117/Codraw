import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { Kalam } from "next/font/google";

import { cn, colorToCss, getContrastingTextColor } from "@/lib/utils";
import { NoteLayer, TextLayer } from "@/types/canvas";
import { useMutation } from "@liveblocks/react/suspense";

interface NoteProps {
  id: string;
  selectionColor: string;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  layer: NoteLayer;
}

const font = Kalam({ subsets: ["latin"], weight: ["400"] });
const calculateFontSize = (width: number, height: number) => {
  const max_font_size = 96;
  const scaleFactor = 0.15;
  const fontSizeBasedOnWidth = width * scaleFactor;
  const fontSizeBasedOnHeight = height * scaleFactor;

  return Math.min(fontSizeBasedOnHeight, fontSizeBasedOnWidth, max_font_size);
};
export const Note = ({
  id,
  onPointerDown,
  layer,
  selectionColor,
}: NoteProps) => {
  const { fill, height, width, x, y, value } = layer;

  // console.log(fill)
  const updateTextValue = useMutation(({ storage }, newValue: string) => {
    const liveLayers = storage.get("layers");

    liveLayers.get(id)?.set("value", newValue);
  }, []);

  const handleValueChange = (e: ContentEditableEvent) => {
    updateTextValue(e.target.value);
  };
  return (
    <foreignObject
    x={x}
    y={y}
    width={width}
    height={height}
    onPointerDown={(e) => onPointerDown(e, id)}
    style={{
      outline: selectionColor ? `1px solid ${selectionColor}` : "none",
      backgroundColor: fill ? colorToCss(fill) : "#000",
    }}
    className="shadow-md drop-shadow-xl rounded-md"
      
    >
      <ContentEditable
        html={value || "Text"}
        onChange={handleValueChange}
        className={cn(
          "h-full w-full flex items-center justify-center text-center  outline-none",
          font.className
        )}
        style={{
          fontSize: calculateFontSize(width, height),
          color: fill ? getContrastingTextColor(fill) : "#000",
        }}
      />
    </foreignObject>
  );
};
