import { employeeReducer, initialState } from './client-data.reducer';

describe('EmployeeData Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = employeeReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
