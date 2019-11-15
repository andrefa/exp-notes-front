const getters = {
  authenticated: state => !!state.authToken,
  trip: state => id => state.trips.find(t => t.id === id)
}

export default getters
