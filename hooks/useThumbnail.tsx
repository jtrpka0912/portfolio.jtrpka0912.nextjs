const useThumbnail = async (imageUrl: string): Promise<[number, number]> => {
    const thumbnailSize = 256;

    const imageRef: HTMLImageElement = new Image();
    imageRef.src = imageUrl;

    await imageRef.decode();

    const imageWidth: number = imageRef.naturalWidth;
    const imageHeight: number = imageRef.naturalHeight;

    console.info(imageRef);
    console.info('Natural', imageWidth, imageHeight);

    // If the image is smaller than the thumbnail boundary.
    if(imageWidth < thumbnailSize && imageHeight < thumbnailSize) {
        return [imageWidth, imageHeight];
    }

    if(imageWidth === imageHeight) {
        imageRef.width = thumbnailSize;
        imageRef.height = thumbnailSize;
    }

    return [imageRef.width, imageRef.height];
}

export default useThumbnail;