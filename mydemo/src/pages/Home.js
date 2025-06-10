import Blits from '@lightningjs/blits'
import Mybutton from '../components/Mybutton.js'

export default Blits.Component('Home', {
  components: {
    Mybutton,
  },
  template: `
    <Element w="1920" h="1080" color="black">
      <Element x="630" y="450">
        <Mybutton
          x="0"
          ref="button1"
          color="#00ff00"
          :z="$focused === 1 ? 1 : 0"
          :alpha="$focused === 1 ? 1 : 0.5"
        />
        <Mybutton
          x="320"
          ref="button2"
          color="#ff0000"
          :z="$focused === 2 ? 1 : 0"
          :alpha="$focused === 2 ? 1 : 0.5"
        />
      </Element>
    </Element>
  `,
  state() {
    return {
      focused: null,
      clickCount: 0,
    }
  },
  watch: {
    focused(value) {
      console.log(`Focused button: ${value}`)
      const focused = this.$select(`button${value}`)
      if (focused && focused.$focus) focused.$focus()
      this.clickCount = 0
    },
  },
  input: {
    enter() {
      if (this.focused === null) {
        this.focused = 1
        this.clickCount = 0
      }
    },
    right() {
      if (this.focused === 1) {
        this.clickCount++
        if (this.clickCount === 2) {
          this.clickCount = 0
          this.focused = 2
        }
      }
    },
    left() {
      if (this.focused === 2) {
        this.clickCount++
        console.log('no of clicks', this.clickCount, 'inside left')
        if (this.clickCount === 2) {
          this.clickCount = 0
          this.focused = 1
        }
      }
    },
  },
})
