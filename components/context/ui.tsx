// https://wanago.io/2020/09/28/react-context-api-hooks-typescript/

import { createContext, useState } from "react";

/**
 * @interface ImageModalData
 * @summary Image modal data
 * @author J. Trpka
 * @property { string } image
 * @property { string } altText
 */
interface ImageModalData {
    image: string,
    altText: string
}

/**
 * @interface UiContextData
 * @summary UI context data interface
 * @author J. Trpka
 * @property { boolean } isHeaderMobileMenuOpen
 * @property { ImageModalData | null } imageModalData If null then this should turn off the image modal
 * @property { func } setHeaderMobileMenu
 * @property { func } setImageModal Set the data to the image modal
 */
interface UiContextData {
    isHeaderMobileMenuOpen: boolean;
    imageModalData: ImageModalData | null;
    setHeaderMobileMenu: () => void;
    setImageModal: (imageGallery: ImageModalData | null) => void;
}

/**
 * @var defaultValues
 * @summary UI context default values
 * @description The default values for the UI context
 * @author J. Trpka
 * @property { boolean } isHeaderMobileMenuOpen
 * @property { ImageModalData | null } imageModalData
 * @property { func } setHeaderMobileMenu
 * @property { func } setImageModal
 */
const defaultValues: UiContextData = {
    isHeaderMobileMenuOpen: false,
    imageModalData: null,
    setHeaderMobileMenu: () => undefined,
    setImageModal: (imageGallery: ImageModalData | null) => undefined
}

/**
 * @var { Context } UiContext
 * @summary The UI Context
 * @description The main UI context object to use with useContext hooks
 * @author J. Trpka
 */
export const UiContext = createContext<UiContextData>(defaultValues);

/**
 * @interface UiContextProviderProps
 * @summary Ui context provider props interface
 * @author J. Trpka
 * @property { React.ReactNode } children
 */
interface UiContextProviderProps {
    children: React.ReactNode
}

/**
 * @function UiContextProvider
 * @summary The UI context provider component
 * @description The component to use to allow the context to be used through the app.
 * @author J. Trpka
 * @param { UiContextProviderProps } props
 * @returns { JSX }
 */
const UiContextProvider = (props: UiContextProviderProps) => {
    const [isHeaderMobileMenuOpen, setIsHeaderMobileMenuOpen]
        = useState<boolean>(defaultValues.isHeaderMobileMenuOpen);
    const [imageModalData, setImageModalData] 
        = useState<ImageModalData | null>(defaultValues.imageModalData);

    const setHeaderMobileMenuHandler = (): void => {
        setIsHeaderMobileMenuOpen(!isHeaderMobileMenuOpen);
    }

    /**
     * @function setImageModalHandler
     * @summary Set image modal handler
     * @description Set the image modal data to an image or null (turns off modal)
     * @author J. Trpka
     * @param { ImageModalData | null } image 
     */
    const setImageModalHandler = (image: ImageModalData | null): void => {
        setImageModalData(image);
    }

    /**
     * @var values
     * @type UiContextData
     * @description The value for the UI context provider
     * @author J. Trpka
     * @property { boolean } isHeaderMobileMenuOpen
     * @property { ImageModalData | null } imageModalData
     * @property { func } setImageModal
     */
    const values: UiContextData = {
        isHeaderMobileMenuOpen,
        imageModalData,
        setImageModal: setImageModalHandler,
        setHeaderMobileMenu: setHeaderMobileMenuHandler
    };

    return (
        <UiContext.Provider value={ values }>
            { props.children }
        </UiContext.Provider>
    );
}

export default UiContextProvider;