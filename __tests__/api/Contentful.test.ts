import { Contentful } from "../../models/api/contentful/Contentful";

describe('Contentful Constructor', () => {
  test.skip('Test if env variables are set', () => {
    const contentful = new Contentful();
    console.info(contentful);

    expect(true).toBeTruthy();
  });
});