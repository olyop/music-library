const calcLibraryData = obj => {
	
	// Find num of songs and albums each artist has
	for (let a = 0; a < obj.length.artists; a++) {
		
		const artist = obj.artists[a]
		
		for (let b = 0; b < obj.length.songs; b++) {
			if (obj.songs[b].artistId === artist.artistId) {
				obj.artists[a].numSongs++
			}
		}

		for (let c = 0; c < obj.length.albums; c++) {
			if (obj.albums[c].artistId === artist.artistId) {
				obj.artists[a].numAlbums++
			}
		}
	}
	
	// Find num of songs in each album
	for (let d = 0; d < obj.length.albums; d++) {
		
		const album = obj.albums[d]
		
		for (let e = 0; e < obj.length.songs; e++) {
			if (obj.songs[e].albumId === album.albumId) {
				obj.albums[d].numSongs++
			}
		}
	}
	
	return obj
}

export { calcLibraryData }