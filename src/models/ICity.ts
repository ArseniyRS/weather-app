interface ICoord {
    lon: number,
    lat: number
}

export interface ICity {
    id: number,
    country: string,
    name: string;
    state: string;
    coord: ICoord;
}