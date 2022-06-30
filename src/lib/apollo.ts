import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl501s7qt0rbo01up1zjk5sh4/master",
  cache: new InMemoryCache()
});