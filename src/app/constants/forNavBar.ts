export const Menus = [
  { title: 'Home', submenu: false, path: '/' },
  { title: 'News', submenu: false, path: '/news' },
  {
    title: 'Resources',
    submenu: true,
    submenuItems: [
      { title: 'Events', path: '/events' },
      { title: 'Clubs', path: '/clubs' },
      { title: 'Mentors', path: '/mentors' },
    ],
  },
  { title: 'About Us', submenu: false, path: '/aboutus' },
]

export const Languages = [{ title: 'Vietnamese' }, { title: 'English' }]
