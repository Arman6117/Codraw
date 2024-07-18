export type Colors = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export type RectangleLayer = {
  type: LayerType.Rectangle;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Colors;
  value?: string;
};
export type CircleLayer = {
  type: LayerType.Circle;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Colors;
  value?: string;
};
export type TextLayer = {
  type: LayerType.Text;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Colors;
  value?: string;
};
export type PathLayer = {
  type: LayerType.Path;
  x: number;
  y: number;
  height: number;
  width: number;
  points: number[][];
  fill: Colors;
  value?: string;
};
export type NoteLayer = {
  type: LayerType.Path;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Colors;
  value?: string;
};

export type Point = {
  x: number;
  y: number;
};

export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
};
export type CanvasState =
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.SelectionNet;
      origin: Point;
      current?: Point;
    }
  | {
      mode: CanvasMode.Inserting;
      layerType:
        | LayerType.Circle
        | LayerType.Note
        | LayerType.Rectangle
        | LayerType.Text;
    }
  | {
      mode: CanvasMode.Resizing;
      initialBounds:XYWH
      corner:Side
    }
  | {
      mode: CanvasMode.Pressing;
      origin:Point
    }
  | {
      mode: CanvasMode.Translating;
      current: Point;
    }
  | {
      mode: CanvasMode.Note;
    }
  | {
      mode: CanvasMode.Pencil;
    };

export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}
export enum LayerType {
  Rectangle,
  Circle,
  Text,
  Path,
  Note,
}
export enum CanvasMode {
  None,
  SelectionNet,
  Note,
  Inserting,
  Pencil,
  Pressing,
  Translating,
  Resizing,
}