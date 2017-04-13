const songsObj = [
	{
		songId: 1,
		title: 'Uprising',
		artistId: 3,
		albumId: 28,
		trackNum: '1',
		length: '05:03'
	},
	{
		songId: 2,
		title: 'Resistance',
		artistId: 3,
		albumId: 28,
		trackNum: '2',
		length: '05:46'
	},
	{
		songId: 3,
		title: 'Undisclosed Desires',
		artistId: 3,
		albumId: 28,
		trackNum: '3',
		length: '03:56'
	},
	{
		songId: 4,
		title: 'United States of Eurasia (+Collateral Damage)',
		artistId: 3,
		albumId: 28,
		trackNum: '4',
		length: '05:47'
	},
	{
		songId: 5,
		title: 'Guiding Light',
		artistId: 3,
		albumId: 28,
		trackNum: '5',
		length: '04:13'
	},
	{
		songId: 6,
		title: 'Unnatural Selection',
		artistId: 3,
		albumId: 28,
		trackNum: '6',
		length: '06:54'
	},
	{
		songId: 7,
		title: 'MK Ultra',
		artistId: 3,
		albumId: 28,
		trackNum: '7',
		length: '04:06'
	},
	{
		songId: 8,
		title: 'Wanna be Startin\' Somethin\'',
		artistId: 13,
		albumId: 1,
		trackNum: '1',
		length: '06:03'
	},
	{
		songId: 9,
		title: 'Baby be Mine',
		artistId: 13,
		albumId: 1,
		trackNum: '2',
		length: '04:21'
	},
	{
		songId: 10,
		title: 'The Girl Is Mine',
		artistId: 13,
		albumId: 1,
		trackNum: '3',
		length: '03:42'
	},
	{
		songId: 11,
		title: 'Thriller',
		artistId: 13,
		albumId: 1,
		trackNum: '4',
		length: '05:58'
	},
	{
		songId: 12,
		title: 'Beat It (Single Version)',
		artistId: 13,
		albumId: 1,
		trackNum: '5',
		length: '04:18'
	},
	{
		songId: 13,
		title: 'Bille Jean (Single Version)',
		artistId: 13,
		albumId: 1,
		trackNum: '6',
		length: '04:54'
	},
	{
		songId: 14,
		title: 'Human Nature',
		artistId: 13,
		albumId: 1,
		trackNum: '7',
		length: '04:06'
	},
	{
		songId: 15,
		title: 'P.Y.T (Pretty Young Thing)',
		artistId: 13,
		albumId: 1,
		trackNum: '8',
		length: '03:59'
	},
	{
		songId: 16,
		title: 'The Lady In My Life',
		artistId: 13,
		albumId: 1,
		trackNum: '9',
		length: '05:00'
	},
	{
		songId: 17,
		title: 'One More Time',
		artistId: 5,
		albumId: 2,
		trackNum: '1',
		length: '07:48'
	},
	{
		songId: 18,
		title: 'Aerodynamic',
		artistId: 5,
		albumId: 2,
		trackNum: '2',
		length: '01:48'
	},
	{
		songId: 19,
		title: 'Digital Love',
		artistId: 5,
		albumId: 2,
		trackNum: '3',
		length: '04:15'
	},
	{
		songId: 20,
		title: 'Harder Better Faster Stronger',
		artistId: 5,
		albumId: 2,
		trackNum: '4',
		length: '04:31'
	},
	{
		songId: 21,
		title: 'Crecendolls',
		artistId: 5,
		albumId: 2,
		trackNum: '5',
		length: '05:19'
	},
	{
		songId: 22,
		title: 'Nightvision',
		artistId: 5,
		albumId: 2,
		trackNum: '6',
		length: '00:55'
	},
	{
		songId: 23,
		title: 'Superheroes',
		artistId: 5,
		albumId: 2,
		trackNum: '7',
		length: '03:36'
	},
	{
		songId: 24,
		title: 'High Life',
		artistId: 5,
		albumId: 2,
		trackNum: '8',
		length: '03:48'
	},
	{
		songId: 25,
		title: 'Something About Us',
		artistId: 5,
		albumId: 2,
		trackNum: '9',
		length: '01:49'
	},
	{
		songId: 26,
		title: 'Yoyager',
		artistId: 5,
		albumId: 2,
		trackNum: '10',
		length: '04:02'
	},
	{
		songId: 27,
		title: 'Veridis Quo',
		artistId: 5,
		albumId: 2,
		trackNum: '11',
		length: '04:12'
	},
	{
		songId: 28,
		title: 'Short Circuit',
		artistId: 5,
		albumId: 2,
		trackNum: '12',
		length: '03:06'
	},
	{
		songId: 29,
		title: 'Maria',
		artistId: 6,
		albumId: 3,
		trackNum: '1',
		length: '02:47'
	},
	{
		songId: 30,
		title: 'Poprocks & Coke',
		artistId: 6,
		albumId: 3,
		trackNum: '2',
		length: '02:39'
	},
	{
		songId: 31,
		title: 'Longview',
		artistId: 6,
		albumId: 3,
		trackNum: '3',
		length: '03:53'
	},
	{
		songId: 32,
		title: 'Welcome To Paradise',
		artistId: 6,
		albumId: 3,
		trackNum: '4',
		length: '03:44'
	},
	{
		songId: 33,
		title: 'Basket Case',
		artistId: 6,
		albumId: 3,
		trackNum: '5',
		length: '03:02'
	},
	{
		songId: 34,
		title: 'When I Come Around',
		artistId: 6,
		albumId: 3,
		trackNum: '6',
		length: '02:58'
	},
	{
		songId: 35,
		title: 'She',
		artistId: 6,
		albumId: 3,
		trackNum: '7',
		length: '02:14'
	},
	{
		songId: 36,
		title: 'J.A.R. (Jason Andrew Relva)',
		artistId: 6,
		albumId: 3,
		trackNum: '8',
		length: '02:51'
	},
	{
		songId: 37,
		title: 'Geek Stink Breath',
		artistId: 6,
		albumId: 3,
		trackNum: '9',
		length: '02:15'
	},
	{
		songId: 38,
		title: 'Brain Stew',
		artistId: 6,
		albumId: 3,
		trackNum: '10',
		length: '03:15'
	},
	{
		songId: 39,
		title: 'Jaded',
		artistId: 6,
		albumId: 3,
		trackNum: '11',
		length: '01:30'
	},
	{
		songId: 40,
		title: 'Walking Contradiction',
		artistId: 6,
		albumId: 3,
		trackNum: '12',
		length: '02:23'
	},
	{
		songId: 41,
		title: 'Stuck With Me',
		artistId: 6,
		albumId: 3,
		trackNum: '13',
		length: '02:15'
	},
	{
		songId: 42,
		title: 'Hitchin\' A Ride',
		artistId: 6,
		albumId: 3,
		trackNum: '14',
		length: '02:51'
	},
	{
		songId: 43,
		title: 'Good Riddance (Time Of Your Life)',
		artistId: 6,
		albumId: 3,
		trackNum: '15',
		length: '02:33'
	},
	{
		songId: 44,
		title: 'Redundant',
		artistId: 6,
		albumId: 3,
		trackNum: '16',
		length: '03:18'
	},
	{
		songId: 45,
		title: 'Nice Guys Finish Last',
		artistId: 6,
		albumId: 3,
		trackNum: '17',
		length: '02:49'
	},
	{
		songId: 46,
		title: 'Minority',
		artistId: 6,
		albumId: 3,
		trackNum: '18',
		length: '02:48'
	},
	{
		songId: 47,
		title: 'Warning',
		artistId: 6,
		albumId: 3,
		trackNum: '19',
		length: '03:42'
	},
	{
		songId: 48,
		title: 'Waiting',
		artistId: 6,
		albumId: 3,
		trackNum: '20',
		length: '03:12'
	},
	{
		songId: 49,
		title: 'Macy\'s Day Parade',
		artistId: 6,
		albumId: 3,
		trackNum: '21',
		length: '03:33'
	},
	{
		songId: 50,
		title: 'Is Thit It',
		artistId: 1,
		albumId: 4,
		trackNum: '1',
		length: '02:32'
	},
	{
		songId: 51,
		title: 'The Modern Age',
		artistId: 1,
		albumId: 4,
		trackNum: '2',
		length: '03:33'
	},
	{
		songId: 52,
		title: 'Soma',
		artistId: 1,
		albumId: 4,
		trackNum: '3',
		length: '02:38'
	},
	{
		songId: 53,
		title: 'Barely Legal',
		artistId: 1,
		albumId: 4,
		trackNum: '4',
		length: '03:58'
	},
	{
		songId: 54,
		title: 'Someday',
		artistId: 1,
		albumId: 4,
		trackNum: '5',
		length: '03:07'
	},
	{
		songId: 55,
		title: 'Alone, Together',
		artistId: 1,
		albumId: 4,
		trackNum: '6',
		length: '03:12'
	},
	{
		songId: 56,
		title: 'Last Nite',
		artistId: 1,
		albumId: 4,
		trackNum: '7',
		length: '03:18'
	},
	{
		songId: 57,
		title: 'Hard To Explain',
		artistId: 1,
		albumId: 4,
		trackNum: '8',
		length: '03:48'
	},
	{
		songId: 58,
		title: 'New York City Cops',
		artistId: 1,
		albumId: 4,
		trackNum: '9',
		length: '03:36'
	},
	{
		songId: 59,
		title: 'Trying Your Luck',
		artistId: 1,
		albumId: 4,
		trackNum: '10',
		length: '03:28'
	},
	{
		songId: 60,
		title: 'Take It Or Leave It',
		artistId: 1,
		albumId: 4,
		trackNum: '11',
		length: '03:18'
	},
	{
		songId: 61,
		title: 'Life In Technicolor',
		artistId: 14,
		albumId: 5,
		trackNum: '1',
		length: '03:01'
	},
	{
		songId: 62,
		title: 'Cemeteries Of London',
		artistId: 14,
		albumId: 5,
		trackNum: '2',
		length: '02:34'
	},
	{
		songId: 63,
		title: 'Lost!',
		artistId: 14,
		albumId: 5,
		trackNum: '3',
		length: '03:50'
	},
	{
		songId: 64,
		title: '42',
		artistId: 14,
		albumId: 5,
		trackNum: '4',
		length: '04:12'
	},
	{
		songId: 65,
		title: 'Lovers In Japan, Reign Of Love',
		artistId: 14,
		albumId: 5,
		trackNum: '5',
		length: '03:39'
	},
	{
		songId: 66,
		title: 'Yes',
		artistId: 14,
		albumId: 5,
		trackNum: '6',
		length: '05:09'
	},
	{
		songId: 67,
		title: 'Viva La Vida',
		artistId: 14,
		albumId: 5,
		trackNum: '7',
		length: '02:15'
	},
	{
		songId: 68,
		title: 'Violet Hill',
		artistId: 14,
		albumId: 5,
		trackNum: '8',
		length: '03:40'
	},
	{
		songId: 69,
		title: 'Strawberry Swing',
		artistId: 14,
		albumId: 5,
		trackNum: '9',
		length: '03:48'
	},
	{
		songId: 70,
		title: 'Death And All His Friends',
		artistId: 14,
		albumId: 5,
		trackNum: '10',
		length: '04:49'
	},
	{
		songId: 71,
		title: 'Lost',
		artistId: 14,
		albumId: 5,
		trackNum: '11',
		length: '04:05'
	},
	{
		songId: 72,
		title: 'Land Of Pleasure',
		artistId: 4,
		albumId: 6,
		trackNum: '1',
		length: '03:01'
	},
	{
		songId: 73,
		title: 'Feast Your Eyes',
		artistId: 4,
		albumId: 6,
		trackNum: '2',
		length: '02:34'
	},
	{
		songId: 74,
		title: 'Just For You',
		artistId: 4,
		albumId: 6,
		trackNum: '3',
		length: '03:50'
	},
	{
		songId: 75,
		title: 'Rum Rage',
		artistId: 4,
		albumId: 6,
		trackNum: '4',
		length: '04:12'
	},
	{
		songId: 76,
		title: 'Gold Snafu',
		artistId: 4,
		albumId: 6,
		trackNum: '5',
		length: '03:39'
	},
	{
		songId: 77,
		title: 'Liquorlip Loaded Gun',
		artistId: 4,
		albumId: 6,
		trackNum: '6',
		length: '05:09'
	},
	{
		songId: 78,
		title: 'Fake A Smile',
		artistId: 4,
		albumId: 6,
		trackNum: '7',
		length: '02:15'
	},
	{
		songId: 79,
		title: 'Show No Shade',
		artistId: 4,
		albumId: 6,
		trackNum: '8',
		length: '03:40'
	},
	{
		songId: 80,
		title: 'If You Go',
		artistId: 4,
		albumId: 6,
		trackNum: '9',
		length: '03:48'
	},
	{
		songId: 81,
		title: 'Velvet Skies',
		artistId: 4,
		albumId: 6,
		trackNum: '10',
		length: '04:49'
	},
	{
		songId: 82,
		title: 'Dreamland',
		artistId: 4,
		albumId: 6,
		trackNum: '11',
		length: '04:05'
	},
	{
		songId: 83,
		title: 'Lazerhead',
		artistId: 4,
		albumId: 6,
		trackNum: '12',
		length: '05:54'
	},
	{
		songId: 84,
		title: 'One by One',
		artistId: 4,
		albumId: 7,
		trackNum: '1',
		length: '03:54'
	},
	{
		songId: 85,
		title: 'Outcast At Last',
		artistId: 4,
		albumId: 7,
		trackNum: '2',
		length: '02:32'
	},
	{
		songId: 86,
		title: 'Sad Songs',
		artistId: 4,
		albumId: 7,
		trackNum: '3',
		length: '03:24'
	},
	{
		songId: 87,
		title: 'Angel',
		artistId: 4,
		albumId: 7,
		trackNum: '4',
		length: '03:57'
	},
	{
		songId: 88,
		title: 'Our Town',
		artistId: 4,
		albumId: 7,
		trackNum: '5',
		length: '03:15'
	},
	{
		songId: 89,
		title: 'Westway',
		artistId: 4,
		albumId: 7,
		trackNum: '6',
		length: '03:26'
	},
	{
		songId: 90,
		title: 'Something Strange (feat. REMI)',
		artistId: 4,
		albumId: 7,
		trackNum: '7',
		length: '03:40'
	},
	{
		songId: 91,
		title: 'Flight 101',
		artistId: 4,
		albumId: 7,
		trackNum: '8',
		length: '03:49'
	},
	{
		songId: 92,
		title: 'Tongue & Cheek',
		artistId: 4,
		albumId: 7,
		trackNum: '9',
		length: '03:29'
	},
	{
		songId: 93,
		title: 'Amilliontie',
		artistId: 4,
		albumId: 7,
		trackNum: '10',
		length: '03:26'
	},
	{
		songId: 94,
		title: 'No Divide',
		artistId: 4,
		albumId: 7,
		trackNum: '11',
		length: '04:52'
	},
	{
		songId: 95,
		title: 'Machu Picchu',
		artistId: 1,
		albumId: 8,
		trackNum: '1',
		length: '03:32'
	},
	{
		songId: 96,
		title: 'Under Cover Of Darkness',
		artistId: 1,
		albumId: 8,
		trackNum: '2',
		length: '03:57'
	},
	{
		songId: 97,
		title: 'Two Kinds Of Happiness',
		artistId: 1,
		albumId: 8,
		trackNum: '3',
		length: '03:44'
	},
	{
		songId: 98,
		title: 'You\'re So Right',
		artistId: 1,
		albumId: 8,
		trackNum: '4',
		length: '02:34'
	},
	{
		songId: 99,
		title: 'Taken For A Fool',
		artistId: 1,
		albumId: 8,
		trackNum: '5',
		length: '03:25'
	},
	{
		songId: 100,
		title: 'Games',
		artistId: 1,
		albumId: 8,
		trackNum: '6',
		length: '03:03'
	},
	{
		songId: 101,
		title: 'Call Me Back',
		artistId: 1,
		albumId: 8,
		trackNum: '7',
		length: '03:03'
	},
	{
		songId: 102,
		title: 'Gratisfaction',
		artistId: 1,
		albumId: 8,
		trackNum: '8',
		length: '02:59'
	},
	{
		songId: 103,
		title: 'Metabolism',
		artistId: 1,
		albumId: 8,
		trackNum: '9',
		length: '03:05'
	},
	{
		songId: 104,
		title: 'Life Is Simple In The Moonlight',
		artistId: 1,
		albumId: 8,
		trackNum: '10',
		length: '04:15'
	},
	{
		songId: 105,
		title: 'How To Fly',
		artistId: 4,
		albumId: 9,
		trackNum: '1',
		length: '03:22'
	},
	{
		songId: 106,
		title: 'Clouds & Cream',
		artistId: 4,
		albumId: 9,
		trackNum: '2',
		length: '02:54'
	},
	{
		songId: 107,
		title: 'Australia Street',
		artistId: 4,
		albumId: 9,
		trackNum: '3',
		length: '03:39'
	},
	{
		songId: 108,
		title: 'These Girls',
		artistId: 4,
		albumId: 9,
		trackNum: '4',
		length: '03:26'
	},
	{
		songId: 109,
		title: 'Sex',
		artistId: 4,
		albumId: 9,
		trackNum: '5',
		length: '02:39'
	},
	{
		songId: 110,
		title: 'Bootleg Rascal',
		artistId: 4,
		albumId: 9,
		trackNum: '6',
		length: '03:47'
	},
	{
		songId: 111,
		title: 'Caress Your Soul',
		artistId: 4,
		albumId: 9,
		trackNum: '7',
		length: '02:57'
	},
	{
		songId: 112,
		title: 'Laika',
		artistId: 4,
		albumId: 9,
		trackNum: '8',
		length: '03:53'
	},
	{
		songId: 113,
		title: 'Freedy Crabs',
		artistId: 4,
		albumId: 9,
		trackNum: '9',
		length: '05:08'
	},
	{
		songId: 114,
		title: 'Kiss The Breeze',
		artistId: 4,
		albumId: 9,
		trackNum: '10',
		length: '04:19'
	},
	{
		songId: 115,
		title: 'Let It All Out',
		artistId: 4,
		albumId: 9,
		trackNum: '11',
		length: '03:16'
	},
	{
		songId: 116,
		title: 'You Only Live Once',
		artistId: 1,
		albumId: 10,
		trackNum: '1',
		length: '03:09'
	},
	{
		songId: 117,
		title: 'Juicebox',
		artistId: 1,
		albumId: 10,
		trackNum: '2',
		length: '03:18'
	},
	{
		songId: 118,
		title: 'Heart In A Cage',
		artistId: 1,
		albumId: 10,
		trackNum: '3',
		length: '03:28'
	},
	{
		songId: 119,
		title: 'Razerblade',
		artistId: 1,
		albumId: 10,
		trackNum: '4',
		length: '03:29'
	},
	{
		songId: 120,
		title: 'On The Other Side',
		artistId: 1,
		albumId: 10,
		trackNum: '5',
		length: '04:39'
	},
	{
		songId: 121,
		title: 'Vision Of Division',
		artistId: 1,
		albumId: 10,
		trackNum: '6',
		length: '04:20'
	},
	{
		songId: 122,
		title: 'Ask Me Anything',
		artistId: 1,
		albumId: 10,
		trackNum: '7',
		length: '03:13'
	},
	{
		songId: 123,
		title: 'Electricityscape',
		artistId: 1,
		albumId: 10,
		trackNum: '8',
		length: '03:33'
	},
	{
		songId: 124,
		title: 'Killing Lies',
		artistId: 1,
		albumId: 10,
		trackNum: '9',
		length: '03:50'
	},
	{
		songId: 125,
		title: 'Fear Of Sleep',
		artistId: 1,
		albumId: 10,
		trackNum: '10',
		length: '04:01'
	},
	{
		songId: 126,
		title: '15 Minutes',
		artistId: 1,
		albumId: 10,
		trackNum: '11',
		length: '04:34'
	},
	{
		songId: 127,
		title: 'Ize Of The World',
		artistId: 1,
		albumId: 10,
		trackNum: '12',
		length: '04:29'
	},
	{
		songId: 128,
		title: 'Evening Sun',
		artistId: 1,
		albumId: 10,
		trackNum: '13',
		length: '03:06'
	},
	{
		songId: 129,
		title: 'Red Light',
		artistId: 1,
		albumId: 10,
		trackNum: '14',
		length: '03:12'
	},
	{
		songId: 130,
		title: 'Let It Happen',
		artistId: 2,
		albumId: 11,
		trackNum: '1',
		length: '07:48'
	},
	{
		songId: 131,
		title: 'Nangs',
		artistId: 2,
		albumId: 11,
		trackNum: '2',
		length: '01:48'
	},
	{
		songId: 132,
		title: 'The Moment',
		artistId: 2,
		albumId: 11,
		trackNum: '3',
		length: '04:15'
	},
	{
		songId: 133,
		title: 'Yes I\'m Changing',
		artistId: 2,
		albumId: 11,
		trackNum: '4',
		length: '04:31'
	},
	{
		songId: 134,
		title: 'Eventually',
		artistId: 2,
		albumId: 11,
		trackNum: '5',
		length: '05:19'
	},
	{
		songId: 135,
		title: 'Gossip',
		artistId: 2,
		albumId: 11,
		trackNum: '6',
		length: '00:55'
	},
	{
		songId: 136,
		title: 'The Less I Know The Better',
		artistId: 2,
		albumId: 11,
		trackNum: '7',
		length: '03:36'
	},
	{
		songId: 137,
		title: 'Past Life',
		artistId: 2,
		albumId: 11,
		trackNum: '8',
		length: '03:48'
	},
	{
		songId: 138,
		title: 'Disciples',
		artistId: 2,
		albumId: 11,
		trackNum: '9',
		length: '01:49'
	},
	{
		songId: 139,
		title: '\'Cause I\'m A Man',
		artistId: 2,
		albumId: 11,
		trackNum: '10',
		length: '04:02'
	},
	{
		songId: 140,
		title: 'Reality In Motion',
		artistId: 2,
		albumId: 11,
		trackNum: '11',
		length: '04:12'
	},
	{
		songId: 141,
		title: 'Love/Paranoia',
		artistId: 2,
		albumId: 11,
		trackNum: '12',
		length: '03:06'
	},
	{
		songId: 142,
		title: 'New Person, Same Old Mistakes',
		artistId: 2,
		albumId: 11,
		trackNum: '13',
		length: '06:03'
	},
	{
		songId: 143,
		title: 'What Ever Happened?',
		artistId: 1,
		albumId: 12,
		trackNum: '1',
		length: '02:55'
	},
	{
		songId: 144,
		title: 'Reptilia',
		artistId: 1,
		albumId: 12,
		trackNum: '2',
		length: '03:42'
	},
	{
		songId: 145,
		title: 'Automatic Stop',
		artistId: 1,
		albumId: 12,
		trackNum: '3',
		length: '03:27'
	},
	{
		songId: 146,
		title: '12:51',
		artistId: 1,
		albumId: 12,
		trackNum: '4',
		length: '02:33'
	},
	{
		songId: 147,
		title: 'You Talk Way Too Much',
		artistId: 1,
		albumId: 12,
		trackNum: '5',
		length: '03:05'
	},
	{
		songId: 148,
		title: 'Between Love & Hate',
		artistId: 1,
		albumId: 12,
		trackNum: '6',
		length: '03:16'
	},
	{
		songId: 149,
		title: 'Meet Me In The Bathroom',
		artistId: 1,
		albumId: 12,
		trackNum: '7',
		length: '02:57'
	},
	{
		songId: 150,
		title: 'Under Control',
		artistId: 1,
		albumId: 12,
		trackNum: '8',
		length: '03:07'
	},
	{
		songId: 151,
		title: 'The Way It Is',
		artistId: 1,
		albumId: 12,
		trackNum: '9',
		length: '02:22'
	},
	{
		songId: 152,
		title: 'The End Has No End',
		artistId: 1,
		albumId: 12,
		trackNum: '10',
		length: '03:08'
	},
	{
		songId: 153,
		title: 'I Can\'t Win',
		artistId: 1,
		albumId: 12,
		trackNum: '11',
		length: '02:35'
	},
	{
		songId: 154,
		title: 'Supremacy',
		artistId: 3,
		albumId: 13,
		trackNum: '1',
		length: '04:55'
	},
	{
		songId: 155,
		title: 'Madness',
		artistId: 3,
		albumId: 13,
		trackNum: '2',
		length: '04:40'
	},
	{
		songId: 156,
		title: 'Panic Station',
		artistId: 3,
		albumId: 13,
		trackNum: '3',
		length: '03:04'
	},
	{
		songId: 157,
		title: 'Prelude',
		artistId: 3,
		albumId: 13,
		trackNum: '4',
		length: '00:58'
	},
	{
		songId: 158,
		title: 'Survival',
		artistId: 3,
		albumId: 13,
		trackNum: '5',
		length: '04:17'
	},
	{
		songId: 159,
		title: 'Follow Me',
		artistId: 3,
		albumId: 13,
		trackNum: '6',
		length: '03:51'
	},
	{
		songId: 160,
		title: 'Animals',
		artistId: 3,
		albumId: 13,
		trackNum: '7',
		length: '04:23'
	},
	{
		songId: 161,
		title: 'Explorers',
		artistId: 3,
		albumId: 13,
		trackNum: '8',
		length: '05:47'
	},
	{
		songId: 162,
		title: 'Big Freeze',
		artistId: 3,
		albumId: 13,
		trackNum: '9',
		length: '04:40'
	},
	{
		songId: 163,
		title: 'Save Me',
		artistId: 3,
		albumId: 13,
		trackNum: '10',
		length: '05:09'
	},
	{
		songId: 164,
		title: 'Liquid State',
		artistId: 3,
		albumId: 13,
		trackNum: '11',
		length: '03:03'
	},
	{
		songId: 165,
		title: 'The 2nd Law: Unsustainble',
		artistId: 3,
		albumId: 13,
		trackNum: '12',
		length: '03:48'
	},
	{
		songId: 166,
		title: 'The 2nd Law: Isolated System',
		artistId: 3,
		albumId: 13,
		trackNum: '13',
		length: '05:00'
	},
	{
		songId: 167,
		title: 'New Born',
		artistId: 3,
		albumId: 14,
		trackNum: '1',
		length: '06:04'
	},
	{
		songId: 168,
		title: 'Bliss',
		artistId: 3,
		albumId: 14,
		trackNum: '2',
		length: '04:13'
	},
	{
		songId: 169,
		title: 'Space Dementia',
		artistId: 3,
		albumId: 14,
		trackNum: '3',
		length: '06:21'
	},
	{
		songId: 170,
		title: 'Hyper Music',
		artistId: 3,
		albumId: 14,
		trackNum: '4',
		length: '03:22'
	},
	{
		songId: 171,
		title: 'Plug In Baby',
		artistId: 3,
		albumId: 14,
		trackNum: '5',
		length: '03:40'
	},
	{
		songId: 172,
		title: 'Citizen Erased',
		artistId: 3,
		albumId: 14,
		trackNum: '6',
		length: '07:19'
	},
	{
		songId: 173,
		title: 'Micro Cuts',
		artistId: 3,
		albumId: 14,
		trackNum: '7',
		length: '03:39'
	},
	{
		songId: 174,
		title: 'Screenager',
		artistId: 3,
		albumId: 14,
		trackNum: '8',
		length: '04:20'
	},
	{
		songId: 175,
		title: 'Darkshines',
		artistId: 3,
		albumId: 14,
		trackNum: '9',
		length: '04:48'
	},
	{
		songId: 176,
		title: 'Feeling Good',
		artistId: 3,
		albumId: 14,
		trackNum: '10',
		length: '03:20'
	},
	{
		songId: 177,
		title: 'Megalomania',
		artistId: 3,
		albumId: 14,
		trackNum: '11',
		length: '04:38'
	},
	{
		songId: 178,
		title: 'Dead Inside',
		artistId: 3,
		albumId: 15,
		trackNum: '1',
		length: '04:23'
	},
	{
		songId: 179,
		title: '[Drill Sergant]',
		artistId: 3,
		albumId: 15,
		trackNum: '2',
		length: '00:21'
	},
	{
		songId: 180,
		title: 'Psycho',
		artistId: 3,
		albumId: 15,
		trackNum: '3',
		length: '05:17'
	},
	{
		songId: 181,
		title: 'Mercy',
		artistId: 3,
		albumId: 15,
		trackNum: '4',
		length: '03:52'
	},
	{
		songId: 182,
		title: 'Reapers',
		artistId: 3,
		albumId: 15,
		trackNum: '5',
		length: '06:00'
	},
	{
		songId: 183,
		title: 'The Handler',
		artistId: 3,
		albumId: 15,
		trackNum: '6',
		length: '04:34'
	},
	{
		songId: 184,
		title: '[JFK]',
		artistId: 3,
		albumId: 15,
		trackNum: '7',
		length: '00:55'
	},
	{
		songId: 185,
		title: 'Defector',
		artistId: 3,
		albumId: 15,
		trackNum: '8',
		length: '04:33'
	},
	{
		songId: 186,
		title: 'Revolt',
		artistId: 3,
		albumId: 15,
		trackNum: '9',
		length: '04:06'
	},
	{
		songId: 187,
		title: 'Aftermath',
		artistId: 3,
		albumId: 15,
		trackNum: '10',
		length: '05:48'
	},
	{
		songId: 188,
		title: 'The Globalist',
		artistId: 3,
		albumId: 15,
		trackNum: '11',
		length: '10:07'
	},
	{
		songId: 189,
		title: 'Drones',
		artistId: 3,
		albumId: 15,
		trackNum: '12',
		length: '02:50'
	},
	{
		songId: 190,
		title: 'The Getaway',
		artistId: 11,
		albumId: 16,
		trackNum: '1',
		length: '04:10'
	},
	{
		songId: 191,
		title: 'Dark Necessities',
		artistId: 11,
		albumId: 16,
		trackNum: '2',
		length: '05:03'
	},
	{
		songId: 192,
		title: 'We Turn Red',
		artistId: 11,
		albumId: 16,
		trackNum: '3',
		length: '03:20'
	},
	{
		songId: 193,
		title: 'The Longest Wave',
		artistId: 11,
		albumId: 16,
		trackNum: '4',
		length: '03:21'
	},
	{
		songId: 194,
		title: 'Goodbye Angels',
		artistId: 11,
		albumId: 16,
		trackNum: '5',
		length: '04:28'
	},
	{
		songId: 195,
		title: 'Sick Love',
		artistId: 11,
		albumId: 16,
		trackNum: '6',
		length: '03:41'
	},
	{
		songId: 196,
		title: 'Go Robot',
		artistId: 11,
		albumId: 16,
		trackNum: '7',
		length: '04:23'
	},
	{
		songId: 197,
		title: 'Feasting on the Flowers',
		artistId: 11,
		albumId: 16,
		trackNum: '8',
		length: '03:22'
	},
	{
		songId: 198,
		title: 'Detroit',
		artistId: 11,
		albumId: 16,
		trackNum: '9',
		length: '03:46'
	},
	{
		songId: 199,
		title: 'This Ticonderoga',
		artistId: 11,
		albumId: 16,
		trackNum: '10',
		length: '03:35'
	},
	{
		songId: 200,
		title: 'Encore',
		artistId: 11,
		albumId: 16,
		trackNum: '11',
		length: '04:14'
	},
	{
		songId: 201,
		title: 'The Hunter',
		artistId: 11,
		albumId: 16,
		trackNum: '12',
		length: '04:00'
	},
	{
		songId: 202,
		title: 'Dreams a Samurai',
		artistId: 11,
		albumId: 16,
		trackNum: '13',
		length: '06:09'
	},
	{
		songId: 203,
		title: 'Safe And Sound',
		artistId: 10,
		albumId: 17,
		trackNum: '1',
		length: '03:13'
	},
	{
		songId: 204,
		title: 'Kangaroo Court',
		artistId: 10,
		albumId: 17,
		trackNum: '2',
		length: '03:41'
	},
	{
		songId: 205,
		title: 'Get Lucky (Radio Edit) (feat. Pharrel Williams & Nile Rodgers)',
		albumId: 18,
		artistId: 5,
		trackNum: '1',
		length: '04:08'
	},
	{
		songId: 206,
		title: 'American Idiot',
		artistId: 6,
		albumId: 19,
		trackNum: '1',
		length: '02:54'
	},
	{
		songId: 207,
		title: 'Jesus Of Subrbia',
		artistId: 6,
		albumId: 19,
		trackNum: '2',
		length: '09:08'
	},
	{
		songId: 208,
		title: 'Holiday',
		artistId: 6,
		albumId: 19,
		trackNum: '3',
		length: '03:53'
	},
	{
		songId: 209,
		title: 'Boulevard Of Broken Dreams',
		artistId: 6,
		albumId: 19,
		trackNum: '4',
		length: '04:21'
	},
	{
		songId: 210,
		title: 'We Are The Wating',
		artistId: 6,
		albumId: 19,
		trackNum: '5',
		length: '02:43'
	},
	{
		songId: 211,
		title: 'St. Jimmy',
		artistId: 6,
		albumId: 19,
		trackNum: '6',
		length: '02:55'
	},
	{
		songId: 212,
		title: 'Give Me Novacaine',
		artistId: 6,
		albumId: 19,
		trackNum: '7',
		length: '03:26'
	},
	{
		songId: 213,
		title: 'She\'s A Rebel',
		artistId: 6,
		albumId: 19,
		trackNum: '8',
		length: '02:00'
	},
	{
		songId: 214,
		title: 'Extraordinary Girl',
		artistId: 6,
		albumId: 19,
		trackNum: '9',
		length: '03:34'
	},
	{
		songId: 215,
		title: 'Letter Bomb',
		artistId: 6,
		albumId: 19,
		trackNum: '10',
		length: '04:06'
	},
	{
		songId: 216,
		title: 'Wake Me Up When September Ends',
		artistId: 6,
		albumId: 19,
		trackNum: '11',
		length: '04:46'
	},
	{
		songId: 217,
		title: 'Homecoming',
		artistId: 6,
		albumId: 19,
		trackNum: '12',
		length: '09:19'
	},
	{
		songId: 218,
		title: 'Whatsername',
		artistId: 6,
		albumId: 19,
		trackNum: '13',
		length: '04:12'
	},
	{
		songId: 219,
		title: 'Welcome To The Jungle',
		artistId: 12,
		albumId: 20,
		trackNum: '1',
		length: '04:34'
	},
	{
		songId: 220,
		title: 'It\'s So Easy',
		artistId: 12,
		albumId: 20,
		trackNum: '2',
		length: '03:23'
	},
	{
		songId: 221,
		title: 'Nightrain',
		artistId: 12,
		albumId: 20,
		trackNum: '3',
		length: '04:27'
	},
	{
		songId: 222,
		title: 'Out Ta Get Me',
		artistId: 12,
		albumId: 20,
		trackNum: '4',
		length: '04:22'
	},
	{
		songId: 223,
		title: 'Mr. Brownstone',
		artistId: 12,
		albumId: 20,
		trackNum: '5',
		length: '03:49'
	},
	{
		songId: 224,
		title: 'Paradise City',
		artistId: 12,
		albumId: 20,
		trackNum: '6',
		length: '06:48'
	},
	{
		songId: 225,
		title: 'My Michelle',
		artistId: 12,
		albumId: 20,
		trackNum: '7',
		length: '03:50'
	},
	{
		songId: 226,
		title: 'Think About You',
		artistId: 12,
		albumId: 20,
		trackNum: '8',
		length: '03:39'
	},
	{
		songId: 227,
		title: 'Sweet Child O\' Mine',
		artistId: 12,
		albumId: 20,
		trackNum: '9',
		length: '05:56'
	},
	{
		songId: 228,
		title: 'You\'re Crazy',
		artistId: 12,
		albumId: 20,
		trackNum: '10',
		length: '03:17'
	},
	{
		songId: 229,
		title: 'Anything Goes',
		artistId: 12,
		albumId: 20,
		trackNum: '11',
		length: '03:27'
	},
	{
		songId: 230,
		title: 'Rocket Queen',
		artistId: 12,
		albumId: 20,
		trackNum: '12',
		length: '06:14'
	},
	{
		songId: 231,
		title: 'Time To Pretend',
		artistId: 8,
		albumId: 21,
		trackNum: '1',
		length: '04:21'
	},
	{
		songId: 232,
		title: 'Weekend Wars',
		artistId: 8,
		albumId: 21,
		trackNum: '2',
		length: '04:12'
	},
	{
		songId: 233,
		title: 'The Youth',
		artistId: 8,
		albumId: 21,
		trackNum: '3',
		length: '03:48'
	},
	{
		songId: 234,
		title: 'Electric Feel',
		artistId: 8,
		albumId: 21,
		trackNum: '4',
		length: '03:50'
	},
	{
		songId: 235,
		title: '4th Dimensional Transition',
		artistId: 8,
		albumId: 21,
		trackNum: '6',
		length: '03:58'
	},
	{
		songId: 236,
		title: 'Pieces of What',
		artistId: 8,
		albumId: 21,
		trackNum: '7',
		length: '02:44'
	},
	{
		songId: 237,
		title: 'Of moons, Birds & Monsters',
		artistId: 8,
		albumId: 21,
		trackNum: '8',
		length: '04:47'
	},
	{
		songId: 238,
		title: 'The Handshake',
		artistId: 8,
		albumId: 21,
		trackNum: '9',
		length: '03:40'
	},
	{
		songId: 239,
		title: 'Future Reflections',
		artistId: 8,
		albumId: 21,
		trackNum: '10',
		length: '04:00'
	},
	{
		songId: 240,
		title: 'The End',
		artistId: 9,
		albumId: 23,
		trackNum: '1',
		length: '01:52'
	},
	{
		songId: 241,
		title: 'Dead',
		artistId: 9,
		albumId: 23,
		trackNum: '2',
		length: '03:15'
	},
	{
		songId: 242,
		title: 'This Is How I Disappear',
		artistId: 9,
		albumId: 23,
		trackNum: '3',
		length: '03:59'
	},
	{
		songId: 243,
		title: 'The Sharpest Lives',
		artistId: 9,
		albumId: 23,
		trackNum: '4',
		length: '03:20'
	},
	{
		songId: 244,
		title: 'Welcome To The Black Parade',
		artistId: 9,
		albumId: 23,
		trackNum: '5',
		length: '05:11'
	},
	{
		songId: 245,
		title: 'I Don\'t Love You',
		artistId: 9,
		albumId: 23,
		trackNum: '6',
		length: '03:58'
	},
	{
		songId: 246,
		title: 'House Of Wolves',
		artistId: 9,
		albumId: 23,
		trackNum: '7',
		length: '03:04'
	},
	{
		songId: 247,
		title: 'Cancer',
		artistId: 9,
		albumId: 23,
		trackNum: '8',
		length: '02:23'
	},
	{
		songId: 248,
		title: 'Mama',
		artistId: 9,
		albumId: 23,
		trackNum: '9',
		length: '00:23'
	},
	{
		songId: 249,
		title: 'Sleep',
		artistId: 9,
		albumId: 23,
		trackNum: '10',
		length: '04:43'
	},
	{
		songId: 250,
		title: 'Teenagers',
		artistId: 9,
		albumId: 23,
		trackNum: '11',
		length: '02:41'
	},
	{
		songId: 251,
		title: 'Disenchanted',
		artistId: 9,
		albumId: 23,
		trackNum: '12',
		length: '04:55'
	},
	{
		songId: 252,
		title: 'Famous Last Words',
		artistId: 9,
		albumId: 23,
		trackNum: '13',
		length: '04:59'
	},
	{
		songId: 253,
		title: 'Blood',
		artistId: 9,
		albumId: 23,
		trackNum: '14',
		length: '01:26'
	},
	{
		songId: 254,
		title: 'Drag Queen',
		artistId: 1,
		albumId: 25,
		trackNum: '1',
		length: '04:34'
	},
	{
		songId: 255,
		title: 'OBLIVIUS',
		artistId: 1,
		albumId: 25,
		trackNum: '2',
		length: '04:59'
	},
	{
		songId: 256,
		title: 'Threat of Joy',
		artistId: 1,
		albumId: 25,
		trackNum: '3',
		length: '04:25'
	},
	{
		songId: 257,
		title: 'OBLIVIUS (Moretii Remix)',
		artistId: 1,
		albumId: 25,
		trackNum: '4',
		length: '05:32'
	},
	{
		songId: 258,
		title: 'Around The World',
		artistId: 11,
		albumId: 26,
		trackNum: '1',
		length: '03:58'
	},
	{
		songId: 259,
		title: 'Parallel Universe',
		artistId: 11,
		albumId: 26,
		trackNum: '2',
		length: '04:29'
	},
	{
		songId: 260,
		title: 'Scar Tissue',
		artistId: 11,
		albumId: 26,
		trackNum: '3',
		length: '03:35'
	},
	{
		songId: 261,
		title: 'Otherside',
		artistId: 11,
		albumId: 26,
		trackNum: '4',
		length: '04:15'
	},
	{
		songId: 262,
		title: 'Get On Top',
		artistId: 11,
		albumId: 26,
		trackNum: '5',
		length: '03:18'
	},
	{
		songId: 263,
		title: 'Californication',
		artistId: 11,
		albumId: 26,
		trackNum: '6',
		length: '05:29'
	},
	{
		songId: 264,
		title: 'Easily',
		artistId: 11,
		albumId: 26,
		trackNum: '7',
		length: '03:51'
	},
	{
		songId: 265,
		title: 'Porcelain',
		artistId: 11,
		albumId: 26,
		trackNum: '8',
		length: '02:43'
	},
	{
		songId: 266,
		title: 'Emit Remmus',
		artistId: 11,
		albumId: 26,
		trackNum: '9',
		length: '04:00'
	},
	{
		songId: 267,
		title: 'I Like Dirt',
		artistId: 11,
		albumId: 26,
		trackNum: '10',
		length: '02:37'
	},
	{
		songId: 268,
		title: 'This Velvet Glove',
		artistId: 11,
		albumId: 26,
		trackNum: '11',
		length: '03:45'
	},
	{
		songId: 269,
		title: 'Savior',
		artistId: 11,
		albumId: 26,
		trackNum: '12',
		length: '04:52'
	},
	{
		songId: 270,
		title: 'Purple Stain',
		artistId: 11,
		albumId: 26,
		trackNum: '13',
		length: '04:13'
	},
	{
		songId: 271,
		title: 'Right On Time',
		artistId: 11,
		albumId: 26,
		trackNum: '14',
		length: '01:52'
	},
	{
		songId: 272,
		title: 'Road Trippin\'',
		artistId: 11,
		albumId: 26,
		trackNum: '15',
		length: '03:25'
	},
	{
		songId: 273,
		title: 'The Pretender',
		artistId: 7,
		albumId: 27,
		trackNum: '1',
		length: '04:34'
	},
	{
		songId: 274,
		title: 'Let It Die',
		artistId: 7,
		albumId: 27,
		trackNum: '2',
		length: '03:23'
	},
	{
		songId: 275,
		title: 'Erase-Replace',
		artistId: 7,
		albumId: 27,
		trackNum: '3',
		length: '04:27'
	},
	{
		songId: 276,
		title: 'Long Road to Ruin',
		artistId: 7,
		albumId: 27,
		trackNum: '4',
		length: '04:22'
	},
	{
		songId: 277,
		title: 'Come Alive',
		artistId: 7,
		albumId: 27,
		trackNum: '5',
		length: '03:49'
	},
	{
		songId: 278,
		title: 'Stranger Things Have Happened',
		artistId: 7,
		albumId: 27,
		trackNum: '6',
		length: '06:48'
	},
	{
		songId: 279,
		title: 'Cheer Up, Boys (Your Make Up Is Running)',
		artistId: 7,
		albumId: 27,
		trackNum: '7',
		length: '03:50'
	},
	{
		songId: 280,
		title: 'Summers\'s End',
		artistId: 7,
		albumId: 27,
		trackNum: '8',
		length: '03:39'
	},
	{
		songId: 281,
		title: 'Ballad of the Beaconsfield Miners',
		artistId: 7,
		albumId: 27,
		trackNum: '9',
		length: '05:56'
	},
	{
		songId: 282,
		title: 'Statues',
		artistId: 7,
		albumId: 27,
		trackNum: '10',
		length: '03:17'
	},
	{
		songId: 283,
		title: 'But, Honestly',
		artistId: 7,
		albumId: 27,
		trackNum: '11',
		length: '03:27'
	},
	{
		songId: 284,
		title: 'Home',
		artistId: 7,
		albumId: 27,
		trackNum: '12',
		length: '06:14'
	},
	{
		songId: 285,
		title: 'Kids',
		artistId: 8,
		albumId: 21,
		trackNum: '5',
		length: '05:03'
	},
	{
		songId: 286,
		title: 'Take a Bow',
		artistId: 3,
		albumId: 29,
		trackNum: '1',
		length: '04:35'
	},
	{
		songId: 287,
		title: 'Starlight',
		artistId: 3,
		albumId: 29,
		trackNum: '2',
		length: '03:59'
	},
	{
		songId: 286,
		title: 'Supermassive Black Hole',
		artistId: 3,
		albumId: 29,
		trackNum: '3',
		length: '03:29'
	},
	{
		songId: 287,
		title: 'Map of the Problematique',
		artistId: 3,
		albumId: 29,
		trackNum: '4',
		length: '04:28'
	},
	{
		songId: 286,
		title: 'Soldiers\'s Poem',
		artistId: 3,
		albumId: 29,
		trackNum: '5',
		length: '02:03'
	},
	{
		songId: 286,
		title: 'Invincible',
		artistId: 3,
		albumId: 29,
		trackNum: '6',
		length: '05:00'
	},
	{
		songId: 286,
		title: 'Assassin',
		artistId: 3,
		albumId: 29,
		trackNum: '7',
		length: '03:31'
	},
	{
		songId: 286,
		title: 'Exo-Politics',
		artistId: 3,
		albumId: 29,
		trackNum: '8',
		length: '03:53'
	},
	{
		songId: 286,
		title: 'City of Delusion',
		artistId: 3,
		albumId: 29,
		trackNum: '9',
		length: '04:48'
	},
	{
		songId: 286,
		title: 'Hoodoo',
		artistId: 3,
		albumId: 29,
		trackNum: '10',
		length: '03:43'
	},
	{
		songId: 286,
		title: 'Knights of Cydonia',
		artistId: 3,
		albumId: 29,
		trackNum: '11',
		length: '06:06'
	},
	{
		songId: 287,
		title: 'Be Above It',
		artistId: 2,
		albumId: 30,
		trackNum: '1',
		length: '03:21'
	},
	{
		songId: 288,
		title: 'Endors Toi',
		artistId: 2,
		albumId: 30,
		trackNum: '2',
		length: '03:06'
	},
	{
		songId: 289,
		title: 'Apocalypse Dreams',
		artistId: 2,
		albumId: 30,
		trackNum: '3',
		length: '05:56'
	},
	{
		songId: 290,
		title: 'Mind Mischief',
		artistId: 2,
		albumId: 30,
		trackNum: '4',
		length: '04:31'
	},
	{
		songId: 291,
		title: 'Music to Walk Home By',
		artistId: 2,
		albumId: 30,
		trackNum: '5',
		length: '05:21'
	},
	{
		songId: 292,
		title: 'Why Won\'t They Talk to Me?',
		artistId: 2,
		albumId: 30,
		trackNum: '6',
		length: '04:46'
	},
	{
		songId: 293,
		title: 'Feels Like We Only Go Backwards',
		artistId: 2,
		albumId: 30,
		trackNum: '7',
		length: '03:12'
	},
	{
		songId: 294,
		title: 'Keep on Lying',
		artistId: 2,
		albumId: 30,
		trackNum: '8',
		length: '05:54'
	},
	{
		songId: 295,
		title: 'Elephant',
		artistId: 2,
		albumId: 30,
		trackNum: '9',
		length: '03:31'
	},
	{
		songId: 296,
		title: 'She Just Won\'t Believe Me',
		artistId: 2,
		albumId: 30,
		trackNum: '10',
		length: '00:57'
	},
	{
		songId: 297,
		title: 'Nothing That Has Happened So Far Has been Anything We Could Control',
		artistId: 2,
		albumId: 30,
		trackNum: '11',
		length: '06:01'
	},
	{
		songId: 298,
		title: 'Sun\'s Coming Up',
		artistId: 2,
		albumId: 30,
		trackNum: '12',
		length: '05:20'
	},
	{
		songId: 299,
		title: 'In the Flesh?',
		artistId: 15,
		albumId: 31,
		trackNum: '1',
		length: '03:16'
	},
	{
		songId: 300,
		title: 'The Thin Ice',
		artistId: 15,
		albumId: 31,
		trackNum: '2',
		length: '02:27'
	},
	{
		songId: 301,
		title: 'Another Brick in the Wall (Part I)',
		artistId: 15,
		albumId: 31,
		trackNum: '3',
		length: '03:21'
	},
	{
		songId: 302,
		title: 'The Happiest Days of Our Lives',
		artistId: 15,
		albumId: 31,
		trackNum: '4',
		length: '01:46'
	},
	{
		songId: 303,
		title: 'Another Brick in the Wall (Part II)',
		artistId: 15,
		albumId: 31,
		trackNum: '5',
		length: '03:59'
	},
	{
		songId: 304,
		title: 'Mother',
		artistId: 15,
		albumId: 31,
		trackNum: '6',
		length: '05:32'
	},
	{
		songId: 305,
		title: 'Goodbye Blue Sky',
		artistId: 15,
		albumId: 31,
		trackNum: '7',
		length: '02:45'
	},
	{
		songId: 306,
		title: 'Empty Spaces',
		artistId: 15,
		albumId: 31,
		trackNum: '8',
		length: '02:10'
	},
	{
		songId: 307,
		title: 'Yound Lust',
		artistId: 15,
		albumId: 31,
		trackNum: '9',
		length: '03:25'
	},
	{
		songId: 308,
		title: 'One of My Turns',
		artistId: 15,
		albumId: 31,
		trackNum: '10',
		length: '03:41'
	},
	{
		songId: 309,
		title: 'Don\'t Leave Me Now',
		artistId: 15,
		albumId: 31,
		trackNum: '11',
		length: '04:08'
	},
	{
		songId: 310,
		title: 'Another Brick in the Wall (Part III)',
		artistId: 15,
		albumId: 31,
		trackNum: '12',
		length: '01:48'
	},
	{
		songId: 311,
		title: 'Goodbye Cruel World',
		artistId: 15,
		albumId: 31,
		trackNum: '13',
		length: '00:48'
	},
	{
		songId: 312,
		title: 'Hey You',
		artistId: 15,
		albumId: 31,
		trackNum: '14',
		length: '04:40'
	},
	{
		songId: 313,
		title: 'Is There Anybody Out There?',
		artistId: 15,
		albumId: 31,
		trackNum: '15',
		length: '02:44'
	},
	{
		songId: 314,
		title: 'Nobody Home',
		artistId: 15,
		albumId: 31,
		trackNum: '16',
		length: '03:26'
	},
	{
		songId: 315,
		title: 'Vera',
		artistId: 15,
		albumId: 31,
		trackNum: '17',
		length: '06:23'
	},
	{
		songId: 316,
		title: 'Speak To Me',
		artistId: 15,
		albumId: 32,
		trackNum: '1',
		length: '01:30'
	},
	{
		songId: 317,
		title: 'Breathe',
		artistId: 15,
		albumId: 32,
		trackNum: '2',
		length: '02:43'
	},
	{
		songId: 318,
		title: 'On the Run',
		artistId: 15,
		albumId: 32,
		trackNum: '3',
		length: '03:30'
	},
	{
		songId: 319,
		title: 'Time',
		artistId: 15,
		albumId: 32,
		trackNum: '4',
		length: '06:53'
	},
	{
		songId: 320,
		title: 'Money',
		artistId: 15,
		albumId: 32,
		trackNum: '5',
		length: '06:30'
	},
	{
		songId: 321,
		title: 'Us and Them',
		artistId: 15,
		albumId: 32,
		trackNum: '6',
		length: '07:51'
	},
	{
		songId: 322,
		title: 'Any Colour You Like',
		artistId: 15,
		albumId: 32,
		trackNum: '7',
		length: '03:24'
	},
	{
		songId: 323,
		title: 'Brain Damage',
		artistId: 15,
		albumId: 32,
		trackNum: '8',
		length: '03:50'
	},
	{
		songId: 324,
		title: 'Eclipse',
		artistId: 15,
		albumId: 32,
		trackNum: '1',
		length: '02:03'
	},
	{
		songId: 325,
		title: 'Politik',
		artistId: 14,
		albumId: 33,
		trackNum: '1',
		length: '05:19'
	},
	{
		songId: 326,
		title: 'In My Place',
		artistId: 14,
		albumId: 33,
		trackNum: '2',
		length: '03:47'
	},
	{
		songId: 327,
		title: 'God Put A Smilie Upon Your Face',
		artistId: 14,
		albumId: 33,
		trackNum: '3',
		length: '04:57'
	},
	{
		songId: 328,
		title: 'The Scientist',
		artistId: 14,
		albumId: 33,
		trackNum: '4',
		length: '05:10'
	},
	{
		songId: 329,
		title: 'Clocks',
		artistId: 14,
		albumId: 33,
		trackNum: '5',
		length: '05:08'
	},
	{
		songId: 330,
		title: 'Daylight',
		artistId: 14,
		albumId: 33,
		trackNum: '6',
		length: '05:28'
	},
	{
		songId: 331,
		title: 'Green Eyes',
		artistId: 14,
		albumId: 33,
		trackNum: '7',
		length: '03:43'
	},
	{
		songId: 332,
		title: 'Warning Sign',
		artistId: 14,
		albumId: 33,
		trackNum: '8',
		length: '05:31'
	},
	{
		songId: 333,
		title: 'A Whisper',
		artistId: 14,
		albumId: 33,
		trackNum: '9',
		length: '03:58'
	},
	{
		songId: 334,
		title: 'A Rush Of Blood To The Head',
		artistId: 14,
		albumId: 33,
		trackNum: '10',
		length: '05:51'
	},
	{
		songId: 335,
		title: 'Amsterdam',
		artistId: 14,
		albumId: 33,
		trackNum: '11',
		length: '05:19'
	},
	{
		songId: 336,
		title: 'Rock N Roll Train',
		artistId: 16,
		albumId: 34,
		trackNum: '1',
		length: '03:22'
	},
	{
		songId: 337,
		title: 'Skies on Fire',
		artistId: 16,
		albumId: 34,
		trackNum: '2',
		length: '03:34'
	},
	{
		songId: 338,
		title: 'Big Jack',
		artistId: 16,
		albumId: 34,
		trackNum: '3',
		length: '03:57'
	},
	{
		songId: 339,
		title: 'Anyting Goes',
		artistId: 16,
		albumId: 34,
		trackNum: '4',
		length: '03:22'
	},
	{
		songId: 340,
		title: 'War Machine',
		artistId: 16,
		albumId: 34,
		trackNum: '5',
		length: '03:10'
	},
	{
		songId: 341,
		title: 'Smash N Grab',
		artistId: 16,
		albumId: 34,
		trackNum: '6',
		length: '04:06'
	},
	{
		songId: 342,
		title: 'Spoilin\' for a Fight',
		artistId: 16,
		albumId: 34,
		trackNum: '7',
		length: '03:17'
	},
	{
		songId: 343,
		title: 'Wheels',
		artistId: 16,
		albumId: 34,
		trackNum: '8',
		length: '03:28'
	},
	{
		songId: 344,
		title: 'Decibel',
		artistId: 16,
		albumId: 34,
		trackNum: '9',
		length: '03:34'
	},
	{
		songId: 345,
		title: 'Stromy May Day',
		artistId: 16,
		albumId: 34,
		trackNum: '10',
		length: '03:10'
	},
	{
		songId: 346,
		title: 'She Likes Rock N Roll',
		artistId: 16,
		albumId: 34,
		trackNum: '11',
		length: '03:53'
	},
	{
		songId: 347,
		title: 'Money Made',
		artistId: 16,
		albumId: 34,
		trackNum: '12',
		length: '04:15'
	},
	{
		songId: 348,
		title: 'Rock N Roll Dream',
		artistId: 16,
		albumId: 34,
		trackNum: '13',
		length: '04:41'
	},
	{
		songId: 349,
		title: 'Rocking All the Way',
		artistId: 16,
		albumId: 34,
		trackNum: '14',
		length: '03:22'
	},
	{
		songId: 350,
		title: 'Black Ice',
		artistId: 16,
		albumId: 34,
		trackNum: '15',
		length: '03:25'
	},
	{
		songId: 351,
		title: 'Hells Bells',
		artistId: 16,
		albumId: 35,
		trackNum: '1',
		length: '05:12'
	},
	{
		songId: 352,
		title: 'Shoot to Thrill',
		artistId: 16,
		albumId: 35,
		trackNum: '2',
		length: '05:17'
	},
	{
		songId: 353,
		title: 'What Do You Do For Money Honey',
		artistId: 16,
		albumId: 35,
		trackNum: '3',
		length: '03:35'
	},
	{
		songId: 354,
		title: 'Given the Dog a Bone',
		artistId: 16,
		albumId: 35,
		trackNum: '4',
		length: '03:32'
	},
	{
		songId: 355,
		title: 'Let Me Put My Love Int You',
		artistId: 16,
		albumId: 35,
		trackNum: '5',
		length: '04:15'
	},
	{
		songId: 356,
		title: 'Back in Black',
		artistId: 16,
		albumId: 35,
		trackNum: '6',
		length: '04:15'
	},
	{
		songId: 357,
		title: 'You Shook Me All Night Long',
		artistId: 16,
		albumId: 35,
		trackNum: '7',
		length: '03:30'
	},
	{
		songId: 358,
		title: 'Have A Drink On me',
		artistId: 16,
		albumId: 35,
		trackNum: '8',
		length: '03:58'
	},
	{
		songId: 359,
		title: 'Shake a Leg',
		artistId: 16,
		albumId: 35,
		trackNum: '9',
		length: '04:05'
	},
	{
		songId: 360,
		title: 'Rock and Roll Ain\'t Noise Pollution',
		artistId: 16,
		albumId: 35,
		trackNum: '10',
		length: '04:13'
	}
];

export default songsObj