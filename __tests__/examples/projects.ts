import { IProject } from "../../models/IProject"
import { ProjectType } from "../../models/enums/ProjectType"
import { angularTechnology, jhipsterTechnology, springBootTechnology, typescriptTechnology } from "./technologies"
import { type } from "os"

export const projectOne: IProject = {
    slug: 'project-1',
    title: 'Project 1',
    technology: [angularTechnology, typescriptTechnology],
    package: undefined,
    repo: undefined,
    date: { started: '1970-01-01' },
    thumbnail: {
        path: '/path/to/image.png',
        altText: 'Image of Project 1'
    },
    gallery: undefined,
    type: ProjectType.WEB_APPLICATION,
    resume: '',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectTwo: IProject = {
    slug: 'project-2',
    title: 'Project 2',
    technology: [angularTechnology, typescriptTechnology],
    package: {
        npm: [
            { name: 'Lobash', slug: 'lobash' }
        ]
    },
    repo: undefined,
    date: { started: '1970-01-01', ended: '1970-05-04' },
    thumbnail: {
        path: '/path/to/image.png',
        altText: 'Image of Project 2'
    },
    gallery: undefined,
    type: ProjectType.WEB_APPLICATION,
    resume: 'a-sample-resume',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectThree: IProject = {
    slug: 'project-3',
    title: 'Project 3',
    technology: [springBootTechnology],
    package: {
        go: ['net/http']
    },
    repo: undefined,
    date: { started: '1970-01-01' },
    thumbnail: {
        path: '/path/to/image.png',
        altText: 'Image of Project 3'
    },
    gallery: undefined,
    type: ProjectType.SYSTEM_APPLICATION,
    resume: 'a-sample-resume',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectFour: IProject = {
    slug: 'project-4',
    title: 'Project 4',
    technology: [angularTechnology, typescriptTechnology, springBootTechnology, jhipsterTechnology],
    package: {
        npm: [
            { slug: 'gray-matter', name: 'Gray Matter' },
            { slug: 'markdown', name: 'Markdown' }
        ]
    },
    repo: undefined,
    date: { started: '1970-01-01', ended: '1972-02-30' },
    thumbnail: undefined,
    gallery: undefined,
    type: ProjectType.MOBILE_APPLICATION,
    resume: 'a-sample-resume',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}