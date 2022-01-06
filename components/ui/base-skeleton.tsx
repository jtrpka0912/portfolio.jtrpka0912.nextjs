/**
 * @interface SkeletonBaseProps
 * @summary Skeleton base props
 * @author J. Trpka
 * @property { string } type // The type of skeleton component
 */
interface SkeletonBaseProps {
    type: string
}

/**
 * @function SkeletonBase
 * @summary Skeleton base component
 * @description The base component for skeleton components
 * @author J. Trpka
 * @param { SkeletonBaseProps } props 
 * @returns { JSX }
 */
const SkeletonBase = (props: SkeletonBaseProps) => {
    return (
        <div></div>
    );
};

export default SkeletonBase;