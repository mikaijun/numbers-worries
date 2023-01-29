import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import "modern-css-reset/dist/reset.min.css"

import type { AppProps } from "next/app"

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
})

export const storyBookClient = new ApolloClient({
  uri: "http://localhost:3333/api/graphql",
  cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
