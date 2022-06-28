const Timezones = [
  {
    description: '(GMT) Universal Time, Coordinated',
    id: 0,
  },
  {
    description: '(GMT-05:00) Eastern Time (US & Canada)',
    id: 1,
  },
  {
    description: '(GMT-05:00) Indiana (East)',
    id: 2,
  },
  {
    description: '(GMT-06:00) Central Time (US & Canada)',
    id: 3,
  },
  {
    description: '(GMT-07:00) Mountain Time (US & Canada)',
    id: 4,
  },
  {
    description: '(GMT-07:00) Arizona',
    id: 5,
  },
  {
    description: '(GMT-08:00) Pacific Time (US & Canada)',
    id: 6,
  },
  {
    description: '(GMT-09:00) Alaska',
    id: 7,
  },
  {
    description: '(GMT-10:00) Hawaii',
    id: 8,
  },
  {
    description: '(GMT-12:00) International Date Line West',
    id: 9,
  },
  {
    description: '(GMT-11:00) Midway Island, Samoa',
    id: 10,
  },
  {
    description: '(GMT-08:00) Tijuana, Baja California',
    id: 11,
  },
  {
    description: '(GMT-07:00) Chihuahua, La Paz, Mazatlan',
    id: 12,
  },
  {
    description: '(GMT-06:00) Saskatchewan',
    id: 13,
  },
  {
    description: '(GMT-06:00) Central America',
    id: 14,
  },
  {
    description: '(GMT-06:00) Guadalajara, Mexico City, Monterrey',
    id: 15,
  },
  {
    description: '(GMT-05:00) Bogota, Lima, Quito, Rio Branco',
    id: 16,
  },
  {
    description: '(GMT-04:30) Caracas',
    id: 17,
  },
  {
    description: '(GMT-04:00) Atlantic Time (Canada)',
    id: 18,
  },
  {
    description: '(GMT-04:00) Manaus',
    id: 19,
  },
  {
    description: '(GMT-04:00) Santiago',
    id: 20,
  },
  {
    description: '(GMT-04:00) La Paz',
    id: 21,
  },
  {
    description: '(GMT-03:30) Newfoundland',
    id: 22,
  },
  {
    description: '(GMT-03:00) Buenos Aires',
    id: 23,
  },
  {
    description: '(GMT-03:00) Brasilia',
    id: 24,
  },
  {
    description: '(GMT-03:00) Greenland',
    id: 25,
  },
  {
    description: '(GMT-03:00) Montevideo',
    id: 26,
  },
  {
    description: '(GMT-03:00) Georgetown',
    id: 27,
  },
  {
    description: '(GMT-02:00) Mid-Atlantic',
    id: 28,
  },
  {
    description: '(GMT-01:00) Azores',
    id: 29,
  },
  {
    description: '(GMT-01:00) Cape Verde Is.',
    id: 30,
  },
  {
    description: '(GMT) Monrovia, Reykjavik',
    id: 31,
  },
  {
    description: '(GMT) Casablanca',
    id: 32,
  },
  {
    description: '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
    id: 33,
  },
  {
    description: '(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb',
    id: 34,
  },
  {
    description: '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris',
    id: 35,
  },
  {
    description: '(GMT+01:00) West Central Africa',
    id: 36,
  },
  {
    description: '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    id: 37,
  },
  {
    description: '((GMT+02:00) Minsk',
    id: 38,
  },
  {
    description: '(GMT+02:00) Cairo',
    id: 39,
  },
  {
    description: '(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
    id: 40,
  },
  {
    description: '(GMT+02:00) Athens, Bucharest, Istanbul',
    id: 41,
  },
  {
    description: '(GMT+02:00) Jerusalem',
    id: 42,
  },
  {
    description: '(GMT+02:00) Amman',
    id: 43,
  },
  {
    description: '(GMT+02:00) Beirut',
    id: 44,
  },
  {
    description: '(GMT+02:00) Windhoek',
    id: 45,
  },
  {
    description: '(GMT+02:00) Harare, Pretoria',
    id: 46,
  },
  {
    description: '(GMT+03:00) Kuwait, Riyadh',
    id: 47,
  },
  {
    description: '(GMT+03:00) Baghdad',
    id: 48,
  },
  {
    description: '(GMT+03:00) Nairobi',
    id: 49,
  },
  {
    description: '(GMT+03:00) Tbilisi',
    id: 50,
  },
  {
    description: '(GMT+03:00) Moscow, St. Petersburg, Volgograd',
    id: 51,
  },
  {
    description: '(GMT+03:30) Tehran',
    id: 52,
  },
  {
    description: '(GMT+04:00) Abu Dhabi, Muscat',
    id: 53,
  },
  {
    description: '(GMT+04:00) Baku',
    id: 54,
  },
  {
    description: '(GMT+04:00) Yerevan',
    id: 55,
  },
  {
    description: '(GMT+05:00) Ekaterinburg',
    id: 56,
  },
  {
    description: '(GMT+05:00) Islamabad, Karachi',
    id: 57,
  },
  {
    description: '(GMT+05:00) Tashkent',
    id: 58,
  },
  {
    description: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
    id: 59,
  },
  {
    description: '(GMT+05:30) Sri Jayawardenepura',
    id: 60,
  },
  {
    description: '(GMT+06:00) Astana, Dhaka',
    id: 61,
  },
  {
    description: '(GMT+06:00) Almaty, Novosibirsk',
    id: 62,
  },
  {
    description: '(GMT+06:30) Yangon (Rangoon)',
    id: 63,
  },
  {
    description: '(GMT+07:00) Krasnoyarsk',
    id: 64,
  },
  {
    description: '(GMT+07:00) Bangkok, Hanoi, Jakarta',
    id: 65,
  },
  {
    description: '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
    id: 66,
  },
  {
    description: '(GMT+08:00) Irkutsk, Ulaan Bataar',
    id: 67,
  },
  {
    description: '(GMT+08:00) Kuala Lumpur, Singapore',
    id: 68,
  },
  {
    description: '(GMT+08:00) Taipei',
    id: 69,
  },
  {
    description: '(GMT+08:00) Perth',
    id: 70,
  },
  {
    description: '(GMT+09:00) Seoul',
    id: 71,
  },
  {
    description: '(GMT+09:00) Osaka, Sapporo, Tokyo',
    id: 72,
  },
  {
    description: '(GMT+09:00) Yakutsk',
    id: 73,
  },
  {
    description: '(GMT+09:30) Darwin',
    id: 74,
  },
  {
    description: '(GMT+09:30) Adelaide',
    id: 75,
  },
  {
    description: '(GMT+10:00) Canberra, Melbourne, Sydney',
    id: 76,
  },
  {
    description: '(GMT+10:00) Brisbane',
    id: 77,
  },
  {
    description: '(GMT+10:00) Hobart',
    id: 78,
  },
  {
    description: '(GMT+10:00) Vladivostok',
    id: 79,
  },
  {
    description: '(GMT+10:00) Guam, Port Moresby',
    id: 80,
  },
  {
    description: '(GMT+11:00) Magadan, Solomon Is., New Caledonia',
    id: 81,
  },
  {
    description: '(GMT+12:00) Fiji, Kamchatka, Marshall Is',
    id: 82,
  },
  {
    description: '(GMT+12:00) Auckland, Wellington',
    id: 83,
  },
  {
    description: '(GMT+13:00) Nukualofa',
    id: 84,
  },
  {
    description: '(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London',
    id: 85,
  },
];

export default Timezones;
