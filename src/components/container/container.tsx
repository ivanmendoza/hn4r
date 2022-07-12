/**
 * @module Container
 */

import { ContainersProps, ContainerModel } from './container-model';
import './containers.css';

/**
 * Container to set a max-width for main content.
 * @prop {ReactNode} - children
 * @prop {string} - className
 * @return {React.FC}
 */
export const Container: React.FC<ContainersProps> = (props) => ContainerModel('container', props);
