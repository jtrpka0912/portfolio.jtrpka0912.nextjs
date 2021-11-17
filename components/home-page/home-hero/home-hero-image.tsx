import Image from 'next/image';

/**
 * @function HomeHeroImage
 * @summary Home Hero Image component
 * @description Show a profile picture of ... myself.
 * @author J. Trpka
 * @returns { JSX }
 */
const HomeHeroImage = () => {
    return (
        <figure className="image">
            <Image
                className="is-rounded" 
                src="/assets/images/profile-image.jpeg"
                alt="Portfolio profile picture"
                width={ 256 }
                height={ 256 }
            />
        </figure>
    );
};

export default HomeHeroImage;