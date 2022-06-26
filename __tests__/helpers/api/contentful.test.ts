import { client } from "../../../helpers/api/contentful";

import { oldEnv } from '../../../__mocks__/envVars';

describe('client()', () => {
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
      client();
    }).not.toThrowError();
  });

  test('Test if env variables are NOT set', () => {
    // Assert
    expect(() => {
      client();
    }).toThrowError('Please define your Contentful credentials.');
  });

  afterAll(() => {
    process.env = oldEnv;
  });
});