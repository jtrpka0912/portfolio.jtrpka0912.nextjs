import { Contentful } from "../../../../models/api/contentful/Contentful";

describe('Contentful Constructor', () => {
  /**
   * @constant { NodeJS.ProcessEnv } oldEnv
   * @description The original environment variables before mocked.
   * @author J. Trpka
   * @see https://stackoverflow.com/a/48042799/4008500
   */
  const oldEnv: NodeJS.ProcessEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...oldEnv }; 
  });

  test('Test if env variables are set', () => {
    // Arrange
    process.env.CONTENTFUL_SPACE_ID = 'foo';
    process.env.CONTENTFUL_CONTENT_DELIVERY = 'bar'
    
    // Assert
    expect(() => {
      new Contentful();
    }).not.toThrowError();
  });

  test('Test if env variables are NOT set', () => {
    // Assert
    expect(() => {
      new Contentful();
    }).toThrowError('Please define your Contentful credentials.');
  });

  afterAll(() => {
    process.env = oldEnv;
  });
});