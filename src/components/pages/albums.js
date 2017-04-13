import React from 'react'
import './albums.css'
import albumsList from '../helpers/albums-helper'
import artistsObj from '../../data/library/artists'
import albumsObj from '../../data/library/albums'

const Albums = ({ s, c }) => {
	return (
		<div className="albums">
			{albumsList(albumsObj, artistsObj)}
		</div>
	)
}

export default Albums