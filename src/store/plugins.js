import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

const secureLs = new SecureLS({ isCompression: false })

const plugins = [
  createPersistedState({
    storage: {
      getItem: key => secureLs.get(key),
      setItem: (key, value) => secureLs.set(key, value),
      removeItem: key => secureLs.remove(key)
    }
  })
]

export default plugins
