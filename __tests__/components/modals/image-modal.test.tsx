import { render, screen } from "@testing-library/react";

import ImageModal from "../../../components/modals/image-modal";

describe('Render the image modal', () => {
    it.skip('Should not be shown initially', () => {
        // Arrange
        render(<ImageModal image="" altText="" />);

        const modalElement = screen.getByRole('dialog');

        // Assert
        // ERROR: This is believing that the component is visible even with the modal class telling it to be display none.
        expect(modalElement).not.toBeVisible();
    });
});