export type OptionsType = { id: string, label: string, value: string }

export type FormData = {
    firstName: string;
    lastName: string;
    address: string;
};


export type Show = {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string | null;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number | null;
    };
    weight: number;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: string | null;
    };
    webChannel: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: string | null;
    };
    dvdCountry: string | null;
    externals: {
      tvrage: number;
      thetvdb: number;
      imdb: string;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
        name: string;
      };
    };
};
  
  