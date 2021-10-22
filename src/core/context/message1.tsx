import { createContext } from 'stencil-context';

const defaultValue = { bar: 'bar' };

const { Provider, Consumer } = createContext(defaultValue);

export const MessageProvider1 = Provider;
export const MessageConsumer1 = Consumer;
