import { render } from "@testing-library/react";

import BaseSkeleton from "../../../components/ui/base-skeleton";

describe('Render the component', () => {
    test('Component needs a type', () => {
        // Arrange
        render(<BaseSkeleton type="thumbnail" />);

        const skeletonElement = document.querySelector('.skeleton');

        // Assert
        expect(skeletonElement).toHaveClass('skeleton--thumbnail');
    });
});