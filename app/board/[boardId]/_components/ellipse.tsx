import { colorToCss } from "@/lib/utils";
import { CircleLayer } from "@/types/canvas";

interface EllipseProps {
  id: string;
  selectionColor: string;
  onPointerDown: (e: React.PointerEvent, id: string) => void;
  layer: CircleLayer;
}

export const Ellipse = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: EllipseProps) => {
  return (
    <ellipse
      className="drop-shadow-md"
      style={{
        transform: `translate(${layer.x}px, ${layer.y}px )`,
      }}
      cx={layer.width / 2}
      cy={layer.height / 2}
      rx={layer.width / 2}
      ry={layer.height / 2}
      onPointerDown={(e) => onPointerDown(e, id)}
      fill={layer.fill ? colorToCss(layer.fill) : "#000"}
      stroke={selectionColor || 'transparent'}
      strokeWidth={1}
    />
  );
};
