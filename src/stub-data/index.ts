import { Album } from "src/models";

export const albums: Album[] = [
    { 
      title: "Bohemian Rhapsody",
      artist: "Queen",
      albumArt: require('../resources/img/bohemian_rhapsody.png')
    },
    { 
      title: "Dark Side of the Moon",
      artist: "Pink Floyd",
      albumArt: require('../resources/img/dark_side_of_the_moon.png')
    },
    { 
      title: "Head Full Of Dreams",
      artist: "Coldplay",
      albumArt: require('../resources/img/head_full_of_dreams.png')
    }
];