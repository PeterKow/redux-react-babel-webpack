const storage = {
  setItem: (key, value) => {
    window.localStorage.setItem(key, value)
  },
  get: (key) => {
    window.localStorage.getItem(key)
  },

 remove: (key) => {
   window.localStorage.removeItem(key)
  }

}

export default storage