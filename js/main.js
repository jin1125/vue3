const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!',
    count: 99,
    user: {
      lastName: 'Nakamura',
      firstName: 'Yuta',
      age: '23',
      prefecture: 'Tokyo',
    },
    colors: ['red', 'green', 'blue'],
    now: '-'
  }),
  methods: {
    onClick: function() {
      // console.log('onClick');
      this.now = new Date().toLocaleString()
      // console.log(this);
    }
  }
})

app.component('hello-component', {
  template: '<p>hello</p>'
})

app.mount('#app')

