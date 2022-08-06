import { render, screen } from "@testing-library/react";

import Thumbnail from "../../../components/ui/thumbnail/Thumbnail";

const mockFunction = jest.fn();

describe('Render the component', () => {
  it('Render the component', () => {
    // Arrange
    render(<Thumbnail
      image={{
        path: '/something.png',
        altText: 'Test Image'
      }}
      title="Test Image"
      onClick={mockFunction}
      width={100}
      height={100}
    />);

    const thumbnailElement = screen.getByRole('link');
    const imageElement = screen.getByAltText('Test Image');
    const titleElement = screen.getByText('Test Image');


    // Assert
    expect(thumbnailElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  it('Render without title', () => {
    // Arrange
    render(<Thumbnail
      image={{
        path: '/1.jpg',
        altText: 'Alt 1'
      }}
      onClick={mockFunction}
      width={100}
      height={100}
    />);

    const thumbnailElement = screen.getByRole('link');

    expect(thumbnailElement).toBeInTheDocument();
    expect(thumbnailElement.querySelector('.card-header')).toBeNull();
  })
});