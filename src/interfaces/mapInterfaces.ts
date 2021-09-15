export interface IMark {
  lat: number,
  lng: number
}

export interface ITown {
  name: string,
  id: string
}

export interface IPickUp {
  name: string,
  cityId: {
    name: string,
    id: string
  }
}

export interface IFnAddMarker {
  (mark: IMark): void
}

export interface IFnSelectTown {
  (town: string): void
}

export interface IFnSelectPickUp {
  (pickUp: string): void
}

export interface IFnSelectCoordinates {
  (coords: IMark): void
}
