import { render, screen } from "@testing-library/react";

import ProjectDetailSubtitleDate from "../../../../components/project-detail-page/project-detail-hero/project-detail-subtitle-date";

describe('Render with just starting date', () => {
    test('Render with a starting date', () => {
        // Arrange
        render(<ProjectDetailSubtitleDate dates={{
            started: '2022-03-06'
        }} />);

        const subtitleElement = screen.getByText('March 6th, 2022');

        // Assert
        expect(subtitleElement).toBeInTheDocument();
    });

    test('Do not render if invalid date', () => {
        // Arrange
        render(<ProjectDetailSubtitleDate dates={{
            started: '2025-01-36'
        }} />);

        const subtitleElement = screen.queryByText('January 36th, 2025');

        // Assert
        expect(subtitleElement).not.toBeInTheDocument();
        expect(subtitleElement).toBeNull();
    });
});