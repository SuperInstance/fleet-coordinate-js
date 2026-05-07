/**
 * Core TypeScript interfaces for fleet-coordinate-js.
 * No external dependencies.
 */
export interface RigidityResult {
    is_rigid: boolean;
    expected_E: number;
    h1_dimension: number;
    violations: string[];
}
export interface EmergenceResult {
    beta_one: number;
    detected: boolean;
    threshold: number;
    is_overconstrained: boolean;
}
export interface ZhcResult {
    loop_residual: number;
    consensus_reached: boolean;
    cycle_length: number;
}
export interface TrustEdge {
    from: string;
    to: string;
    trust: number;
}
export interface FleetNode {
    id: string;
    label?: string;
}
export interface FleetEdge {
    from: string;
    to: string;
    trust: number;
    weight?: number;
}
export interface FleetGraph {
    nodes: FleetNode[];
    edges: FleetEdge[];
    V: number;
    E: number;
    C: number;
}
export interface FullAnalysis {
    rigidity: RigidityResult;
    emergence: EmergenceResult;
    zhc: ZhcResult | null;
    is_self_coordinating: boolean;
}
