import { Contentful } from "../../../../models/api/contentful/Contentful";

import { oldEnv } from '../../../../__mocks__/envVars';

describe('Contentful Constructor', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...oldEnv }; 
  });

  test('Test if env variables are set', () => {
    // Arrange
    process.env.CONTENTFUL_SPACE_ID = 'foo';
    process.env.CONTENTFUL_CONTENT_DELIVERY = 'bar';
    
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

describe('Retrieve Projects', () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...oldEnv };
    process.env.CONTENTFUL_SPACE_ID = 'foo';
    process.env.CONTENTFUL_CONTENT_DELIVERY = 'bar';
  });

  test('Retrieve some projects', async () => {
    // Arrange
    const contentful = new Contentful();

    const actualResult = await contentful.retrieveProjects();

    console.info('Result', actualResult);

    // Assert
    expect(actualResult).toBeTruthy();
  });

  afterAll(() => {
    process.env = oldEnv;
  });
});