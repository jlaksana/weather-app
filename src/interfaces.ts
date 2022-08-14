export interface ICurrentWeather {
  coord: { lon: number; lat: number };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  rain?: {
    "1h": number;
    "3h": number;
  };
  snow?: {
    "1h": number;
    "3h": number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CurrentProps {
  temperature: number;
  location: string;
  description: string;
  high: number;
  low: number;
  feels: number;
}

export interface SunProps {
  sunrise: number;
  sunset: number;
}

export interface ExtraProps {
  humidity: number;
  wind: number;
  visibility: number;
  rain?: number;
  snow?: number;
}

export interface SearchProps {
  onSearchChange: Function;
}

export interface ICity {
  id: number;
  wikiDataId: string;
  type: string;
  city: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  latitude: number;
  longitude: number;
  population: number;
}

export interface ISearchData {
  value: string;
  label: string;
}
