// import Message  from '../entities/message';

// export default createProviderConsumer<Message>({
//     message: 'Hello!'
//   },
//   (subscribe, child) => (
//     <context-consumer subscribe={subscribe} renderer={child} />
//   )
// );

import { createContext } from 'stencil-context';

const defaultValue = { foo: 'bar' };

const { Provider, Consumer } = createContext(defaultValue);

export const MessageProvider = Provider;
export const MessageConsumer = Consumer;
