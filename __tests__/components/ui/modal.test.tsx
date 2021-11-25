import { render, screen } from "@testing-library/react";

import Modal from "../../../components/ui/modal";

describe('Render the modal', () => {
    it.skip('Should not be rendered', () => {
        // Arrange
        render(<Modal>Hello World</Modal>);

        const modalElement = screen.getByRole('dialog');

        // Assert
        // ERROR: This is believing that the component is visible even with the modal class telling it to be display none.
        expect(modalElement).not.toBeVisible();
    });

    it('Should be rendered with active status', () => {
        // Arrange
        render(<Modal isActive={ true }>Hello World</Modal>);

        const modalElement = screen.getByRole('dialog');

        // Assert
        expect(modalElement).toBeVisible();
        expect(modalElement).toBeInTheDocument();
    });
});