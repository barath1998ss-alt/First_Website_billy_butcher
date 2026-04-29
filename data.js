const TMDB = 'https://image.tmdb.org/t/p/w500';
const TMDB_BG = 'https://image.tmdb.org/t/p/original';

const FILMS = [
  {
    id:1, slug:'the-godfather',
    title:'The Godfather', year:1972, runtime:175,
    director:'Francis Ford Coppola',
    genres:['Crime','Drama'],
    tagline:'An offer you can\'t refuse.',
    synopsis:'The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.',
    poster: TMDB+'/3bhkrj58Vtu7enYsLegHnDcdh9U.jpg',
    backdrop: TMDB_BG+'/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    scores:{ critic:97, audience:98, community:96, buzz:88 },
    worthiness:'masterpiece',
    rating:'R', language:'English', country:'USA',
    streaming:['paramount'],
    awards:['Oscar Best Picture','Oscar Best Actor','Oscar Best Adapted Screenplay'],
    cast:[
      {name:'Marlon Brando',role:'Vito Corleone',photo:TMDB+'/fuTEPMsBtV1zE98ujPONbKiYDc2.jpg'},
      {name:'Al Pacino',role:'Michael Corleone',photo:TMDB+'/keU9zeqnO8AvOHson1cS2XK1ZC5.jpg'},
      {name:'James Caan',role:'Sonny Corleone',photo:TMDB+'/mKR9NsGqzn4lzGR7M5JDEAeqNKv.jpg'},
      {name:'Diane Keaton',role:'Kay Adams',photo:TMDB+'/eDQE0VPBhOCvzIAdX4VnFNYJFHh.jpg'},
    ]
  },
  {
    id:2, slug:'the-dark-knight',
    title:'The Dark Knight', year:2008, runtime:152,
    director:'Christopher Nolan',
    genres:['Action','Crime','Drama'],
    tagline:'Why so serious?',
    synopsis:'Batman faces the Joker, a criminal mastermind who plunges Gotham into anarchy.',
    poster: TMDB+'/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop: TMDB_BG+'/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    scores:{ critic:94, audience:94, community:95, buzz:91 },
    worthiness:'masterpiece',
    rating:'PG-13', language:'English', country:'USA/UK',
    streaming:['hbo'],
    awards:['Oscar Best Supporting Actor','Oscar Best Film Editing'],
    cast:[
      {name:'Christian Bale',role:'Bruce Wayne',photo:TMDB+'/1Bm9WTXt4KBUo8MXFR2F6rkDhMC.jpg'},
      {name:'Heath Ledger',role:'The Joker',photo:TMDB+'/1Mfl3AHmGFJKfxQy3TBPt0JqNWN.jpg'},
      {name:'Gary Oldman',role:'Jim Gordon',photo:TMDB+'/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg'},
      {name:'Maggie Gyllenhaal',role:'Rachel Dawes',photo:TMDB+'/qOaStFdqJKriWHoMSqDtfkbGhWf.jpg'},
    ]
  },
  {
    id:3, slug:'inception',
    title:'Inception', year:2010, runtime:148,
    director:'Christopher Nolan',
    genres:['Sci-Fi','Action','Thriller'],
    tagline:'Your mind is the scene of the crime.',
    synopsis:'A thief who steals corporate secrets through dream-sharing technology is given a task of planting an idea.',
    poster: TMDB+'/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdrop: TMDB_BG+'/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg',
    scores:{ critic:87, audience:91, community:93, buzz:89 },
    worthiness:'crowd-favorite',
    rating:'PG-13', language:'English', country:'USA/UK',
    streaming:['hbo','netflix'],
    awards:['Oscar Best Cinematography','Oscar Best Visual Effects'],
    cast:[
      {name:'Leonardo DiCaprio',role:'Dom Cobb',photo:TMDB+'/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg'},
      {name:'Joseph Gordon-Levitt',role:'Arthur',photo:TMDB+'/zSuXCR6xCkD7MdxL0nHFqe5dCMR.jpg'},
      {name:'Elliot Page',role:'Ariadne',photo:TMDB+'/4rXqTMRMBBMf40xMnFgRNpLOBkF.jpg'},
      {name:'Tom Hardy',role:'Eames',photo:TMDB+'/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg'},
    ]
  },
  {
    id:4, slug:'interstellar',
    title:'Interstellar', year:2014, runtime:169,
    director:'Christopher Nolan',
    genres:['Sci-Fi','Drama','Adventure'],
    tagline:'Mankind was born on Earth. It was never meant to die here.',
    synopsis:'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    poster: TMDB+'/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop: TMDB_BG+'/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg',
    scores:{ critic:73, audience:86, community:91, buzz:85 },
    worthiness:'divisive',
    rating:'PG-13', language:'English', country:'USA/UK',
    streaming:['paramount'],
    awards:['Oscar Best Visual Effects'],
    cast:[
      {name:'Matthew McConaughey',role:'Cooper',photo:TMDB+'/wJiGedOCZhwmx9DezY8uwbNxmAY.jpg'},
      {name:'Anne Hathaway',role:'Brand',photo:TMDB+'/tLelKoPNiyJCSEBo1LLYL4I8GUj.jpg'},
      {name:'Jessica Chastain',role:'Murph (adult)',photo:TMDB+'/aTSCmNEFUZVuFRezBs0dFmLyOEH.jpg'},
    ]
  },
  {
    id:5, slug:'parasite',
    title:'Parasite', year:2019, runtime:132,
    director:'Bong Joon-ho',
    genres:['Thriller','Drama','Comedy'],
    tagline:'Act like you own the place.',
    synopsis:'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    poster: TMDB+'/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    backdrop: TMDB_BG+'/ApiBzeaa95TNYliSbQ8pqz4QcRN.jpg',
    scores:{ critic:99, audience:90, community:94, buzz:92 },
    worthiness:'masterpiece',
    rating:'R', language:'Korean', country:'South Korea',
    streaming:['hulu'],
    awards:['Oscar Best Picture','Oscar Best Director','Oscar Best Screenplay','Palme d\'Or'],
    cast:[
      {name:'Choi Woo-shik',role:'Ki-woo Kim',photo:TMDB+'/5aKCPjCTHlQ9nRgJOFlEOhHjUoN.jpg'},
      {name:'Song Kang-ho',role:'Ki-taek Kim',photo:TMDB+'/3NTAbAiao4JLfQKqa4J9M0iT4lq.jpg'},
    ]
  },
  {
    id:6, slug:'oppenheimer',
    title:'Oppenheimer', year:2023, runtime:180,
    director:'Christopher Nolan',
    genres:['Drama','History','Thriller'],
    tagline:'The world forever changes.',
    synopsis:'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    poster: TMDB+'/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop: TMDB_BG+'/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg',
    scores:{ critic:93, audience:91, community:94, buzz:97 },
    worthiness:'masterpiece',
    rating:'R', language:'English', country:'USA/UK',
    streaming:['peacock'],
    awards:['Oscar Best Picture','Oscar Best Director','Oscar Best Actor'],
    cast:[
      {name:'Cillian Murphy',role:'J. Robert Oppenheimer',photo:TMDB+'/dm6V24NjjvjMiCtbMkc8Y2WPm2e.jpg'},
      {name:'Emily Blunt',role:'Katherine Oppenheimer',photo:TMDB+'/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg'},
      {name:'Robert Downey Jr.',role:'Lewis Strauss',photo:TMDB+'/1YjdSym1jTG7daEP4rfQ6SKHZjS.jpg'},
    ]
  },
  {
    id:7, slug:'blade-runner-2049',
    title:'Blade Runner 2049', year:2017, runtime:164,
    director:'Denis Villeneuve',
    genres:['Sci-Fi','Drama','Mystery'],
    tagline:'The key to the future is finally unearthed.',
    synopsis:'A young blade runner discovers a long-buried secret that has the potential to plunge what\'s left of society into chaos.',
    poster: TMDB+'/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
    backdrop: TMDB_BG+'/ilRyazdMJwN05exqhwK4tMKBYZs.jpg',
    scores:{ critic:88, audience:81, community:87, buzz:78 },
    worthiness:'critics-pick',
    rating:'R', language:'English', country:'USA',
    streaming:['amazon'],
    awards:['Oscar Best Cinematography','Oscar Best Visual Effects'],
    cast:[
      {name:'Ryan Gosling',role:'K',photo:TMDB+'/lyUyVARjOef6Q9Hbou6yKtVMbHr.jpg'},
      {name:'Harrison Ford',role:'Rick Deckard',photo:TMDB+'/7CcoVFTogQgex2kJkXKMe8qHZrC.jpg'},
    ]
  },
  {
    id:8, slug:'whiplash',
    title:'Whiplash', year:2014, runtime:107,
    director:'Damien Chazelle',
    genres:['Drama','Music'],
    tagline:'The road to greatness can take you to the edge.',
    synopsis:'A promising young drummer enrolls at a cut-throat music conservatory where his life will be shaped by an abusive instructor.',
    poster: TMDB+'/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    backdrop: TMDB_BG+'/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg',
    scores:{ critic:94, audience:95, community:96, buzz:87 },
    worthiness:'masterpiece',
    rating:'R', language:'English', country:'USA',
    streaming:['netflix'],
    awards:['Oscar Best Film Editing','Oscar Best Supporting Actor'],
    cast:[
      {name:'Miles Teller',role:'Andrew Neiman',photo:TMDB+'/oM7tFCsHCYkQyfKO9pHGEe0q4YP.jpg'},
      {name:'J.K. Simmons',role:'Terence Fletcher',photo:TMDB+'/7qop80gpjHkKQYBbzpqiMXJK3fv.jpg'},
    ]
  },
  {
    id:9, slug:'la-la-land',
    title:'La La Land', year:2016, runtime:128,
    director:'Damien Chazelle',
    genres:['Drama','Music','Romance'],
    tagline:'Here\'s to the fools who dream.',
    synopsis:'A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.',
    poster: TMDB+'/uDO8zWDhfWwoFdKS4fzkUJt0Bs0.jpg',
    backdrop: TMDB_BG+'/nadGENSboB7TIqHBKmPbuagBgm1.jpg',
    scores:{ critic:91, audience:81, community:84, buzz:82 },
    worthiness:'critics-pick',
    rating:'PG-13', language:'English', country:'USA',
    streaming:['netflix'],
    awards:['Oscar Best Director','Oscar Best Actress','Oscar Best Cinematography'],
    cast:[
      {name:'Ryan Gosling',role:'Sebastian Wilder',photo:TMDB+'/lyUyVARjOef6Q9Hbou6yKtVMbHr.jpg'},
      {name:'Emma Stone',role:'Mia Dolan',photo:TMDB+'/p7rZzMqfHNQQBk7nDh6n8KdO2UZ.jpg'},
    ]
  },
  {
    id:10, slug:'everything-everywhere',
    title:'Everything Everywhere All at Once', year:2022, runtime:139,
    director:'Daniel Kwan & Daniel Scheinert',
    genres:['Sci-Fi','Comedy','Drama'],
    tagline:'The universe is so much bigger than you realize.',
    synopsis:'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes.',
    poster: TMDB+'/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
    backdrop: TMDB_BG+'/feSiISwgEpVzR1v3zv2n2LulWRk.jpg',
    scores:{ critic:95, audience:88, community:92, buzz:94 },
    worthiness:'masterpiece',
    rating:'R', language:'English', country:'USA',
    streaming:['showtime'],
    awards:['Oscar Best Picture','Oscar Best Director','Oscar Best Actress'],
    cast:[
      {name:'Michelle Yeoh',role:'Evelyn Wang',photo:TMDB+'/gXMoNNZqK5wqjOqpvWJdQ5yolKt.jpg'},
      {name:'Ke Huy Quan',role:'Waymond Wang',photo:TMDB+'/uh4g85qbQGZRMFSHO5vBBKLs9J.jpg'},
    ]
  },
  {
    id:11, slug:'arrival',
    title:'Arrival', year:2016, runtime:116,
    director:'Denis Villeneuve',
    genres:['Sci-Fi','Drama','Mystery'],
    tagline:'Why are they here?',
    synopsis:'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
    poster: TMDB+'/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg',
    backdrop: TMDB_BG+'/3ntdBpNqblk9BVjPXbTc3bBp3DL.jpg',
    scores:{ critic:94, audience:82, community:88, buzz:81 },
    worthiness:'critics-pick',
    rating:'PG-13', language:'English', country:'USA',
    streaming:['netflix'],
    awards:['Oscar Best Film Editing'],
    cast:[
      {name:'Amy Adams',role:'Louise Banks',photo:TMDB+'/ppfu0gGlOcD8QwGLyVkR7QhJ9v5.jpg'},
      {name:'Jeremy Renner',role:'Ian Donnelly',photo:TMDB+'/ycAV6mUAVbB6b0FDGbCNsIpFwIe.jpg'},
    ]
  },
  {
    id:12, slug:'mad-max-fury-road',
    title:'Mad Max: Fury Road', year:2015, runtime:120,
    director:'George Miller',
    genres:['Action','Adventure','Sci-Fi'],
    tagline:'What a lovely day!',
    synopsis:'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.',
    poster: TMDB+'/hA2ple9q4qnwxp3hKVNhroipsir.jpg',
    backdrop: TMDB_BG+'/phszHPFnhmSgJj3Gs5AHAEp50P7.jpg',
    scores:{ critic:97, audience:86, community:91, buzz:89 },
    worthiness:'masterpiece',
    rating:'R', language:'English', country:'Australia/USA',
    streaming:['hbo'],
    awards:['Oscar Best Film Editing','Oscar Best Production Design','Oscar Best Costume Design'],
    cast:[
      {name:'Tom Hardy',role:'Max Rockatansky',photo:TMDB+'/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg'},
      {name:'Charlize Theron',role:'Imperator Furiosa',photo:TMDB+'/ouPm6MjJgRSYxEIyMdPLUWN2vWl.jpg'},
    ]
  }
];

const USERS = [
  {
    id:1, username:'cinephile_max', name:'Maxwell Park',
    avatar:null, avatarColor:'linear-gradient(135deg,#7C6FCD,#E8C97A)',
    bio:'Chasing the perfect frame. Letterboxd refugee. 🎬',
    stats:{ films:1247, reviews:342, lists:28, followers:2891 },
    archetype:'The Auteur',
    genres:{ Drama:92, Thriller:78, Sci-Fi:85, Horror:60, Comedy:45, Romance:38, Documentary:72 },
    topDirectors:['Kubrick','Tarkovsky','Bergman','Lynch','Villeneuve'],
    recentFilms:[1,4,6,11,3]
  },
  {
    id:2, username:'sofia_watches', name:'Sofia Chen',
    avatar:null, avatarColor:'linear-gradient(135deg,#E05C5C,#E8C97A)',
    bio:'MUBI addict. Slowburn enthusiast. Will cry at anything.',
    stats:{ films:891, reviews:215, lists:41, followers:1204 },
    archetype:'Festival Hunter',
    genres:{ Drama:95, Romance:88, Documentary:75, Horror:30, Sci-Fi:42, Comedy:60, Thriller:65 },
    topDirectors:['Sciamma','Campion','Akerman','Varda','Mungiu'],
    recentFilms:[5,9,10,2,8]
  },
  {
    id:3, username:'blockbuster_ben', name:'Ben Torres',
    avatar:null, avatarColor:'linear-gradient(135deg,#4ECDC4,#7C6FCD)',
    bio:'IMAX junkie. MCU defender. Big screen or nothing.',
    stats:{ films:632, reviews:88, lists:12, followers:445 },
    archetype:'Genre Omnivore',
    genres:{ Action:97, Sci-Fi:89, Comedy:72, Horror:80, Drama:55, Thriller:84, Romance:30 },
    topDirectors:['Nolan','Villeneuve','Spielberg','Cameron','Miller'],
    recentFilms:[2,3,6,12,7]
  }
];

const REVIEWS = [
  {
    id:1, filmId:1, userId:1,
    rating:5, text:'Coppola\'s masterwork is not merely a great crime film — it is one of the supreme artistic achievements in American cinema. Every frame is a painting, every performance a revelation. The way it explores power, loyalty, and the corruption of the American dream remains as devastating today as in 1972.',
    helpful:2341, date:'2024-01-15', spoiler:false
  },
  {
    id:2, filmId:1, userId:2,
    rating:5, text:'Watched for the fifth time last night. The transformation of Michael Corleone remains one of cinema\'s greatest arcs. Pacino\'s stillness in the early scenes — the way he\'s processing, calculating — makes the baptism sequence absolutely shattering.',
    helpful:1892, date:'2024-02-22', spoiler:false
  },
  {
    id:3, filmId:2, userId:3,
    rating:5, text:'Heath Ledger did something no actor should be able to do — he made pure chaos feel philosophical. Every scene he\'s in becomes a masterclass in controlled anarchy. This film still hits like a freight train sixteen years later.',
    helpful:3102, date:'2023-11-08', spoiler:false
  },
  {
    id:4, filmId:6, userId:1,
    rating:4, text:'Nolan\'s most technically impressive work. The IMAX sequences are genuinely breathtaking, and Cillian Murphy carries this massive production on his shoulders with extraordinary subtlety. The Trinity sequence alone is worth the price of admission.',
    helpful:987, date:'2023-08-12', spoiler:false
  },
  {
    id:5, filmId:5, userId:2,
    rating:5, text:'Parasite is the rare film that gets better every time you watch it. What reads as dark comedy becomes something far more tragic. Bong Joon-ho engineered something that works on every conceivable level simultaneously.',
    helpful:1567, date:'2023-09-30', spoiler:false
  }
];

const MOODS = [
  { id:'thrilling', label:'Thrilling', icon:'⚡', color:'var(--crimson)', films:[2,3,12,7,6] },
  { id:'emotional', label:'Emotional', icon:'💙', color:'var(--teal)', films:[1,4,9,10,11] },
  { id:'mind-bending', label:'Mind-Bending', icon:'🌀', color:'var(--violet)', films:[3,4,11,7] },
  { id:'epic', label:'Epic', icon:'🌅', color:'var(--gold)', films:[1,4,6,12,3] },
  { id:'funny', label:'Funny', icon:'😂', color:'var(--emerald)', films:[10,5,9] },
  { id:'romantic', label:'Romantic', icon:'🌹', color:'#E8729A', films:[9,11] },
  { id:'dark', label:'Dark', icon:'🌑', color:'#8899BB', films:[2,5,1,7,8] },
  { id:'artistic', label:'Artistic', icon:'🎨', color:'var(--gold-bright)', films:[5,11,9,1] },
];

const LISTS = [
  { id:1, userId:1, title:'The Directors Who Changed Everything', count:25, likes:891 },
  { id:2, userId:2, title:'Films That Made Me Cry in Public', count:18, likes:2341 },
  { id:3, userId:3, title:'Best Action Sequences Ever Committed to Film', count:32, likes:445 },
  { id:1, userId:1, title:'Essential 21st Century Cinema', count:50, likes:1203 },
];

const DIARY_ENTRIES = [
  { date:'2024-04-28', filmId:6, rating:4, rewatch:false, note:'Absolutely floored by the Trinity test sequence.' },
  { date:'2024-04-25', filmId:10, rating:5, rewatch:true, note:'Even better second time. The hot dog fingers universe wrecked me.' },
  { date:'2024-04-21', filmId:5, rating:5, rewatch:false, note:'Need to process this for a week.' },
  { date:'2024-04-18', filmId:2, rating:5, rewatch:true, note:'Heath Ledger is genuinely terrifying.' },
  { date:'2024-04-14', filmId:8, rating:5, rewatch:false, note:'Simmons is a force of nature.' },
  { date:'2024-04-10', filmId:1, rating:5, rewatch:true, note:'The greatest American film. Period.' },
  { date:'2024-04-05', filmId:11, rating:4, rewatch:false, note:'The ending recontextualises everything.' },
  { date:'2024-03-30', filmId:3, rating:4, rewatch:true, note:'Still questioning the ending.' },
  { date:'2024-03-25', filmId:4, rating:5, rewatch:false, note:'Watch it on the biggest screen possible.' },
  { date:'2024-03-20', filmId:9, rating:4, rewatch:false, note:'Gorgeous but I wanted more.' },
  { date:'2024-03-15', filmId:7, rating:4, rewatch:false, note:'The most visually stunning film of the decade.' },
  { date:'2024-03-10', filmId:12, rating:5, rewatch:true, note:'What a lovely day!' },
];

const WORTHINESS_META = {
  'masterpiece':     { icon:'🏆', label:'Masterpiece',             color:'var(--gold)',    desc:'An essential work. Watch it immediately.' },
  'critics-pick':    { icon:'🎭', label:'Critics\' Pick',          color:'var(--violet)',  desc:'Celebrated by critics. Rewards patient viewing.' },
  'crowd-favorite':  { icon:'🔥', label:'Crowd Favorite',          color:'var(--crimson)', desc:'Beloved by audiences worldwide. Pure entertainment.' },
  'divisive':        { icon:'⚔️', label:'Divisive But Fascinating', color:'var(--teal)',   desc:'Sparks fierce debate. Form your own opinion.' },
};

function getFilmById(id)    { return FILMS.find(f=>f.id===id); }
function getFilmBySlug(s)   { return FILMS.find(f=>f.slug===s); }
function getReviews(filmId) { return REVIEWS.filter(r=>r.filmId===filmId); }
function getUserById(id)    { return USERS.find(u=>u.id===id); }
function getFilmsByMood(mood){ const m=MOODS.find(x=>x.id===mood); return m?m.films.map(getFilmById).filter(Boolean):[]; }
function getTrending()      { return FILMS.slice(0,8); }
function getHidden()        { return [FILMS[6],FILMS[7],FILMS[10],FILMS[11]]; }
function ratingToStars(r)   { return '★'.repeat(r)+'☆'.repeat(5-r); }
function scoreColor(s)      { return s>=90?'var(--emerald)':s>=75?'var(--gold)':s>=60?'var(--teal)':'var(--crimson)'; }
