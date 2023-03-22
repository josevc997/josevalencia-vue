import VueGtag from 'vue-gtag'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const idGTag = import.meta.env.VITE_GTAG
  app.use(VueGtag, {
    config: { id: idGTag },
  })
}
