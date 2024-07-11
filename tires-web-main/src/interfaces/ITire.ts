export interface ITire {
  id: number;
  typeOfTire: string;
  icVc: string;
  diameter: number;
  width: number;
  profile: number;
  manufacturer: string;
  season: string;
  url: string;
  urls: string[];
  inf: string;
}

export interface ITiresProperty {
  id?: string;
  width: number;
  profile: number;
  diameter: number;
  manufacturer?: string;
  season?: string;
  priceFrom: number;
  priceTo: number;
}
