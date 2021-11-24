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


        // Assert
        expect(thumbnailElement).toBeInTheDocument();
    });
});