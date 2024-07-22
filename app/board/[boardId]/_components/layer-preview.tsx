"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";
import Rectangle from "./rectangle";
import { Ellipse } from "./ellipse";

interface LayerPreviewProps {
  layerId: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor: string;
}
export const LayerPreview = memo(
  ({ layerId, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(layerId));

    if (!layer) return null;

    switch (layer.type) {
      case LayerType.Circle :
        return(
          <Ellipse
            id={layerId}
            selectionColor={selectionColor}
            onPointerDown={onLayerPointerDown}
            layer={layer}
          />
        )
      case LayerType.Rectangle:
      
        return (
          <Rectangle
            id={layerId}
            selectionColor={selectionColor}
            onPointerDown={onLayerPointerDown}
            layer={layer}
          />
        );

      default:
        console.warn("Unknown layer type");
    }
  }
);

LayerPreview.displayName = "LayerPreview";
