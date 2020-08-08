export interface IMenuElements {
  readonly id: number,
  readonly title: string,
  readonly icon: string,
  data: IMenuElementsData;
}

export interface ICitiesList {
  readonly id: number,
  readonly cityName: string,
  readonly englishName: string,
  readonly russianName: string,
}

interface IMenuElementsData {
  readonly id: number,
  readonly subtitle: string,
  value: boolean
}
