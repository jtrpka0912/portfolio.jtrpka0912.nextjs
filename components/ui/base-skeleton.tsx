/**
 * @interface BaseSkeletonProps
 * @summary Base skeleton props
 * @author J. Trpka
 * @property { string } type // The type of skeleton component
 */
interface BaseSkeletonProps {
    type: 'thumbnail' | 'title' | 'textline' | 'icon' | 'tag' | 'sidebar' | 'long-item'
}

/**
 * @function BaseSkeleton
 * @summary Base skeleton component
 * @description The base component for skeleton components
 * @author J. Trpka
 * @param { BaseSkeletonProps } props 
 * @returns { JSX }
 */
const BaseSkeleton = (props: BaseSkeletonProps) => {
    const { type } = props;

    /**
     * @var { string } typeClass
     * @description This will prevent class conflicts with Bulma classes.
     * @author J. Trpka
     */
    const typeClass: string = `skeleton--${ type.toLowerCase() }`;

    return (
        <div className={ `skeleton ${ typeClass }` }></div>
    );
};

export default BaseSkeleton;