import { ContentfulClient } from "../../../../models/api/contentful/ContentfulClient";

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
      new ContentfulClient();
    }).not.toThrowError();
  });

  test('Test if env variables are NOT set', () => {
    // Assert
    expect(() => {
      new ContentfulClient();
    }).toThrowError('Please define your Contentful credentials.');
  });

  afterAll(() => {
    process.env = oldEnv;
  });
});