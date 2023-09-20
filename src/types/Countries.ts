export interface Country {
  name: {
    common: string;
    official: string;
  };
  tld: string[];
  currencies: {
    USD: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  subregion: string;
  languages: {
    eng: string;
    nld: string;
    pap: string;
  };
  population: 25987;
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
}
