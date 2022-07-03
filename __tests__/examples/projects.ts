import { IProject } from "../../models/IProject"
import { ProjectType } from "../../models/enums/ProjectType"

export const projectOne: IProject = {
    slug: 'project-1',
    title: 'Project 1',
    technology: ['php', 'wordpress'],
    package: undefined,
    repo: undefined,
    date: { started: '1970-01-01' },
    thumbnail: '/path/to/image.png',
    gallery: undefined,
    type: ProjectType.FULLSTACK,
    resume: '',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectTwo: IProject = {
    slug: 'project-2',
    title: 'Project 2',
    technology: ['javascript', 'typescript', 'angular'],
    package: {
        npm: [
            { name: 'lobash', isDevDependency: false }
        ]
    },
    repo: undefined,
    date: { started: '1970-01-01', ended: '1970-05-04' },
    thumbnail: '/path/to/image.png',
    gallery: undefined,
    type: ProjectType.FRONTEND,
    resume: 'a-sample-resume',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectThree: IProject = {
    slug: 'project-3',
    title: 'Project 3',
    technology: ['golang'],
    package: {
        go: ['net/http']
    },
    repo: undefined,
    date: { started: '1970-01-01' },
    thumbnail: '/path/to/image.png',
    gallery: undefined,
    type: ProjectType.BACKEND,
    resume: 'a-sample-resume',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectFour: IProject = {
    slug: 'project-4',
    title: 'Project 4',
    technology: ['react', 'nextjs'],
    package: {
        npm: [
            { name: 'gray-matter', isDevDependency: false },
            { name: 'markdown', isDevDependency: false }
        ]
    },
    repo: undefined,
    date: { started: '1970-01-01', ended: '1972-02-30' },
    thumbnail: undefined,
    gallery: undefined,
    type: ProjectType.BACKEND,
    resume: 'a-sample-resume',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}