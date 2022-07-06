import { ITechnology } from "../../models/ITechnology";

export const angularTechnology: ITechnology ={
  id: 'angular',
  name: 'Angular',
  url: '/path/to/home-page',
  logo: {
    path: '/path/to/image',
    altText: 'Image of Angular Logo'
  } 
};

export const typescriptTechnology: ITechnology = {
  id: 'typescript',
  name: 'TypeScript',
  url: '/path/to/home',
  logo: { 
    path: '/path/to/image',
    altText: 'Image of TypeScript Logo'
  }
};

export const springBootTechnology: ITechnology = {
  id: 'spring-boot',
  name: 'Spring Boot',
  url: '/path/to/url'
};

export const jhipsterTechnology: ITechnology = {
  id: 'jhipster',
  name: 'JHipster',
  url: '/path/to/somewhere'
};