const App = {
  data() {
    return {
      // --- data
      image_url: 'style/image/image1.jpg',
      image_size: {width: 500, height: 500},
      alphabet: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      cellxrow: 12,
      coordinate_cell: [],
      game_field: {},
      increase_size: false,
      answers: [],
      centered_class: false,
      timer: 10,
      cancel_vision: false,
      message: {
        status: false,
        text: 'Ответы засчитаты, спасибо!'
      }

    }
  },

  // --- mounted
  mounted() {

    // генерируем координаты для сетки
    for(let i = 0; i < this.cellxrow; i++) {
      for(let q = 0; q < this.cellxrow; q++) {
        this.coordinate_cell.push(this.alphabet[i] + [q + 1])
      }
    }

    // подгоняем размер игрового поля под размер изображения
    this.game_field = this.image_size

  },

  // --- methods
  methods: {

    // стартуем обратный отсчет
    startTimer() {
      this.cancel_vision = true
      let timer = setInterval(() => {
        if(this.timer === 0) {
          // - > время вышло, можно оправлять ответы (this.answers)
          clearInterval(timer)
          alert('Увы, время вышло. Ответы будут отправлены на проверку')
          this.cancel_vision = false
          this.message.status = true
          console.log('Ответы за период времени', this.answers)
        }
        else {
          this.timer = this.timer - 1
        }
      }, 1000);
    },

    // получение координат
    getCoordinate(coordinate, index) {

      let curentRef = this.$refs['selected' + index]

      // - если координата уже была выбрана:
      if(curentRef.classList.value == 'selected') {
        if(this.timer === 0) {
          return false
        }
        else {
          // снимаем с неё выделение
          curentRef.classList.remove('selected')

          // удаляем из массива ответов
          let index = this.answers.indexOf(coordinate);
          if (index >= 0) {
            this.answers.splice(index, 1);
          }

          console.log('answers:', this.answers);
        }
      }

      // - если координата не была выбрана:
      else {
        // оповещаем о том что попытки закончелись, если число ответов в массиве = 10
        if(this.answers.length === 10) {
          return false
        }
        // - > время вышло, можно оправлять ответы (this.answers)
        else if(this.timer === 0) {
          return false
        }
        // если число ответов в массиве < 10:
        else {
          // выдеям кооринату (css, добавление класса '.selected' к квадрату)
          curentRef.classList.add('selected')
          // добавляем координату в массив ответов
          this.answers.push(coordinate)
          console.log('answers:', this.answers);

        }
      }

    },

    // увеличение поля с изображением
    increaseSize() {

      this.increase_size = !this.increase_size
      console.log('increase_size:', this.increase_size);

      if(this.increase_size == true) {
        let userHeight = window.innerHeight

        this.game_field = {
          width: userHeight,
          height: userHeight
        }
        this.centered_class = true
      }

      if(this.increase_size == false) {
        this.game_field = this.image_size
        this.centered_class = false
      }
    },

    cancel() {
      this.timer = 0
      this.cancel_vision = false
      this.message.status = true
    }

  },

  // --- computed
  computed: {},

  // --- watch
  watch: {}
}

Vue.createApp(App).mount('#app')
