/* eslint-disable @typescript-eslint/no-require-imports */
require('dotenv').config();
const { strict } = require('assert');
const contentfulManagement = require('contentful-management');
const assert = strict;

const { CONTENTFUL_TYPES_ACCESS_TOKEN, CONTENTFUL_SPACE, ENVIRONMENT } = process.env;

assert(CONTENTFUL_TYPES_ACCESS_TOKEN);
assert(CONTENTFUL_SPACE);
assert(ENVIRONMENT);

const getContentfulEnvironment = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENTFUL_TYPES_ACCESS_TOKEN!,
  });

  return (
    contentfulClient
      .getSpace(CONTENTFUL_SPACE!)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((space: any) => space.getEnvironment(ENVIRONMENT!))
  );
};

module.exports = getContentfulEnvironment;
