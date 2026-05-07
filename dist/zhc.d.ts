/**
 * Zero Holonomy Consensus — Loop Residual Computation
 *
 * Hol(γ) = product of trust transformations around a cycle.
 * For a flat connection, Hol(γ) = I (identity), loop residual = 0.
 *
 * The full ZHC consensus requires message passing and voting rounds
 * (lives in the Rust `holonomy-consensus` crate). This module provides
 * the geometric check: compute loop residual for a given cycle.
 *
 * Simplified: we treat trust values as rotation angles.
 * A trust value t ∈ [-1, 1] maps to an angle θ = arccos(t) in [0, π].
 * The product of cosines around the cycle gives the loop residual.
 *
 * For full geometric ZHC (3×3 rotation matrices), use the Rust crate.
 * This JS version is for client-side quick checks.
 */
import type { ZhcResult, TrustEdge } from './types.js';
/**
 * Compute the loop residual for a cycle in the trust graph.
 *
 * For a flat connection, the product of trust transformations around any closed
 * cycle equals identity. Deviation from identity = loop residual.
 *
 * Simplified method:
 *   - Convert trust to angular displacement: θ = arccos(|trust|) * sign(trust)
 *   - Product of cosines around the cycle
 *   - Residual = 1 - product (0 = perfect flatness)
 *
 * @param trustEdges - edges forming a cycle (last edge connects back to first)
 * @param tolerance - acceptable deviation (default 1e-6)
 */
export declare function computeLoopResidual(trustEdges: TrustEdge[], tolerance?: number): ZhcResult;
/**
 * Compute loop residual using Pythagorean48 direction indices.
 * More precise than floating-point trust values.
 *
 * For direction d, the trust is: trust = cos(2π * d / 48)
 * The product of cosines around the cycle gives the residual.
 */
export declare function computeLoopResidualByDirection(directions: number[], tolerance?: number): ZhcResult;
/**
 * Find all simple cycles in a fleet graph.
 * Uses a simple depth-first search.
 *
 * This is expensive (O(V!) in worst case) — use only on small graphs.
 */
export declare function findCycles(edges: TrustEdge[], maxCycles?: number): Array<TrustEdge[]>;
