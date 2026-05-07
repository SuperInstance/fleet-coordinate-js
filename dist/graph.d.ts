/**
 * Fleet Graph Builder and Utilities
 *
 * Constructs a FleetGraph from nodes and edges, computes derived values.
 * Provides higher-level analysis by combining rigidity + emergence + ZHC.
 */
import type { FleetGraph, FleetNode, FleetEdge, FullAnalysis } from './types.js';
/**
 * Build a FleetGraph from raw nodes and edges.
 * Computes V (vertex count), E (edge count), C (connected components).
 */
export declare function buildFleetGraph(nodes: FleetNode[], edges: FleetEdge[]): FleetGraph;
/**
 * Get all neighbors of a node in the graph.
 */
export declare function getNeighbors(graph: FleetGraph, nodeId: string): string[];
/**
 * Quick rigidity + emergence check without ZHC.
 * Use for hot-path checks (heartbeat, health monitoring).
 *
 * @returns { is_rigid, beta_one, is_self_coordinating }
 */
export declare function quickCheck(graph: FleetGraph): {
    is_rigid: boolean;
    emergence_detected: boolean;
    beta_one: number;
    threshold: number;
};
/**
 * Full analysis: rigidity + emergence + ZHC on detected cycles.
 * Use when you need the captain's complete picture.
 *
 * @param graph - the fleet graph
 * @param checkCycles - whether to also check ZHC loop residual on detected cycles (default true)
 */
export declare function analyzeFleetGraph(graph: FleetGraph, checkCycles?: boolean): FullAnalysis;
/**
 * Convert an external FleetGraph (from fleet-coordinate Rust crate)
 * to our JS FleetGraph format.
 *
 * The Rust FleetGraph has: V(), E(), neighbors(id), is_connected_to(other)
 * We normalize to our format here.
 */
export declare function fromCoordinateGraph(V: number, E: number, neighbors: (id: string) => string[], nodeIds: string[]): FleetGraph;
