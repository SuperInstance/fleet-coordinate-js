/**
 * Laman Rigidity Check
 *
 * Theorem: A graph with V vertices and E edges is Laman-rigid in 2D iff:
 *   E = 2V - 3
 *   Every subgraph with V' vertices has E' ≤ 2V' - 3
 *
 * The first condition (E = 2V - 3) is necessary and sufficient for generic rigidity
 * in 2D for graphs that are initially connected. For full Laman count verification,
 * we check the subgraph condition on all relevant subgraphs.
 */
import type { RigidityResult } from './types.js';
/**
 * Check if a fleet graph is Laman-rigid.
 *
 * @param V - number of vertices (agents)
 * @param E - number of edges (trust connections)
 * @param tolerance - allow tolerance for floating-point graphs (default 0, integer graphs)
 */
export declare function checkLamanRigidity(V: number, E: number, tolerance?: number): RigidityResult;
/**
 * Check subgraph rigidity condition for a set of edges.
 * For each subset of vertices with V' vertices, E' must satisfy E' ≤ 2V' - 3.
 *
 * This is the full Laman condition check. For most use cases, the simple
 * E = 2V - 3 check is sufficient.
 */
export declare function checkLamanSubgraphCondition(edges: Array<{
    from: string;
    to: string;
}>, vertexIds: string[], tolerance?: number): {
    valid: boolean;
    violating_subgraphs: Array<{
        Vprime: number;
        Eprime: number;
    }>;
};
