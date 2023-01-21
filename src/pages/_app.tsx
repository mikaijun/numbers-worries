import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { RecoilRoot } from "recoil"

import type { AppProps } from "next/app"


const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  )
}
