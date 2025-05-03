import { shuffleArray } from './shuffle.ts';

describe('shuffleArray', () => {
  it('should return a new array with the same elements', () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffleArray(input);

    expect(result).toHaveLength(input.length);
    expect(result.sort()).toEqual(input.sort());
  });

  it('should not mutate the original array', () => {
    const original = [10, 20, 30];
    const copy = [...original];

    shuffleArray(original);
    expect(original).toEqual(copy);
  });

  it('should handle empty array', () => {
    const result = shuffleArray([]);
    expect(result).toEqual([]);
  });

  it('should handle single element array', () => {
    const result = shuffleArray([42]);
    expect(result).toEqual([42]);
  });

  it('should return a different order sometimes', () => {
    const input = [1, 2, 3, 4, 5];
    const results = new Set();

    // Shuffle multiple times to detect order change
    for (let i = 0; i < 10; i++) {
      results.add(shuffleArray(input).join(','));
    }

    // Ideally more than one unique permutation
    expect(results.size).toBeGreaterThan(1);
  });
});
