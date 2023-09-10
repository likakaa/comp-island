import {
  StartServer,
  createHandler,
  renderAsync,
} from 'solid-start/entry-server'

export default createHandler(
  // eslint-disable-next-line prettier/prettier
  renderAsync((event) => <StartServer event={event} />),
)
