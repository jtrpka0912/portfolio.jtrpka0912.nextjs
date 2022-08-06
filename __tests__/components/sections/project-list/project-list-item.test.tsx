import { render, screen } from "@testing-library/react";

import { ProjectType } from "../../../../models/enums/ProjectType";

import ProjectListItem from "../../../../components/sections/project-list/project-list-item";
import { jhipsterTechnology, typescriptTechnology } from "../../../examples/technologies";

describe('Render component', () => {
  test('Render the project list item', () => {
    // Assert
    render(<ProjectListItem project={
      {
        slug: 'project-1',
        title: 'Project 1',
        technology: [typescriptTechnology, jhipsterTechnology],
        package: undefined,
        repo: undefined,
        date: { started: '1970-01-01' },
        thumbnail: {
          altText: 'Alt Text',
          path: '/path/to/enlightment.gif'
        },
        gallery: undefined,
        type: ProjectType.SYSTEM_APPLICATION,
        resume: '',
        inDevelopment: false,
        featured: false,
        content: 'Foobar'
      }
    } />);

    const element = screen.getByRole('link');

    expect(element).toBeInTheDocument();
  });
});