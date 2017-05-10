const calcLibraryData = obj => {
	
	// Find the numb of songs and albums each artist has
	for (let a = 0; a < obj.length.artists; a++) {
		
		const artist = obj.artists[a]
		
		// Find num of songs
		for (let b = 0; b < obj.length.songs; b++) {
			if (artist.artistId === obj.songs[b].artistId) {
				obj.artists[a].numSongs++
			}
		}
		
		// Find num of albums
		for (let c = 0; c < obj.length.albums; c++) {
			if (artist.artistId === obj.albums[c].artistId) {
				obj.artists[a].numAlbums++
			}
		}
	}
	
	// Find num of songs in each album
	for (let d = 0; d < obj.length.albums; d++) {
		for (let e = 0; e < obj.length.songs; e++) {
			if (obj.songs[e].albumId === obj.albums[d].albumId) {
				obj.albums[d].numSongs++
			}
		}
		for (let g = 0; g < obj.length.artists; g++) {
			if (obj.artists[g].artistId === obj.albums[d].artistId) {
				obj.albums[d].artistName = obj.artists[g].title
				break
			}
		}
	}
	
	// Find album and artist name for each song
	for (let h = 0; h < obj.length.songs; h++) {
		
		const song = obj.songs[h]
		
		// Find song album
		for (let i = 0; i < obj.length.albums; i++) {
			if (song.albumId === obj.albums[i].albumId) {
				obj.songs[h].albumName = obj.albums[i].title
				obj.songs[h].albumCover = obj.albums[i].cover
				break
			}
		}
		
		// Find song artist
		for (let j = 0; j < obj.length.artists; j++) {
			if (song.artistId === obj.artists[j].artistId) {
				obj.songs[h].artistName = obj.artists[j].title
				break
			}
		}
	}
	
	return obj
}

export { calcLibraryData }