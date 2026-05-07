/**
 * Pythagorean48 Trust Encoding
 *
 * 48 exact directions on the unit circle.
 * log2(48) = 5.585 bits per vector — maximum information per bit for 16-bit integers.
 *
 * The 48 directions correspond to angles: k * 360/48 = k * 7.5 degrees for k in [0, 47].
 * This is the Pythagorean quantization — exact integer arithmetic on Z/48Z.
 */
export declare const DIRECTION_COUNT = 48;
export declare const BITS_PER_VECTOR: number;
/**
 * The 48 direction labels (for human readability).
 * Each direction is a point on the unit circle at 7.5° increments.
 */
export declare const DIRECTION_LABELS: string[];
/**
 * Convert a trust value in [-1, 1] to a Pythagorean48 direction index.
 *
 * trust = 1.0   → direction 0  (0°)
 * trust = 0.0   → direction 24 (180°)
 * trust = -1.0  → direction 24 (180°) ... wait, let's think about this.
 *
 * Actually: trust maps to an angle on the unit circle.
 * We use the sign of trust to determine which semicircle (0-23 for positive, 24-47 for negative).
 * The magnitude determines how far from the boundary.
 *
 * @param trust - trust value in [-1, 1]
 */
export declare function trustToDirection(trust: number): number;
/**
 * Convert a direction index back to a trust value.
 * @param dir - direction index in [0, 47]
 */
export declare function directionToTrust(dir: number): number;
/**
 * Get the 48-dimensional unit vector for a direction.
 * The vector is all zeros except at index `dir` where it is 1.
 * (This is the standard HDC encoding.)
 */
export declare function trustVector(dir: number): number[];
/**
 * Compute the cosine similarity between two trust values using Pythagorean48.
 * Returns value in [-1, 1] — same as trust.
 */
export declare function trustSimilarity(trustA: number, trustB: number): number;
/**
 * Compute the dot product of two HDC vectors.
 * For Pythagorean48 encoding, this is the cosine similarity.
 */
export declare function vectorDot(vecA: number[], vecB: number[]): number;
/**
 * Normalize a vector (L2 norm = 1).
 */
export declare function normalizeVector(vec: number[]): number[];
