let artists = [
    {
      name: "Michael Jackson",
      songs: ["Beat It", "Thriller", "Smooth Criminal"]
    },
    {
      name: "Kairat Nurtas",
      songs: ["Qasiet", "Asyl Arman", "Sulu"]
    },
    {
      name: "Billie Eilish",
      songs: ["Bad Guy", "Bury a Friend", "Everything I Wanted", "Ocean Eyes"]
    }
];
  
artists[1].songs[1] = "Baika"; 

let firstArtist = artists[0];
let lastSong = firstArtist.songs[firstArtist.songs.length - 1]; 
console.log(firstArtist.name +"'s last song: " + lastSong);

  
  