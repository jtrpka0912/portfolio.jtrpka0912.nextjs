import useThumbnail from '../../hooks/useThumbnail';

test('Resize a square image', async () => {
    // Arrange
    const imageSize = await useThumbnail('https://placekitten.com/300/300');

    // Assert
    expect(imageSize[0]).toBe(256);
    expect(imageSize[1]).toBe(256);
});

test('Do not resize a small, square image', async () => {
    // Arrange
    const imageSize = await useThumbnail('https://placekitten.com/200/200');

    // Assert
    expect(imageSize[0]).toBe(200);
    expect(imageSize[1]).toBe(200);
});