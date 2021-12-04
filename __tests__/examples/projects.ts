import { Project, ProjectType } from "../../models/project"

export const projectOne: Project = {
    slug: 'project-1',
    title: 'Project 1',
    technology: ['php', 'wordpress'],
    package: undefined,
    repo: undefined,
    date: { started: '1970-01-01' },
    thumbnail: '/path/to/image.png',
    gallery: undefined,
    type: ProjectType.FULLSTACK,
    resume: false,
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectTwo: Project = {
    slug: 'project-2',
    title: 'Project 2',
    technology: ['javascript', 'typescript', 'angular'],
    package: {
        npm: ['lobash']
    },
    repo: undefined,
    date: { started: '1970-01-01' },
    thumbnail: '/path/to/image.png',
    gallery: undefined,
    type: ProjectType.FRONTEND,
    resume: true,
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectThree: Project = {
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
    resume: true,
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectFour: Project = {
    slug: 'project-4',
    title: 'Project 4',
    technology: ['react', 'nextjs'],
    package: {
        npm: ['gray-matter', 'markdown']
    },
    repo: undefined,
    date: { started: '1970-01-01' },
    thumbnail: undefined,
    gallery: undefined,
    type: ProjectType.BACKEND,
    resume: true,
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}