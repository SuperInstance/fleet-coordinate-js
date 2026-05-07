/**
 * H¹ Cohomology Emergence Detection
 *
 * Formula: β₁ = E - V + C (first Betti number)
 *
 * Emergence detection:
 * - Rigid fleet (E = 2V - 3, C = 1): emergence if β₁ > V - 2
 * - Non-rigid fleet: emergence if β₁ > V - 1
 *
 * The H¹ cohomology detects when the graph has more independent cycles
 * than a minimally rigid graph should have — i.e., when the fleet is
 * over-constrained and something novel is emerging from the constraint structure.
 */
import type { EmergenceResult } from './types.js';
/**
 * Detect emergence using H¹ cohomology.
 *
 * @param V - vertex count (agents)
 * @param E - edge count (trust connections)
 * @param C - connected components (default 1)
 * @param override_threshold - manual override for threshold
 */
export declare function detectEmergence(V: number, E: number, C?: number, override_threshold?: number): EmergenceResult;
/**
 * Compute the H¹ first Betti number directly.
 * β₁ = E - V + C
 */
export declare function betaOne(V: number, E: number, C?: number): number;
