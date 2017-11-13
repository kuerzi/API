const _ = require('lodash');
const faker = require('faker');
const unsplashTopics = [
  'love',
  'family',
  'spring',
  'business',
  'nature',
  'travel',
  'happy',
  'landscape',
  'health',
  'friends',
  'computer',
  'autumn',
  'space',
  'animal',
  'smile',
  'face',
  'people',
  'portrait',
  'amazing'
];
let unsplashTopicsTmp = [];

module.exports = {
  randomItem: (items) => {
    return items[_.shuffle(_.keys(items)).pop()];
  },
  randomUnsplashUrl: () => {
    if (unsplashTopicsTmp.length < 2) {
      unsplashTopicsTmp = _.shuffle(unsplashTopics);
    }
    return 'https://source.unsplash.com/daily?' + unsplashTopicsTmp.pop() + ',' + unsplashTopicsTmp.pop();
  },
  randomCategories: (seederstore) => {
    const count = Math.round(Math.random() * 3);
    let categorieIds = _.shuffle(_.keys(seederstore.categories));
    let ids = [];
    for (let i = 0; i < count; i++) {
      ids.push(categorieIds.pop());
    }
    return ids;
  },
  randomAddresses: () => {
    const count = Math.round(Math.random() * 3);
    let addresses = [];
    for (let i = 0; i < count; i++) {
      addresses.push({
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        street: faker.address.streetAddress(),
        country: faker.address.country(),
        lat: 54.032726 - (Math.random() * 10),
        lng: 6.558838 + (Math.random() * 10)
      });
    }
    return addresses;
  }
};