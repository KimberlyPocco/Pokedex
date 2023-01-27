
export interface ItemStat{
    base_stat: string,
    stat: {
      name: string,
    }   
  }


  export interface PokemonType {
    name: string;
    sprites: {
      back_default: string;
      front_default: string;
    };
    stats: ItemStat[];
  }