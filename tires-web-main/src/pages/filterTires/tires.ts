export interface ITires {
  premium: ICheck[];
  medium: ICheck[];
  cheap: ICheck[];
}

interface ICheck {
  name: string;
  checked: boolean;
}

export const tires: ITires = {
  premium: [
    { name: 'Bridgestone', checked: false },
    { name: 'Continental', checked: false },
    { name: 'Dunlop', checked: false },
    { name: 'Goodyear', checked: false },
    { name: 'Michelin', checked: false },
    { name: 'Nokian Tyres', checked: false },
    { name: 'Pirelli', checked: false },
    { name: 'Vredestein', checked: false },
    { name: 'Yokohama', checked: false },
  ],

  medium: [
    { name: 'Falken', checked: false },
    { name: 'Firestone', checked: false },
    { name: 'Fulda', checked: false },
    { name: 'Hankook', checked: false },
    { name: 'Kleber', checked: false },
    { name: 'Kumho', checked: false },
    { name: 'Nexen', checked: false },
    { name: 'Uniroyal', checked: false },
    { name: 'Zeetex', checked: false },
  ],

  cheap: [
    { name: 'Barum', checked: false },
    { name: 'Compasal', checked: false },
    { name: 'Dębica', checked: false },
    { name: 'Firemax', checked: false },
    { name: 'Imperial', checked: false },
    { name: 'Kormoran', checked: false },
    { name: 'Laufenn', checked: false },
    { name: 'Mazzini', checked: false },
    { name: 'Nankang', checked: false },
  ],
};
