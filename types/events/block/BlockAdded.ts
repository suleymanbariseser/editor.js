import { BlockMutationEventDetail } from './Base';

/**
 * Type name of CustomEvent related to block added event
 */
export const BlockAddedMutationType = 'block-added';

/**
 * Information about added block
 */
interface BlockAddedEventDetail extends BlockMutationEventDetail {
  /**
   * Index of added block
   */
  index: number;

  /**
   * Indicates that block was added manually
   */
  manual?: boolean;
}

/**
 * Event will be fired when the new block is added to the editor
 */
export type BlockAddedEvent = CustomEvent<BlockAddedEventDetail>;
