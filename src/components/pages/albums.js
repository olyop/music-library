import React from 'react'
import renderAlbums from '../helpers/albums-helper'
import artistsObj from '../../data/library/artists'
import albumsObj from '../../data/library/albums'
import './albums.css'

const Albums = () => {
	return (
		<div className="albums">
			{renderAlbums(albumsObj, artistsObj)}
		</div>
	)
}

export default Albums