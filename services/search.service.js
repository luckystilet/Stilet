import axios from 'axios';

/**
 * @type  GET
 * @desc  get countries list
 */
export const Countries = async () => {
  return new Promise((resolve, reject) => {
    axios.get('https://api.choother.com/countries', {
      headers: {
        'x-choother-key': '123123'
      }
    })
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err));
  });
};

/**
 * @type  GET
 * @desc  get cities list
 */
export const Cities = async (city) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.choother.com/cities/${city}`, {
      headers: {
        'x-choother-key': '123123'
      }
    })
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err));
  });
};

/**
 * @type  GET
 * @desc  get cities list
 */
export const Search = async (country, city, cityFrom, dateFrom, dateTo, adults, currency, meals, hotelCategory) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.choother.com/tours-prices?country=${country}&city=${city}&cityFrom=${cityFrom}&dateFrom=${dateFrom}&dateTo=${dateTo}&adults=${adults}&currency=${currency}&meals=${meals}&hotelCategory=${hotelCategory}`, {
      headers: {
        'x-choother-key': '123123'
      }
    })
      .then(({ data }) => resolve(data))
      .catch((err) => reject(err));
  });
};

/**
 * @type  GET
 * @desc  get hotels list by cities
 */
export const HotelsByCities = async (cities) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.choother.com/hotelsByCity?cities=${cities}`, {
      headers: {
        'x-choother-key': '123123'
      }
    }).then(({ data }) => {
      resolve(data);
    }).catch((err) => reject(err));
  })
};
