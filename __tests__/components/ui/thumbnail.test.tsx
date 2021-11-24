import { render, screen } from "@testing-library/react";

import Thumbnail from "../../../components/ui/thumbnail";

const mockFunction = jest.fn();

describe('Render the component', () => {
    it('Render the component', () => {
        // Arrange
        render(<Thumbnail 
            image="something"
            altText="Test Image"
            title="Test Image"
            onClick={ mockFunction }
        />);

        const thumbnailElement = screen.getByRole('link');
        const imageElement = screen.getByAltText('Test Image');
        const titleElement = screen.getByText('Test Image');


        // Assert
        expect(thumbnailElement).toBeInTheDocument();
        expect(imageElement).toBeInTheDocument();
        expect(titleElement).toBeInTheDocument();
    });
});