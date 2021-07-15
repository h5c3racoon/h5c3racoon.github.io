const App = {
  data() {
    return {
      // --- data
      alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      cellxrow: 12,
      coordinate_cell: [],
      image_url: 'style/image/image1.jpg',
      image_size: {width: 500, height: 500},
      game_field: {},
      increase_size: false,
      answers: []
    }
  },
  // --- mounted
  mounted() {

    for(let i = 0; i < this.cellxrow; i++) {
      for(let q = 0; q < this.cellxrow; q++) {
        this.coordinate_cell.push(this.alphabet[i] + [q + 1])
      }
    }

    this.game_field = this.image_size

  },
  // --- methods
  methods: {
    // get coordinate
    getCoordinate(coordinate) {
      if(this.answers.length == 10) {
        alert('Попытки закончелись!')
      }
      else {
        console.log(coordinate)
        this.answers.push(coordinate)
        console.log('answers length:', this.answers.length);
      }
    },

    // increase size
    increaseSize() {
      this.increase_size = !this.increase_size
      console.log('increase_size:', this.increase_size);

      if(this.increase_size == true) {
        // let userWidth = window.innerWidth
        let userHeight = window.innerHeight

        this.game_field = {
          width: userHeight,
          height: userHeight
        }
      }

      if(this.increase_size == false) {
        this.game_field = this.image_size
      }
    }
  },
  // --- computed
  computed: {}
}

Vue.createApp(App).mount('#app')
