/* External dependencies */
import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { createHttpLink } from '@apollo/client/core';
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist';
import { AUTH_TYPE, createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { v4 as uuidv4 } from 'uuid';

export let anonymousClient: ApolloClient<NormalizedCacheObject>;

export async function setAnonymousClient(): Promise<ApolloClient<NormalizedCacheObject>> {
  if (anonymousClient) {
    return anonymousClient;
  }

  const anonymousClientConfig = {
    url: process.env.GATSBY_APPSYNC_ENDPOINT,
    region: process.env.GATSBY_REGION,
    auth: {
      type: AUTH_TYPE.API_KEY as AUTH_TYPE.API_KEY,
      apiKey: process.env.GATSBY_AVERSPAY_APP_SYNC_API_KEY,
    },
    offlineConfig: {
      keyPrefix: `client-instance-${uuidv4()}`,
    },
  };

  const { url } = anonymousClientConfig;
  const httpLink = createHttpLink({ uri: url });

  const link = ApolloLink.from([
    createAuthLink(anonymousClientConfig),
    createSubscriptionHandshakeLink(anonymousClientConfig, httpLink),
  ]);

  const cache = new InMemoryCache();

  if (typeof window !== 'undefined') {
    await persistCache({
      cache,
      storage: new LocalStorageWrapper(window.localStorage),
    });
  }

  return (anonymousClient = new ApolloClient({
    link,
    cache,
  }));
}
