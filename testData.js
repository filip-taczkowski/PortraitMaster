const Photo = require('./models/photo.model');

const loadTestData = async () => {

  const data = [
    {
      title: 'Shades of colors',
      author: 'Thanicka Milton',
      email: 'thanickamilton@example.com',
      src: 'photo-1529626455594-4ff0802cfb7e.jpg',
      votes: 0,
    },
    {
      title: 'Look through the sun',
      author: 'Dustin Martinez',
      email: 'dustinmartinez@example.com',
      src: 'photo-1508474722893-c3ccb8918d39.jpg',
      votes: 0,
    },
    {
      title: 'Just another day',
      author: 'Dustin Martinez',
      email: 'dustinmartinez@example.com',
      src: 'photo-1552642986-ccb41e7059e7.jpg',
      votes: 0,
    },
    {
      title: 'the Pro',
      author: 'Ronald Tomasson',
      email: 'prophoto@example.com',
      src: 'photo-1553267751-1c148a7280a1.jpg',
      votes: 0,
    },
    {
      title: 'Pink, pink, PINK!',
      author: 'Katie Dolberg',
      email: 'katie123@example.com',
      src: 'photo-1498842812179-c81beecf902c.jpg',
      votes: 0,
    },
    {
      title: 'Floowers!',
      author: 'Tabitha Jones',
      email: 'contestemail3256@example.com',
      src: 'photo-1492633423870-43d1cd2775eb.jpg',
      votes: 0,
    }
  ];

try {
    let counter = await Photo.countDocuments();
    if(counter === 0) {
      console.log('No photos. Loading example data...');
      await Photo.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log(`Couldn't load test data`, err);
  }

};

module.exports = loadTestData;
