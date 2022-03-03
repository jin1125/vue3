const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!',
    count: 99,
    user: {
      lastName: 'Nakamura',
      firstName: 'Yuta',
      prefecture: 'Tokyo',
    },
    colors: ['red', 'green', 'blue']
  })
})

app.mount('#app')

