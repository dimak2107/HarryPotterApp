export interface Character {
  id: string;
  type: "character";
  attributes: {
    slug: string;
    name: string;
    born?: string | null;
    died?: string | null;
    gender?: string | null;
    species?: string | null;
    height?: string | null;
    weight?: string | null;
    hair_color?: string | null;
    eye_color?: string | null;
    skin_color?: string | null;
    blood_status?: string | null;
    marital_status?: string | null;
    nationality?: string | null;
    animagus?: string | null;
    boggart?: string | null;
    house?: string | null;
    patronus?: string | null;
    alias_names?: string[];
    family_members?: string[];
    jobs?: string[];
    romances?: string[];
    titles?: string[];
    wands?: string[];
    image?: string | null;
    wiki?: string | null;
  };
  links?: {
    self?: string;
  };
}
