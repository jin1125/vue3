const buttonCounter = {
  template: `<div><span>count:</span><button @click="countUp">{{ count }}</button></div>`,
  data: () => ({
    count: 0
  }),
  methods: {
    countUp: function(event) {
      this.count++
    }
  }
}

const app = Vue.createApp({
  data: () => ({
    age: 0
  }),
  methods: {
    clickHandler: function() {
      this.message = new Date().toLocaleTimeString()
    }
  },
  computed: {
  },
  watch: {
  },
  components: {
    'button-counter': buttonCounter
  }
})

app.mount('#app')

