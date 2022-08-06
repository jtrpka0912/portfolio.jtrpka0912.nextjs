import { ITechnology } from "../../models/ITechnology";

export const angularTechnology: ITechnology ={
  id: 'angular',
  name: 'Angular',
  url: '/path/to/home-page',
  logo: {
    path: '/path/to/image.png',
    altText: 'Image of Angular Logo'
  } 
};

export const typescriptTechnology: ITechnology = {
  id: 'typescript',
  name: 'TypeScript',
  url: '/path/to/home',
  logo: { 
    path: '/path/to/image.png',
    altText: 'Image of TypeScript Logo'
  }
};

export const springBootTechnology: ITechnology = {
  id: 'spring-boot',
  name: 'Spring Boot',
  url: '/path/to/url',
  logo: {
    path: '/path/to/image.jpg',
    altText: 'Image of Spring Boot Logo'
  }
};

export const jhipsterTechnology: ITechnology = {
  id: 'jhipster',
  name: 'JHipster',
  url: '/path/to/somewhere',
  logo: {
    path: '/path/to/image.jpg',
    altText: 'Image of one of JHipster generated Logos'
  }
};