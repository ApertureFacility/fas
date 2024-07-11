export interface IWheel {
  id: number;
  typeOfWheel: string;
  diameter: number;
  width: number;
  centralBoreDiameter: number;
  boltSpacing: string;
  weight: number;
  url: string;
  urls: string[];
  inf: string;
  createdDate: string;
  price: number;
}

export interface IWheelController {
  id: number;
  value: string;
}

export interface IWheelProperty {
  diameter: number;
  boltSpacing?: string;
  width?: number;
  centralBoreDiameter?: number;
}
