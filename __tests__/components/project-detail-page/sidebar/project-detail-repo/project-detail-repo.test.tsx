import { render, screen } from "@testing-library/react";

import ProjectDetailRepo from "../../../../../components/project-detail-page/sidebar/project-detail-repo/project-detail-repo";

describe('Render the component', () => {
  it('Nothing to render with no repo', () => {
    render(<ProjectDetailRepo repo={undefined} />);

    const element = screen.queryByRole('note');

    expect(element).not.toBeInTheDocument();
  });

  it('Render the container at least with one repo', () => {
    render(<ProjectDetailRepo repo={{
      gitlab: [
        { label: 'Sample Repo', url: 'path/to/repo' }
      ]
    }} />);

    const element = screen.queryByRole('note');

    expect(element).toBeInTheDocument();
  });
});