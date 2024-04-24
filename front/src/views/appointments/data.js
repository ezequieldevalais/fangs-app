export const EVENTS = [
  {
    event_id: 1,
    title: 'Mario',
    start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
    admin_id: 1
  },
  {
    event_id: 2,
    title: 'Event 2',
    start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    admin_id: 2
  },
  {
    event_id: 3,
    title: 'Event 3',
    start: new Date(new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(new Date().getDate() - 1)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    admin_id: 3
  },
  {
    event_id: 4,
    title: 'Event 4',
    start: new Date(new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(new Date().getDate() - 2)),
    end: new Date(new Date(new Date(new Date().setHours(10)).setMinutes(0)).setDate(new Date().getDate() - 2)),
    admin_id: 2
  },
  {
    event_id: 5,
    title: 'NO DISPONIBLE',
    start: new Date(new Date(new Date(new Date().setHours(10)).setMinutes(0)).setDate(new Date().getDate() - 4)),
    end: new Date(new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(new Date().getDate() + -2)),
    admin_id: 1
  },
  {
    event_id: 6,
    title: 'Event 6',
    start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    admin_id: 2
  },
  {
    event_id: 7,
    title: 'Event 7',
    start: new Date(new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(new Date().getDate() - 1)),
    end: new Date(new Date(new Date(new Date().setHours(12)).setMinutes(0)).setDate(new Date().getDate() - 1)),
    admin_id: 3
  },
  {
    event_id: 8,
    title: 'Event 8',
    start: new Date(new Date(new Date(new Date().setHours(13)).setMinutes(0)).setDate(new Date().getDate() - 1)),
    end: new Date(new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(new Date().getDate() - 1)),
    admin_id: 4
  },
  {
    event_id: 9,
    title: 'Maria',
    start: new Date(new Date(new Date(new Date().setHours(13)).setMinutes(0)).setDate(new Date().getDate() + 1)),
    end: new Date(new Date(new Date(new Date().setHours(15)).setMinutes(30)).setDate(new Date().getDate() + 1)),
    admin_id: 1
  },
  {
    event_id: 10,
    title: 'Event 9',
    start: new Date(new Date(new Date(new Date().setHours(15)).setMinutes(0)).setDate(new Date().getDate() + 1)),
    end: new Date(new Date(new Date(new Date().setHours(16)).setMinutes(30)).setDate(new Date().getDate() + 1)),
    admin_id: 2
  },
  {
    event_id: 11,
    title: 'Extraccion Carla',
    start: new Date(new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(new Date().getDate() - 1)),
    end: new Date(new Date(new Date(new Date().setHours(12)).setMinutes(30)).setDate(new Date().getDate() - 1)),
    admin_id: 1
  },
  {
    event_id: 12,
    title: 'Turno pepe',
    start: new Date(new Date(new Date(new Date().setHours(13)).setMinutes(0)).setDate(new Date().getDate() - 1)),
    end: new Date(new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(new Date().getDate() - 1)),
    admin_id: 1
  },
  {
    event_id: 13,
    title: 'Sobreturno pepita',
    start: new Date(new Date(new Date(new Date().setHours(13)).setMinutes(30)).setDate(new Date().getDate() - 1)),
    end: new Date(new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(new Date().getDate() - 1)),
    admin_id: 1
  }
];

export const RESOURCES = [
  {
    admin_id: 1,
    title: 'Clara',
    mobile: '555666777',
    avatar: 'https://picsum.photos/200/300',
    color: '#84a8e3'
  },
  {
    admin_id: 2,
    title: 'Luisi',
    mobile: '545678354',
    avatar: 'https://picsum.photos/200/300',
    color: '#9fe384'
  },
  {
    admin_id: 3,
    title: 'Coni',
    mobile: '543678433',
    avatar: 'https://picsum.photos/200/300',
    color: '#e38487'
  }
];
