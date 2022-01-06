import { render } from "@testing-library/react";

import SkeletonBase from "../../../components/ui/skeleton-base";

describe('Render the component', () => {
    test('Component needs a type', () => {
        // Arrange
        render(<SkeletonBase type="thumbnail" />);

        const skeletonElement = document.querySelector('.skeleton');

        // Assert
        expect(skeletonElement).toHaveClass('thumbnail');
    });
});