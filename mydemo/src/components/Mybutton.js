import Blits from '@lightningjs/blits'

export default Blits.Component('Mybutton', {
  template: `
    <Element
      w="300"
      h="100"
      :effects="[{type: 'radius', props: {radius: 20}}]"
      :alpha.transition="$alpha"
      :rotation="$rotate"
      color="$color"
    >
    </Element>
  `,
  props: ['color'],
  state() {
    return {
      alpha: 1,
      rotate: 0,
    }
  },
})
