const app = Vue.createApp({
  data: () => ({
    counter: 0
  }),
  methods: {
    clickHandler: function() {
      this.counter++
    }
  },
  computed: {
  },
  watch: {
  },
})

app.mount('#app')

