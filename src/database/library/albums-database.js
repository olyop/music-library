const albumsObj = [
	{
		albumId: 'odmcBazMPq',
		title: 'Thriller',
		artistId: 'XdrLEXDjcg',
		cover: './img/album-covers/thriller.png',
		year: '1982',
		numSongs: 0
	},
	{
		albumId: 'NjYszVkmaJ',
		title: 'Discovery',
		artistId: 'SOZjaEUpRd',
		cover: './img/album-covers/discovery.jpg',
		year: '2005',
		numSongs: 0
	},
	{
		albumId: 'etJPmFmiKA',
		title: 'Is This It',
		artistId: 'pNTLYUjNZF',
		cover: './img/album-covers/is-this-it.png',
		year: '2001',
		numSongs: 0
	},
	{
		albumId: 'FKdZgQFVxW',
		title: 'Viva La Vida or Death and All His Friends',
		artistId: 'vXVrojTDxG',
		cover: './img/album-covers/viva-la-vida-or-death-and-all-his-friends.jpg',
		year: '2008',
		numSongs: 0
	},
	{
		albumId: 'ZMQgTooNsv',
		title: 'Land Of Pleasure',
		artistId: 'FzXuUrKixn',
		cover: './img/album-covers/land-of-pleasure.jpg',
		year: '2014',
		numSongs: 0
	},
	{
		albumId: 'hbrjTgUNIF',
		title: 'Westway (The Glitter & The Slums)',
		artistId: 'FzXuUrKixn',
		cover: './img/album-covers/westway.png',
		year: '2016',
		numSongs: 0
	},
	{
		albumId: 'bYKlDtYZcZ',
		title: 'Angles',
		artistId: 'pNTLYUjNZF',
		cover: './img/album-covers/angles.png',
		year: '2011',
		numSongs: 0
	},
	{
		albumId: 'ejbbffyLdl',
		title: 'Caress Your Soul',
		artistId: 'FzXuUrKixn',
		cover: './img/album-covers/caress-your-soul.png',
		year: '2013',
		numSongs: 0
	},
	{
		albumId: 'RvhvYovLBd',
		title: 'First Impressions Of Earth',
		artistId: 'pNTLYUjNZF',
		cover: './img/album-covers/first-impressions-of-earth.png',
		year: '2006',
		numSongs: 0
	},
	{
		albumId: 'zCIYLZXkzV',
		title: 'Currents',
		artistId: 'wWFxPUmbGR',
		cover: './img/album-covers/currents.png',
		year: '2015',
		numSongs: 0
	},
	{
		albumId: 'kGfjAZnfBZ',
		title: 'Room On Fire',
		artistId: 'pNTLYUjNZF',
		cover: './img/album-covers/room-on-fire.png',
		year: '2003',
		numSongs: 0
	},
	{
		albumId: 'WQySnJSygA',
		title: 'The 2nd Law',
		artistId: 'dabbJRfVRz',
		cover: './img/album-covers/the-2nd-law.png',
		year: '2012',
		numSongs: 0
	},
	{
		albumId: 'MOMFuSILLj',
		title: 'Origin Of Symmetry',
		artistId: 'dabbJRfVRz',
		cover: './img/album-covers/origin-of-symmetry.jpg',
		year: '2001',
		numSongs: 0
	},
	{
		albumId: 'GWcSYkKrDr',
		title: 'Drones',
		artistId: 'dabbJRfVRz',
		cover: './img/album-covers/drones.png',
		year: '2015',
		numSongs: 0
	},
	{
		albumId: 'ujYuGCHrQo',
		title: 'Safe And Sound',
		artistId: 'QwdQloRayC',
		cover: './img/album-covers/safe-and-sound.jpg',
		year: '2011',
		numSongs: 0
	},
	{
		albumId: 'AFqhgiksll',
		title: 'Get Lucky',
		artistId: 'SOZjaEUpRd',
		cover: './img/album-covers/get-lucky.jpg',
		year: '2013',
		numSongs: 0
	},
	{
		albumId: 'AtXEgAepiX',
		title: 'American Idiot',
		artistId: 'hWsdgNnVnP',
		cover: './img/album-covers/american-idiot.jpg',
		year: '2004',
		numSongs: 0
	},
	{
		albumId: 'ijGKzQdxFy',
		title: 'Oracular Spectacular',
		artistId: 'ynIPFMoDAv',
		cover: './img/album-covers/oracular-spectacular.jpg',
		year: '2007',
		numSongs: 0
	},
	{
		albumId: 'fyaEwIQyxc',
		title: 'The Black Parade',
		artistId: 'WZgUeiVzyg',
		cover: './img/album-covers/the-black-parade.jpg',
		year: '2006',
		numSongs: 0
	},
	{
		albumId: 'zSEtOQIPDD',
		title: 'Future Present Past',
		artistId: 'pNTLYUjNZF',
		cover: './img/album-covers/future-present-past.jpg',
		year: '2016',
		numSongs: 0
	},
	{
		albumId: 'MXnthPzSmU',
		title: 'The Resistance',
		artistId: 'dabbJRfVRz',
		cover: './img/album-covers/the-resistance.jpg',
		year: '2009',
		numSongs: 0
	},
	{
		albumId: 'aMGXyQrulD',
		title: 'Black Holes and Revelations',
		artistId: 'dabbJRfVRz',
		cover: './img/album-covers/black-holes-and-revelations.jpg',
		year: '2006',
		numSongs: 0
	},
	{
		albumId: 'kLXQGwIfSU',
		title: 'Lonerism',
		artistId: 'wWFxPUmbGR',
		cover: './img/album-covers/lonerism.jpeg',
		year: '2012',
		numSongs: 0
	},
	{
		albumId: 'YrOrVGqhbO',
		title: 'The Wall',
		artistId: 'iMOIvXTGmX',
		cover: './img/album-covers/the-wall.jpg',
		year: '1979',
		numSongs: 0
	},
	{
		albumId: 'HmcKPRNjcZ',
		title: 'The Dark Side of the Moon',
		artistId: 'iMOIvXTGmX',
		cover: './img/album-covers/the-dark-side-of-the-moon.jpg',
		year: '1973',
		numSongs: 0
	},
  {
		albumId: 'IOJdoPSjDy',
		title: 'Animals',
		artistId: 'iMOIvXTGmX',
		cover: './img/album-covers/animals.jpg',
		year: '1977',
		numSongs: 0
	},
	{
		albumId: 'UFioAfFHTD',
		title: 'A Rush Of Blood To The Head',
		artistId: 'vXVrojTDxG',
		cover: './img/album-covers/a-rush-of-blood-to-the-head.jpg',
		year: '2002',
		numSongs: 0
	}
];

export default albumsObj