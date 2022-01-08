/**
 * @interface BaseSkeletonProps
 * @summary Base skeleton props
 * @author J. Trpka
 * @property { string } type // The type of skeleton component
 */
interface BaseSkeletonProps {
    type: string
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

    return (
        <div className={ `skeleton ${type.toLowerCase()}` }></div>
    );
};

export default BaseSkeleton;