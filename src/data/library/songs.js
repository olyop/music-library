const songsObj = [
	{
		songId: 1,
		title: 'Uprising',
		artistId: 3,
		albumId: 28,
		trackNum: '1',
		length: '05:03',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 2,
		title: 'Resistance',
		artistId: 3,
		albumId: 28,
		trackNum: '2',
		length: '05:46',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 3,
		title: 'Undisclosed Desires',
		artistId: 3,
		albumId: 28,
		trackNum: '3',
		length: '03:56',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 4,
		title: 'United States of Eurasia (+Collateral Damage)',
		artistId: 3,
		albumId: 28,
		trackNum: '4',
		length: '05:47',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 5,
		title: 'Guiding Light',
		artistId: 3,
		albumId: 28,
		trackNum: '5',
		length: '04:13',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 6,
		title: 'Unnatural Selection',
		artistId: 3,
		albumId: 28,
		trackNum: '6',
		length: '06:54',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 7,
		title: 'MK Ultra',
		artistId: 3,
		albumId: 28,
		trackNum: '7',
		length: '04:06',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 8,
		title: 'Wanna be Startin\' Somethin\'',
		artistId: 13,
		albumId: 1,
		trackNum: '1',
		length: '06:03',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 9,
		title: 'Baby be Mine',
		artistId: 13,
		albumId: 1,
		trackNum: '2',
		length: '04:21',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 10,
		title: 'The Girl Is Mine',
		artistId: 13,
		albumId: 1,
		trackNum: '3',
		length: '03:42',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 11,
		title: 'Thriller',
		artistId: 13,
		albumId: 1,
		trackNum: '4',
		length: '05:58',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 12,
		title: 'Beat It (Single Version)',
		artistId: 13,
		albumId: 1,
		trackNum: '5',
		length: '04:18',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 13,
		title: 'Bille Jean (Single Version)',
		artistId: 13,
		albumId: 1,
		trackNum: '6',
		length: '04:54',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 14,
		title: 'Human Nature',
		artistId: 13,
		albumId: 1,
		trackNum: '7',
		length: '04:06',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 15,
		title: 'P.Y.T (Pretty Young Thing)',
		artistId: 13,
		albumId: 1,
		trackNum: '8',
		length: '03:59',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 16,
		title: 'The Lady In My Life',
		artistId: 13,
		albumId: 1,
		trackNum: '9',
		length: '05:00',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 17,
		title: 'One More Time',
		artistId: 5,
		albumId: 2,
		trackNum: '1',
		length: '07:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 18,
		title: 'Aerodynamic',
		artistId: 5,
		albumId: 2,
		trackNum: '2',
		length: '01:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 19,
		title: 'Digital Love',
		artistId: 5,
		albumId: 2,
		trackNum: '3',
		length: '04:15',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 20,
		title: 'Harder Better Faster Stronger',
		artistId: 5,
		albumId: 2,
		trackNum: '4',
		length: '04:31',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 21,
		title: 'Crecendolls',
		artistId: 5,
		albumId: 2,
		trackNum: '5',
		length: '05:19',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 22,
		title: 'Nightvision',
		artistId: 5,
		albumId: 2,
		trackNum: '6',
		length: '00:55',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 23,
		title: 'Superheroes',
		artistId: 5,
		albumId: 2,
		trackNum: '7',
		length: '03:36',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 24,
		title: 'High Life',
		artistId: 5,
		albumId: 2,
		trackNum: '8',
		length: '03:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 25,
		title: 'Something About Us',
		artistId: 5,
		albumId: 2,
		trackNum: '9',
		length: '01:49',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 26,
		title: 'Yoyager',
		artistId: 5,
		albumId: 2,
		trackNum: '10',
		length: '04:02',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 27,
		title: 'Veridis Quo',
		artistId: 5,
		albumId: 2,
		trackNum: '11',
		length: '04:12',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 28,
		title: 'Short Circuit',
		artistId: 5,
		albumId: 2,
		trackNum: '12',
		length: '03:06',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 50,
		title: 'Is Thit It',
		artistId: 1,
		albumId: 4,
		trackNum: '1',
		length: '02:32',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 51,
		title: 'The Modern Age',
		artistId: 1,
		albumId: 4,
		trackNum: '2',
		length: '03:33',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 52,
		title: 'Soma',
		artistId: 1,
		albumId: 4,
		trackNum: '3',
		length: '02:38',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 53,
		title: 'Barely Legal',
		artistId: 1,
		albumId: 4,
		trackNum: '4',
		length: '03:58',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 54,
		title: 'Someday',
		artistId: 1,
		albumId: 4,
		trackNum: '5',
		length: '03:07',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 55,
		title: 'Alone, Together',
		artistId: 1,
		albumId: 4,
		trackNum: '6',
		length: '03:12',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 56,
		title: 'Last Nite',
		artistId: 1,
		albumId: 4,
		trackNum: '7',
		length: '03:18',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 57,
		title: 'Hard To Explain',
		artistId: 1,
		albumId: 4,
		trackNum: '8',
		length: '03:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 58,
		title: 'New York City Cops',
		artistId: 1,
		albumId: 4,
		trackNum: '9',
		length: '03:36',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 59,
		title: 'Trying Your Luck',
		artistId: 1,
		albumId: 4,
		trackNum: '10',
		length: '03:28',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 60,
		title: 'Take It Or Leave It',
		artistId: 1,
		albumId: 4,
		trackNum: '11',
		length: '03:18',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 61,
		title: 'Life In Technicolor',
		artistId: 14,
		albumId: 5,
		trackNum: '1',
		length: '03:01',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 62,
		title: 'Cemeteries Of London',
		artistId: 14,
		albumId: 5,
		trackNum: '2',
		length: '02:34',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 63,
		title: 'Lost!',
		artistId: 14,
		albumId: 5,
		trackNum: '3',
		length: '03:50',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 64,
		title: '42',
		artistId: 14,
		albumId: 5,
		trackNum: '4',
		length: '04:12',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 65,
		title: 'Lovers In Japan, Reign Of Love',
		artistId: 14,
		albumId: 5,
		trackNum: '5',
		length: '03:39',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 66,
		title: 'Yes',
		artistId: 14,
		albumId: 5,
		trackNum: '6',
		length: '05:09',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 67,
		title: 'Viva La Vida',
		artistId: 14,
		albumId: 5,
		trackNum: '7',
		length: '02:15',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 68,
		title: 'Violet Hill',
		artistId: 14,
		albumId: 5,
		trackNum: '8',
		length: '03:40',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 69,
		title: 'Strawberry Swing',
		artistId: 14,
		albumId: 5,
		trackNum: '9',
		length: '03:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 70,
		title: 'Death And All His Friends',
		artistId: 14,
		albumId: 5,
		trackNum: '10',
		length: '04:49',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 71,
		title: 'Lost',
		artistId: 14,
		albumId: 5,
		trackNum: '11',
		length: '04:05',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 72,
		title: 'Land Of Pleasure',
		artistId: 4,
		albumId: 6,
		trackNum: '1',
		length: '03:01',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 73,
		title: 'Feast Your Eyes',
		artistId: 4,
		albumId: 6,
		trackNum: '2',
		length: '02:34',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 74,
		title: 'Just For You',
		artistId: 4,
		albumId: 6,
		trackNum: '3',
		length: '03:50',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 75,
		title: 'Rum Rage',
		artistId: 4,
		albumId: 6,
		trackNum: '4',
		length: '04:12',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 76,
		title: 'Gold Snafu',
		artistId: 4,
		albumId: 6,
		trackNum: '5',
		length: '03:39',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 77,
		title: 'Liquorlip Loaded Gun',
		artistId: 4,
		albumId: 6,
		trackNum: '6',
		length: '05:09',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 78,
		title: 'Fake A Smile',
		artistId: 4,
		albumId: 6,
		trackNum: '7',
		length: '02:15',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 79,
		title: 'Show No Shade',
		artistId: 4,
		albumId: 6,
		trackNum: '8',
		length: '03:40',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 80,
		title: 'If You Go',
		artistId: 4,
		albumId: 6,
		trackNum: '9',
		length: '03:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 81,
		title: 'Velvet Skies',
		artistId: 4,
		albumId: 6,
		trackNum: '10',
		length: '04:49',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 82,
		title: 'Dreamland',
		artistId: 4,
		albumId: 6,
		trackNum: '11',
		length: '04:05',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 83,
		title: 'Lazerhead',
		artistId: 4,
		albumId: 6,
		trackNum: '12',
		length: '05:54',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 84,
		title: 'One by One',
		artistId: 4,
		albumId: 7,
		trackNum: '1',
		length: '03:54',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 85,
		title: 'Outcast At Last',
		artistId: 4,
		albumId: 7,
		trackNum: '2',
		length: '02:32',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 86,
		title: 'Sad Songs',
		artistId: 4,
		albumId: 7,
		trackNum: '3',
		length: '03:24',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 87,
		title: 'Angel',
		artistId: 4,
		albumId: 7,
		trackNum: '4',
		length: '03:57',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 88,
		title: 'Our Town',
		artistId: 4,
		albumId: 7,
		trackNum: '5',
		length: '03:15',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 89,
		title: 'Westway',
		artistId: 4,
		albumId: 7,
		trackNum: '6',
		length: '03:26',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 90,
		title: 'Something Strange (feat. REMI)',
		artistId: 4,
		albumId: 7,
		trackNum: '7',
		length: '03:40',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 91,
		title: 'Flight 101',
		artistId: 4,
		albumId: 7,
		trackNum: '8',
		length: '03:49',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 92,
		title: 'Tongue & Cheek',
		artistId: 4,
		albumId: 7,
		trackNum: '9',
		length: '03:29',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 93,
		title: 'Amilliontie',
		artistId: 4,
		albumId: 7,
		trackNum: '10',
		length: '03:26',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 94,
		title: 'No Divide',
		artistId: 4,
		albumId: 7,
		trackNum: '11',
		length: '04:52',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 95,
		title: 'Machu Picchu',
		artistId: 1,
		albumId: 8,
		trackNum: '1',
		length: '03:32',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 96,
		title: 'Under Cover Of Darkness',
		artistId: 1,
		albumId: 8,
		trackNum: '2',
		length: '03:57',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 97,
		title: 'Two Kinds Of Happiness',
		artistId: 1,
		albumId: 8,
		trackNum: '3',
		length: '03:44',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 98,
		title: 'You\'re So Right',
		artistId: 1,
		albumId: 8,
		trackNum: '4',
		length: '02:34',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 99,
		title: 'Taken For A Fool',
		artistId: 1,
		albumId: 8,
		trackNum: '5',
		length: '03:25',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 100,
		title: 'Games',
		artistId: 1,
		albumId: 8,
		trackNum: '6',
		length: '03:03',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 101,
		title: 'Call Me Back',
		artistId: 1,
		albumId: 8,
		trackNum: '7',
		length: '03:03',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 102,
		title: 'Gratisfaction',
		artistId: 1,
		albumId: 8,
		trackNum: '8',
		length: '02:59',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 103,
		title: 'Metabolism',
		artistId: 1,
		albumId: 8,
		trackNum: '9',
		length: '03:05',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 104,
		title: 'Life Is Simple In The Moonlight',
		artistId: 1,
		albumId: 8,
		trackNum: '10',
		length: '04:15',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 105,
		title: 'How To Fly',
		artistId: 4,
		albumId: 9,
		trackNum: '1',
		length: '03:22',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 106,
		title: 'Clouds & Cream',
		artistId: 4,
		albumId: 9,
		trackNum: '2',
		length: '02:54',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 107,
		title: 'Australia Street',
		artistId: 4,
		albumId: 9,
		trackNum: '3',
		length: '03:39',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 108,
		title: 'These Girls',
		artistId: 4,
		albumId: 9,
		trackNum: '4',
		length: '03:26',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 109,
		title: 'Sex',
		artistId: 4,
		albumId: 9,
		trackNum: '5',
		length: '02:39',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 110,
		title: 'Bootleg Rascal',
		artistId: 4,
		albumId: 9,
		trackNum: '6',
		length: '03:47',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 111,
		title: 'Caress Your Soul',
		artistId: 4,
		albumId: 9,
		trackNum: '7',
		length: '02:57',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 112,
		title: 'Laika',
		artistId: 4,
		albumId: 9,
		trackNum: '8',
		length: '03:53',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 113,
		title: 'Freedy Crabs',
		artistId: 4,
		albumId: 9,
		trackNum: '9',
		length: '05:08',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 114,
		title: 'Kiss The Breeze',
		artistId: 4,
		albumId: 9,
		trackNum: '10',
		length: '04:19',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 115,
		title: 'Let It All Out',
		artistId: 4,
		albumId: 9,
		trackNum: '11',
		length: '03:16',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 116,
		title: 'You Only Live Once',
		artistId: 1,
		albumId: 10,
		trackNum: '1',
		length: '03:09',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 117,
		title: 'Juicebox',
		artistId: 1,
		albumId: 10,
		trackNum: '2',
		length: '03:18',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 118,
		title: 'Heart In A Cage',
		artistId: 1,
		albumId: 10,
		trackNum: '3',
		length: '03:28',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 119,
		title: 'Razerblade',
		artistId: 1,
		albumId: 10,
		trackNum: '4',
		length: '03:29',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 120,
		title: 'On The Other Side',
		artistId: 1,
		albumId: 10,
		trackNum: '5',
		length: '04:39',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 121,
		title: 'Vision Of Division',
		artistId: 1,
		albumId: 10,
		trackNum: '6',
		length: '04:20',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 122,
		title: 'Ask Me Anything',
		artistId: 1,
		albumId: 10,
		trackNum: '7',
		length: '03:13',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 123,
		title: 'Electricityscape',
		artistId: 1,
		albumId: 10,
		trackNum: '8',
		length: '03:33',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 124,
		title: 'Killing Lies',
		artistId: 1,
		albumId: 10,
		trackNum: '9',
		length: '03:50',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 125,
		title: 'Fear Of Sleep',
		artistId: 1,
		albumId: 10,
		trackNum: '10',
		length: '04:01',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 126,
		title: '15 Minutes',
		artistId: 1,
		albumId: 10,
		trackNum: '11',
		length: '04:34',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 127,
		title: 'Ize Of The World',
		artistId: 1,
		albumId: 10,
		trackNum: '12',
		length: '04:29',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 128,
		title: 'Evening Sun',
		artistId: 1,
		albumId: 10,
		trackNum: '13',
		length: '03:06',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 129,
		title: 'Red Light',
		artistId: 1,
		albumId: 10,
		trackNum: '14',
		length: '03:12',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 130,
		title: 'Let It Happen',
		artistId: 2,
		albumId: 11,
		trackNum: '1',
		length: '07:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 131,
		title: 'Nangs',
		artistId: 2,
		albumId: 11,
		trackNum: '2',
		length: '01:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 132,
		title: 'The Moment',
		artistId: 2,
		albumId: 11,
		trackNum: '3',
		length: '04:15',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 133,
		title: 'Yes I\'m Changing',
		artistId: 2,
		albumId: 11,
		trackNum: '4',
		length: '04:31',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 134,
		title: 'Eventually',
		artistId: 2,
		albumId: 11,
		trackNum: '5',
		length: '05:19',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 135,
		title: 'Gossip',
		artistId: 2,
		albumId: 11,
		trackNum: '6',
		length: '00:55',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 136,
		title: 'The Less I Know The Better',
		artistId: 2,
		albumId: 11,
		trackNum: '7',
		length: '03:36',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 137,
		title: 'Past Life',
		artistId: 2,
		albumId: 11,
		trackNum: '8',
		length: '03:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 138,
		title: 'Disciples',
		artistId: 2,
		albumId: 11,
		trackNum: '9',
		length: '01:49',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 139,
		title: '\'Cause I\'m A Man',
		artistId: 2,
		albumId: 11,
		trackNum: '10',
		length: '04:02',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 140,
		title: 'Reality In Motion',
		artistId: 2,
		albumId: 11,
		trackNum: '11',
		length: '04:12',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 141,
		title: 'Love/Paranoia',
		artistId: 2,
		albumId: 11,
		trackNum: '12',
		length: '03:06',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 142,
		title: 'New Person, Same Old Mistakes',
		artistId: 2,
		albumId: 11,
		trackNum: '13',
		length: '06:03',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 143,
		title: 'What Ever Happened?',
		artistId: 1,
		albumId: 12,
		trackNum: '1',
		length: '02:55',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 144,
		title: 'Reptilia',
		artistId: 1,
		albumId: 12,
		trackNum: '2',
		length: '03:42',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 145,
		title: 'Automatic Stop',
		artistId: 1,
		albumId: 12,
		trackNum: '3',
		length: '03:27',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 146,
		title: '12:51',
		artistId: 1,
		albumId: 12,
		trackNum: '4',
		length: '02:33',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 147,
		title: 'You Talk Way Too Much',
		artistId: 1,
		albumId: 12,
		trackNum: '5',
		length: '03:05',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 148,
		title: 'Between Love & Hate',
		artistId: 1,
		albumId: 12,
		trackNum: '6',
		length: '03:16',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 149,
		title: 'Meet Me In The Bathroom',
		artistId: 1,
		albumId: 12,
		trackNum: '7',
		length: '02:57',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 150,
		title: 'Under Control',
		artistId: 1,
		albumId: 12,
		trackNum: '8',
		length: '03:07',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 151,
		title: 'The Way It Is',
		artistId: 1,
		albumId: 12,
		trackNum: '9',
		length: '02:22',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 152,
		title: 'The End Has No End',
		artistId: 1,
		albumId: 12,
		trackNum: '10',
		length: '03:08',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 153,
		title: 'I Can\'t Win',
		artistId: 1,
		albumId: 12,
		trackNum: '11',
		length: '02:35',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 154,
		title: 'Supremacy',
		artistId: 3,
		albumId: 13,
		trackNum: '1',
		length: '04:55',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 155,
		title: 'Madness',
		artistId: 3,
		albumId: 13,
		trackNum: '2',
		length: '04:40',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 156,
		title: 'Panic Station',
		artistId: 3,
		albumId: 13,
		trackNum: '3',
		length: '03:04',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 157,
		title: 'Prelude',
		artistId: 3,
		albumId: 13,
		trackNum: '4',
		length: '00:58',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 158,
		title: 'Survival',
		artistId: 3,
		albumId: 13,
		trackNum: '5',
		length: '04:17',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 159,
		title: 'Follow Me',
		artistId: 3,
		albumId: 13,
		trackNum: '6',
		length: '03:51',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 160,
		title: 'Animals',
		artistId: 3,
		albumId: 13,
		trackNum: '7',
		length: '04:23',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 161,
		title: 'Explorers',
		artistId: 3,
		albumId: 13,
		trackNum: '8',
		length: '05:47',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 162,
		title: 'Big Freeze',
		artistId: 3,
		albumId: 13,
		trackNum: '9',
		length: '04:40',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 163,
		title: 'Save Me',
		artistId: 3,
		albumId: 13,
		trackNum: '10',
		length: '05:09',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 164,
		title: 'Liquid State',
		artistId: 3,
		albumId: 13,
		trackNum: '11',
		length: '03:03',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 165,
		title: 'The 2nd Law: Unsustainble',
		artistId: 3,
		albumId: 13,
		trackNum: '12',
		length: '03:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 166,
		title: 'The 2nd Law: Isolated System',
		artistId: 3,
		albumId: 13,
		trackNum: '13',
		length: '05:00',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 167,
		title: 'New Born',
		artistId: 3,
		albumId: 14,
		trackNum: '1',
		length: '06:04',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 168,
		title: 'Bliss',
		artistId: 3,
		albumId: 14,
		trackNum: '2',
		length: '04:13',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 169,
		title: 'Space Dementia',
		artistId: 3,
		albumId: 14,
		trackNum: '3',
		length: '06:21',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 170,
		title: 'Hyper Music',
		artistId: 3,
		albumId: 14,
		trackNum: '4',
		length: '03:22',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 171,
		title: 'Plug In Baby',
		artistId: 3,
		albumId: 14,
		trackNum: '5',
		length: '03:40',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 172,
		title: 'Citizen Erased',
		artistId: 3,
		albumId: 14,
		trackNum: '6',
		length: '07:19',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 173,
		title: 'Micro Cuts',
		artistId: 3,
		albumId: 14,
		trackNum: '7',
		length: '03:39',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 174,
		title: 'Screenager',
		artistId: 3,
		albumId: 14,
		trackNum: '8',
		length: '04:20',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 175,
		title: 'Darkshines',
		artistId: 3,
		albumId: 14,
		trackNum: '9',
		length: '04:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 176,
		title: 'Feeling Good',
		artistId: 3,
		albumId: 14,
		trackNum: '10',
		length: '03:20',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 177,
		title: 'Megalomania',
		artistId: 3,
		albumId: 14,
		trackNum: '11',
		length: '04:38',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 178,
		title: 'Dead Inside',
		artistId: 3,
		albumId: 15,
		trackNum: '1',
		length: '04:23',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 179,
		title: '[Drill Sergant]',
		artistId: 3,
		albumId: 15,
		trackNum: '2',
		length: '00:21',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 180,
		title: 'Psycho',
		artistId: 3,
		albumId: 15,
		trackNum: '3',
		length: '05:17',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 181,
		title: 'Mercy',
		artistId: 3,
		albumId: 15,
		trackNum: '4',
		length: '03:52',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 182,
		title: 'Reapers',
		artistId: 3,
		albumId: 15,
		trackNum: '5',
		length: '06:00',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 183,
		title: 'The Handler',
		artistId: 3,
		albumId: 15,
		trackNum: '6',
		length: '04:34',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 184,
		title: '[JFK]',
		artistId: 3,
		albumId: 15,
		trackNum: '7',
		length: '00:55',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 185,
		title: 'Defector',
		artistId: 3,
		albumId: 15,
		trackNum: '8',
		length: '04:33',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 186,
		title: 'Revolt',
		artistId: 3,
		albumId: 15,
		trackNum: '9',
		length: '04:06',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 187,
		title: 'Aftermath',
		artistId: 3,
		albumId: 15,
		trackNum: '10',
		length: '05:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 188,
		title: 'The Globalist',
		artistId: 3,
		albumId: 15,
		trackNum: '11',
		length: '10:07',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 189,
		title: 'Drones',
		artistId: 3,
		albumId: 15,
		trackNum: '12',
		length: '02:50',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 203,
		title: 'Safe And Sound',
		artistId: 10,
		albumId: 17,
		trackNum: '1',
		length: '03:13',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 204,
		title: 'Kangaroo Court',
		artistId: 10,
		albumId: 17,
		trackNum: '2',
		length: '03:41',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 205,
		title: 'Get Lucky (Radio Edit) (feat. Pharrel Williams & Nile Rodgers)',
		albumId: 18,
		artistId: 5,
		trackNum: '1',
		length: '04:08',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 206,
		title: 'American Idiot',
		artistId: 6,
		albumId: 19,
		trackNum: '1',
		length: '02:54',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 207,
		title: 'Jesus Of Subrbia',
		artistId: 6,
		albumId: 19,
		trackNum: '2',
		length: '09:08',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 208,
		title: 'Holiday',
		artistId: 6,
		albumId: 19,
		trackNum: '3',
		length: '03:53',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 209,
		title: 'Boulevard Of Broken Dreams',
		artistId: 6,
		albumId: 19,
		trackNum: '4',
		length: '04:21',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 210,
		title: 'We Are The Wating',
		artistId: 6,
		albumId: 19,
		trackNum: '5',
		length: '02:43',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 211,
		title: 'St. Jimmy',
		artistId: 6,
		albumId: 19,
		trackNum: '6',
		length: '02:55',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 212,
		title: 'Give Me Novacaine',
		artistId: 6,
		albumId: 19,
		trackNum: '7',
		length: '03:26',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 213,
		title: 'She\'s A Rebel',
		artistId: 6,
		albumId: 19,
		trackNum: '8',
		length: '02:00',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 214,
		title: 'Extraordinary Girl',
		artistId: 6,
		albumId: 19,
		trackNum: '9',
		length: '03:34',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 215,
		title: 'Letter Bomb',
		artistId: 6,
		albumId: 19,
		trackNum: '10',
		length: '04:06',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 216,
		title: 'Wake Me Up When September Ends',
		artistId: 6,
		albumId: 19,
		trackNum: '11',
		length: '04:46',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 217,
		title: 'Homecoming',
		artistId: 6,
		albumId: 19,
		trackNum: '12',
		length: '09:19',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 218,
		title: 'Whatsername',
		artistId: 6,
		albumId: 19,
		trackNum: '13',
		length: '04:12',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 231,
		title: 'Time To Pretend',
		artistId: 8,
		albumId: 21,
		trackNum: '1',
		length: '04:21',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 232,
		title: 'Weekend Wars',
		artistId: 8,
		albumId: 21,
		trackNum: '2',
		length: '04:12',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 233,
		title: 'The Youth',
		artistId: 8,
		albumId: 21,
		trackNum: '3',
		length: '03:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 234,
		title: 'Electric Feel',
		artistId: 8,
		albumId: 21,
		trackNum: '4',
		length: '03:50',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 235,
		title: '4th Dimensional Transition',
		artistId: 8,
		albumId: 21,
		trackNum: '6',
		length: '03:58',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 236,
		title: 'Pieces of What',
		artistId: 8,
		albumId: 21,
		trackNum: '7',
		length: '02:44',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 237,
		title: 'Of moons, Birds & Monsters',
		artistId: 8,
		albumId: 21,
		trackNum: '8',
		length: '04:47',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 238,
		title: 'The Handshake',
		artistId: 8,
		albumId: 21,
		trackNum: '9',
		length: '03:40',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 239,
		title: 'Future Reflections',
		artistId: 8,
		albumId: 21,
		trackNum: '10',
		length: '04:00',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 240,
		title: 'The End',
		artistId: 9,
		albumId: 23,
		trackNum: '1',
		length: '01:52',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 241,
		title: 'Dead',
		artistId: 9,
		albumId: 23,
		trackNum: '2',
		length: '03:15',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 242,
		title: 'This Is How I Disappear',
		artistId: 9,
		albumId: 23,
		trackNum: '3',
		length: '03:59',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 243,
		title: 'The Sharpest Lives',
		artistId: 9,
		albumId: 23,
		trackNum: '4',
		length: '03:20',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 244,
		title: 'Welcome To The Black Parade',
		artistId: 9,
		albumId: 23,
		trackNum: '5',
		length: '05:11',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 245,
		title: 'I Don\'t Love You',
		artistId: 9,
		albumId: 23,
		trackNum: '6',
		length: '03:58',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 246,
		title: 'House Of Wolves',
		artistId: 9,
		albumId: 23,
		trackNum: '7',
		length: '03:04',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 247,
		title: 'Cancer',
		artistId: 9,
		albumId: 23,
		trackNum: '8',
		length: '02:23',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 248,
		title: 'Mama',
		artistId: 9,
		albumId: 23,
		trackNum: '9',
		length: '00:23',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 249,
		title: 'Sleep',
		artistId: 9,
		albumId: 23,
		trackNum: '10',
		length: '04:43',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 250,
		title: 'Teenagers',
		artistId: 9,
		albumId: 23,
		trackNum: '11',
		length: '02:41',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 251,
		title: 'Disenchanted',
		artistId: 9,
		albumId: 23,
		trackNum: '12',
		length: '04:55',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 252,
		title: 'Famous Last Words',
		artistId: 9,
		albumId: 23,
		trackNum: '13',
		length: '04:59',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 253,
		title: 'Blood',
		artistId: 9,
		albumId: 23,
		trackNum: '14',
		length: '01:26',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 254,
		title: 'Drag Queen',
		artistId: 1,
		albumId: 25,
		trackNum: '1',
		length: '04:34',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 255,
		title: 'OBLIVIUS',
		artistId: 1,
		albumId: 25,
		trackNum: '2',
		length: '04:59',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 256,
		title: 'Threat of Joy',
		artistId: 1,
		albumId: 25,
		trackNum: '3',
		length: '04:25',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 257,
		title: 'OBLIVIUS (Moretii Remix)',
		artistId: 1,
		albumId: 25,
		trackNum: '4',
		length: '05:32',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 285,
		title: 'Kids',
		artistId: 8,
		albumId: 21,
		trackNum: '5',
		length: '05:03',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 286,
		title: 'Take a Bow',
		artistId: 3,
		albumId: 29,
		trackNum: '1',
		length: '04:35',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 287,
		title: 'Starlight',
		artistId: 3,
		albumId: 29,
		trackNum: '2',
		length: '03:59',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 286,
		title: 'Supermassive Black Hole',
		artistId: 3,
		albumId: 29,
		trackNum: '3',
		length: '03:29',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 287,
		title: 'Map of the Problematique',
		artistId: 3,
		albumId: 29,
		trackNum: '4',
		length: '04:28',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 286,
		title: 'Soldiers\'s Poem',
		artistId: 3,
		albumId: 29,
		trackNum: '5',
		length: '02:03',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 286,
		title: 'Invincible',
		artistId: 3,
		albumId: 29,
		trackNum: '6',
		length: '05:00',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 286,
		title: 'Assassin',
		artistId: 3,
		albumId: 29,
		trackNum: '7',
		length: '03:31',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 286,
		title: 'Exo-Politics',
		artistId: 3,
		albumId: 29,
		trackNum: '8',
		length: '03:53',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 286,
		title: 'City of Delusyion',
		artistId: 3,
		albumId: 29,
		trackNum: '9',
		length: '04:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 286,
		title: 'Hoodoo',
		artistId: 3,
		albumId: 29,
		trackNum: '10',
		length: '03:43',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 286,
		title: 'Knights of Cydonia',
		artistId: 3,
		albumId: 29,
		trackNum: '11',
		length: '06:06',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 287,
		title: 'Be Above It',
		artistId: 2,
		albumId: 30,
		trackNum: '1',
		length: '03:21',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 288,
		title: 'Endors Toi',
		artistId: 2,
		albumId: 30,
		trackNum: '2',
		length: '03:06',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 289,
		title: 'Apocalypse Dreams',
		artistId: 2,
		albumId: 30,
		trackNum: '3',
		length: '05:56',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 290,
		title: 'Mind Mischief',
		artistId: 2,
		albumId: 30,
		trackNum: '4',
		length: '04:31',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 291,
		title: 'Music to Walk Home By',
		artistId: 2,
		albumId: 30,
		trackNum: '5',
		length: '05:21',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 292,
		title: 'Why Won\'t They Talk to Me?',
		artistId: 2,
		albumId: 30,
		trackNum: '6',
		length: '04:46',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 293,
		title: 'Feels Like We Only Go Backwards',
		artistId: 2,
		albumId: 30,
		trackNum: '7',
		length: '03:12',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 294,
		title: 'Keep on Lying',
		artistId: 2,
		albumId: 30,
		trackNum: '8',
		length: '05:54',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 295,
		title: 'Elephant',
		artistId: 2,
		albumId: 30,
		trackNum: '9',
		length: '03:31',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 296,
		title: 'She Just Won\'t Believe Me',
		artistId: 2,
		albumId: 30,
		trackNum: '10',
		length: '00:57',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 297,
		title: 'Nothing That Has Happened So Far Has been Anything We Could Control',
		artistId: 2,
		albumId: 30,
		trackNum: '11',
		length: '06:01',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 298,
		title: 'Sun\'s Coming Up',
		artistId: 2,
		albumId: 30,
		trackNum: '12',
		length: '05:20',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 299,
		title: 'In the Flesh?',
		artistId: 15,
		albumId: 31,
		trackNum: '1',
		length: '03:16',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 300,
		title: 'The Thin Ice',
		artistId: 15,
		albumId: 31,
		trackNum: '2',
		length: '02:27',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 301,
		title: 'Another Brick in the Wall (Part I)',
		artistId: 15,
		albumId: 31,
		trackNum: '3',
		length: '03:21',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 302,
		title: 'The Happiest Days of Our Lives',
		artistId: 15,
		albumId: 31,
		trackNum: '4',
		length: '01:46',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 303,
		title: 'Another Brick in the Wall (Part II)',
		artistId: 15,
		albumId: 31,
		trackNum: '5',
		length: '03:59',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 304,
		title: 'Mother',
		artistId: 15,
		albumId: 31,
		trackNum: '6',
		length: '05:32',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 305,
		title: 'Goodbye Blue Sky',
		artistId: 15,
		albumId: 31,
		trackNum: '7',
		length: '02:45',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 306,
		title: 'Empty Spaces',
		artistId: 15,
		albumId: 31,
		trackNum: '8',
		length: '02:10',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 307,
		title: 'Young Lust',
		artistId: 15,
		albumId: 31,
		trackNum: '9',
		length: '03:25',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 308,
		title: 'One of My Turns',
		artistId: 15,
		albumId: 31,
		trackNum: '10',
		length: '03:41',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 309,
		title: 'Don\'t Leave Me Now',
		artistId: 15,
		albumId: 31,
		trackNum: '11',
		length: '04:08',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 310,
		title: 'Another Brick in the Wall (Part III)',
		artistId: 15,
		albumId: 31,
		trackNum: '12',
		length: '01:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 311,
		title: 'Goodbye Cruel World',
		artistId: 15,
		albumId: 31,
		trackNum: '13',
		length: '00:48',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 312,
		title: 'Hey You',
		artistId: 15,
		albumId: 31,
		trackNum: '14',
		length: '04:40',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 313,
		title: 'Is There Anybody Out There?',
		artistId: 15,
		albumId: 31,
		trackNum: '15',
		length: '02:44',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 314,
		title: 'Nobody Home',
		artistId: 15,
		albumId: 31,
		trackNum: '16',
		length: '03:26',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 315,
		title: 'Vera',
		artistId: 15,
		albumId: 31,
		trackNum: '17',
		length: '06:23',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 316,
		title: 'Speak To Me',
		artistId: 15,
		albumId: 32,
		trackNum: '1',
		length: '01:30',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 317,
		title: 'Breathe',
		artistId: 15,
		albumId: 32,
		trackNum: '2',
		length: '02:43',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 318,
		title: 'On the Run',
		artistId: 15,
		albumId: 32,
		trackNum: '3',
		length: '03:30',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 319,
		title: 'Time',
		artistId: 15,
		albumId: 32,
		trackNum: '4',
		length: '06:53',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 320,
		title: 'Money',
		artistId: 15,
		albumId: 32,
		trackNum: '5',
		length: '06:30',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 321,
		title: 'Us and Them',
		artistId: 15,
		albumId: 32,
		trackNum: '6',
		length: '07:51',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 322,
		title: 'Any Colour You Like',
		artistId: 15,
		albumId: 32,
		trackNum: '7',
		length: '03:24',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 323,
		title: 'Brain Damage',
		artistId: 15,
		albumId: 32,
		trackNum: '8',
		length: '03:50',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 324,
		title: 'Eclipse',
		artistId: 15,
		albumId: 32,
		trackNum: '1',
		length: '02:03',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 325,
		title: 'Politik',
		artistId: 14,
		albumId: 33,
		trackNum: '1',
		length: '05:19',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 326,
		title: 'In My Place',
		artistId: 14,
		albumId: 33,
		trackNum: '2',
		length: '03:47',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 327,
		title: 'God Put A Smilie Upon Your Face',
		artistId: 14,
		albumId: 33,
		trackNum: '3',
		length: '04:57',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 328,
		title: 'The Scientist',
		artistId: 14,
		albumId: 33,
		trackNum: '4',
		length: '05:10',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 329,
		title: 'Clocks',
		artistId: 14,
		albumId: 33,
		trackNum: '5',
		length: '05:08',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 330,
		title: 'Daylight',
		artistId: 14,
		albumId: 33,
		trackNum: '6',
		length: '05:28',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 331,
		title: 'Green Eyes',
		artistId: 14,
		albumId: 33,
		trackNum: '7',
		length: '03:43',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 332,
		title: 'Warning Sign',
		artistId: 14,
		albumId: 33,
		trackNum: '8',
		length: '05:31',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 333,
		title: 'A Whisper',
		artistId: 14,
		albumId: 33,
		trackNum: '9',
		length: '03:58',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 334,
		title: 'A Rush Of Blood To The Head',
		artistId: 14,
		albumId: 33,
		trackNum: '10',
		length: '05:51',
		albumName: '',
		artistName: '', albumCover: ''
	},
	{
		songId: 335,
		title: 'Amsterdam',
		artistId: 14,
		albumId: 33,
		trackNum: '11',
		length: '05:19',
		albumName: '',
		artistName: '', albumCover: ''
	}
];

export default songsObj