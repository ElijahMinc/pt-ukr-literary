import { createClient } from 'contentful';

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE } = process.env;

const client = createClient({
  space: CONTENTFUL_SPACE!,
  accessToken: CONTENTFUL_ACCESS_TOKEN!,
});

export default client;
