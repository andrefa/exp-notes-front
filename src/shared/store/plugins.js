import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

const secureLs = new SecureLS({ isCompression: false })

const isTesting = process.env.NODE_ENV !== 'production'
const persistOpts = isTesting ? {} : {
  storage: {
    getItem: key => secureLs.get(key),
    setItem: (key, value) => secureLs.set(key, value),
    removeItem: key => secureLs.remove(key)
  }
}

const plugins = [
  createPersistedState(persistOpts)
]

export default plugins
