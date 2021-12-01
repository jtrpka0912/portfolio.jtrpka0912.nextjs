// https://wanago.io/2020/09/28/react-context-api-hooks-typescript/

import { createContext } from "react";

/**
 * @interface UiContextData
 * @summary UI context data interface
 * @author J. Trpka
 * @property { object | null } imageModalData If null then this should turn off the image modal
 */
interface UiContextData {
    imageModalData: object | null
}

/**
 * @var defaultValues
 * @summary UI context default values
 * @description The default values for the UI context
 * @author J. Trpka
 * @property { object | null } imageModalData
 */
const defaultValues: UiContextData = {
    imageModalData: null
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
    return (
        <UiContext.Provider value={ defaultValues }>
            { props.children }
        </UiContext.Provider>
    );
}

export default UiContextProvider;