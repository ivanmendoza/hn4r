/**
 * @module Spacer
 */

import { ContainerModel, ContainersProps } from './container-model';
import './containers.css';

type SpacerProps = ContainersProps & {
  type?: 'toolbar' | 'filters';
};

/**
 * Container to set styles for specific type of content as filters and toolbars
 * @prop {ReactNode} - children
 * @prop {string} - className
 * @prop {'toolbar' | 'filters'} - type.
 * @return {React.FC}
 * @example
 * <Spacer type="filters"></Spacer>
 */
export const Spacer: React.FC<SpacerProps> = (props) => ContainerModel('spacer', props);
