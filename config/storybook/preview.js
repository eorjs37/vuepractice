import '../../src/assets/styles/reset.css'
import '../../src/assets/styles/_variables.css'
import '../../src/assets/styles/common.css'
const preview = {
    parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}
export default preview