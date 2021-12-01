import { render, screen, fireEvent } from "@testing-library/react";

import Modal from "../../../components/ui/modal";

const mockFunction = jest.fn();

describe('Render the modal', () => {
    it('Should not be rendered', () => {
        // Arrange
        render(<Modal isActive={ false } onClose={ mockFunction }>Hello World</Modal>);

        const modalElement = screen.getByRole('dialog');

        // Assert
        expect(modalElement).not.toHaveClass('is-active');
    });

    it('Should be rendered with active status', () => {
        // Arrange
        render(<Modal isActive={ true } onClose={ mockFunction }>Hello World</Modal>);

        const modalElement = screen.getByRole('dialog');

        // Assert
        expect(modalElement).toBeVisible();
        expect(modalElement).toBeInTheDocument();
        expect(modalElement).toHaveClass('is-active');
    });

    // TODO: Figure out how to disable the isActive with the mock function
    it.skip('Close the modal when clicking the background', () => {
        // Arrange
        render(<Modal isActive={ true } onClose={ mockFunction }>Hello World</Modal>);

        const modalElement = screen.getByRole('dialog');
        const modalBackgroundElement = modalElement.querySelector('.modal-background');

        // Act
        if(modalBackgroundElement) {
            fireEvent.click(modalBackgroundElement)
        }
        
        // Arrange
        expect(modalElement).not.toHaveClass('is-active');
    });

    // TODO: Figure out how to disable the isActive with the mock function
    it.skip('Close the modal when clicking the close button', () => {
        // Arrange
        render(<Modal isActive={ true } onClose={ mockFunction }>Hello World</Modal>);

        const modalElement = screen.getByRole('dialog');
        const modalCloseButtonElement = screen.getByRole('button');

        // Act
        fireEvent.click(modalCloseButtonElement);
        
        // Arrange
        expect(modalElement).not.toHaveClass('is-active');
    });
});