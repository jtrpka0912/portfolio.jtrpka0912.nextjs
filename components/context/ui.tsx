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
 * @property { ImageModalData | null } imageModalData If null then this should turn off the image modal
 * @property { func } setImageModal Set the data to the image modal
 */
interface UiContextData {
    imageModalData: ImageModalData | null,
    setImageModal: (imageGallery: ImageModalData | null) => void
}

/**
 * @var defaultValues
 * @summary UI context default values
 * @description The default values for the UI context
 * @author J. Trpka
 * @property { ImageModalData | null } imageModalData
 * @property { func } setImageModal
 */
const defaultValues: UiContextData = {
    imageModalData: null,
    setImageModal: (imageGallery: ImageModalData | null) => undefined
}

/**
 * @var UiContext
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
    const [imageModalData, setImageModalData] 
        = useState<ImageModalData | null>(defaultValues.imageModalData);

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
     * @property { ImageModalData | null } imageModalData
     * @property { func } setImageModal
     */
    const values: UiContextData = {
        imageModalData,
        setImageModal: setImageModalHandler
    };

    return (
        <UiContext.Provider value={ values }>
            { props.children }
        </UiContext.Provider>
    );
}

export default UiContextProvider;