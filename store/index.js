export const state = ()=>({
  countries: [],
  cities: [],
})

export const mutations = {
  setCountries(state, countries){
    state.countries = countries
  },
  setCities(state, cities){
    state.cities = cities
  }
}

export const actions = {
  async fetchCountries({commit}){
    try{
      console.log("fetchCountries",       );
      const countries = await this.$axios.$get('https://api.choother.com/countries', {
        headers: {
          'x-choother-key': '123123'
        }
      })
      commit('setCountries', countries)
    }catch(e){throw e}
  },
  async fetchCities({commit}, payload){
    try{
      console.log("fetchCities",       );
      const cities = await this.$axios.$get(`https://api.choother.com/cities/${payload.countryId}`, {
        headers: {
          'x-choother-key': '123123'
        }
      })
      commit('setCities', cities)
    }catch(e){throw e}
  }
}

export const getters = {
  countries: s=>s.countries,
  cities: s=>s.cities
}
