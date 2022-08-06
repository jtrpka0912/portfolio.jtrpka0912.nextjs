import { render, screen } from "@testing-library/react";

import ProjectDetailRepo from "../../../../../components/project-detail-page/sidebar/project-detail-repo/project-detail-repo";

describe('Render the component', () => {
  it('Nothing to render with no repo', () => {
    render(<ProjectDetailRepo repositories={undefined} />);

    const element = screen.queryByRole('note');

    expect(element).not.toBeInTheDocument();
  });

  it('Render the container at least with one repo', () => {
    render(<ProjectDetailRepo repositories={[
        { label: 'Sample Repo', url: 'path/to/repo', type: 'Bit Bucket' }
      ]} />);

    const element = screen.queryByRole('note');

    expect(element).toBeInTheDocument();
  });
});