const jsUcFirst = str => str.charAt(0).toUpperCase() + str.slice(1)

const changeDocTitle = (match, location) => {
	let path = location.pathname
	let temp = path === '/' ? 'Music Library' : jsUcFirst(path.slice(1,10)) + ' - Music Library'
	document.title = temp
	return match
}

let navListConfig = [
	{
		text: 'Home',
		icon: 'home',
		exact: true,
		to: '/'
	},
	{
		text: 'Artists',
		icon: 'person',
		exact: true,
		to: '/artists'
	},
	{
		text: 'Albums',
		icon: 'album',
		exact: true,
		to: '/albums'
	},
	{
		text: 'Songs',
		icon: 'audiotrack',
		exact: true,
		to: '/songs'
	}
];

export { changeDocTitle, navListConfig }