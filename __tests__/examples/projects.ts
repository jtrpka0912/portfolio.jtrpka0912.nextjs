import { Project, ProjectType } from "../../models/project"

export const projectOne: Project = {
    slug: 'my-blog-website',
    title: 'My Blog Website',
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

export const projectTwo: Project = {
    slug: 'corp-abc-crm',
    title: 'Corp ABC CRM',
    technology: ['javascript', 'typescript', 'angular'],
    package: {
        npm: [{ name: 'lobash', isDevDependency: false }]
    },
    repo: undefined,
    date: { started: '1970-01-01', ended: '1970-05-04' },
    thumbnail: '/path/to/image.png',
    gallery: undefined,
    type: ProjectType.FRONTEND,
    resume: 'test',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectThree: Project = {
    slug: 'rester-api',
    title: 'Rester API',
    technology: ['golang'],
    package: {
        go: ['net/http']
    },
    repo: undefined,
    date: { started: '1970-01-01' },
    thumbnail: '/path/to/image.png',
    gallery: undefined,
    type: ProjectType.BACKEND,
    resume: 'test',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}

export const projectFour: Project = {
    slug: 'a-portfolio-site',
    title: 'A Portfolio Site',
    technology: ['react', 'nextjs'],
    package: {
        npm: [
            { name: 'markdown', isDevDependency: false },
            { name: 'gray-matter', isDevDependency: false },
        ]
    },
    repo: undefined,
    date: { started: '1970-01-01', ended: '1972-02-30' },
    thumbnail: undefined,
    gallery: undefined,
    type: ProjectType.BACKEND,
    resume: 'test',
    inDevelopment: false,
    featured: false,
    content: 'Foobar'
}