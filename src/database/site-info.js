const siteInfo = {
	header: {
		title: 'Music Library',
		searchPlaceholder: 'Search...'
	},
	sideBar: {
		heading: {
			pages: 'Pages',
			playlists: 'Playlists'
		}
	},
  home: {
    splashImgLink: 'home-splash-media/splash-page-3.jpg'
  },
	colors: {
		p: {
			a: '#E8EAF6',
			b: '#C5CAE9',
			c: '#9FA8DA',
			d: '#7986CB',
			e: '#5C6BC0',
			f: '#3F51B5', // 500
			g: '#3949AB',
			h: '#303F9F',
			i: '#283593',
			j: '#1A237E'
		},
		s: {
			a: '#ECEFF1',
			b: '#CFD8DC',
			c: '#B0BEC5',
			d: '#90A4AE',
			e: '#78909C',
			f: '#607D8B', // 500
			g: '#546E7A',
			h: '#455A64',
			i: '#37474F',
			j: '#263238'
		},
		h: {
			a: '#FCE4EC',
			b: '#F8BBD0',
			c: '#F48FB1',
			d: '#F06292',
			e: '#EC407A',
			f: '#E91E63', // 500
			g: '#D81B60',
			h: '#C2185B',
			i: '#AD1457',
			j: '#880E4F'
		}
	},
	isNav: false,
	hamburgerType: 'slider',
	play: {
		startingVolume: 50
	},
  webStorageLink: 'https://s3-ap-southeast-2.amazonaws.com/music-library-dt/',
	bandsInTownApiLinks: {
		start: 'https://rest.bandsintown.com/artists/',
		end: '/events?app_id=personal_api_test'
	},
	bandsInTown: {
		website: 'https://news.bandsintown.com/home',
		logoLink: 'http://corp.bandsintown.com/assets/media-library/bandsintown-logo-black-w-bounding-box.png'
	}
}

export default siteInfo