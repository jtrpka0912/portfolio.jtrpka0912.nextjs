import { render, screen } from "@testing-library/react";

import ImageModal from "../../../components/modals/image-modal";

describe('Render the image modal', () => {
    it('Should not be shown initially', () => {
        // Arrange
        render(<ImageModal />);

        const modalElement = screen.getByRole('dialog');

        // Assert
        expect(modalElement).not.toHaveClass('is-active');
    });

    // TODO: How to test with context?
});