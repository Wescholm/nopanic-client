interface IMenuElementsData {
  readonly id: string,
  readonly subtitle: string,
  value: boolean
}

export interface IMenuElements {
  readonly id: number,
  readonly title: string,
  readonly icon: string,
  data: IMenuElementsData;
}
