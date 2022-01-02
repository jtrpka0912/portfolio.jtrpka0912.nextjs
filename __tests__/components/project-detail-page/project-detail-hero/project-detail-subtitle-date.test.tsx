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

describe('Render with just ending date', () => {
    test('Do not render component if just ending date', () => {
        // Arrange
        render(<ProjectDetailSubtitleDate dates={{
            ended: '2029-08-09'
        }} />);

        const subtitleElement = screen.queryByText(' to August 9th, 2029');

        // Assert
        expect(subtitleElement).not.toBeInTheDocument();
        expect(subtitleElement).toBeNull();
    });
});

describe('Render with both starting and ending dates', () => {
    test('Render the component with both valid dates', () => {
        // Arrange
        render(<ProjectDetailSubtitleDate dates={{
            started: '2019-05-10',
            ended: '2023-07-29'
        }} />);

        const subtitleElement = screen.getByText('May 10th, 2019 to July 29th, 2023');

        // Assert
        expect(subtitleElement).toBeInTheDocument();
    });

    test('Only render starting date with invalid ending date', () => {
        // Arrange
        render(<ProjectDetailSubtitleDate dates={{
            started: '2018-04-30',
            ended: '2019-03-36'
        }} />);

        const subtitleElement = screen.queryByText('April 30th, 2018 to March 36th, 2019');

        // Assert
        expect(subtitleElement).not.toBeInTheDocument();
        expect(subtitleElement).toBeNull();
    });
});