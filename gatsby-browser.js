// Local dependencies
import { setAnonymousClient } from './src/client/graphql';
import wrapWithProvider from './src/redux/wrap-with-provider';

export const wrapRootElement = wrapWithProvider;

export const onClientEntry = () => {
  setAnonymousClient();
};
