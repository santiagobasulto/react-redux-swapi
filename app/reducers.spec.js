import {counterReducer} from './reducers';
import {incrementCounter, decrementCounter} from './actions';

import expect from 'expect';

describe('counterReducer() > ', () => {
  describe('INCREMENT_COUNTER', () => {
    it('should return 0 if state is undefined', () => {
      expect(counterReducer(undefined, incrementCounter())).toBe(1);
    });
    it('should increment by 1 if state is -1', () => {
      expect(counterReducer(-1, incrementCounter())).toBe(0);
    });
    it('should increment by 1 if state is 0', () => {
      expect(counterReducer(0, incrementCounter())).toBe(1);
    });
    it('should increment by 1 if state is 1', () => {
      expect(counterReducer(1, incrementCounter())).toBe(2);
    });
  });

  describe('DECREMENT_COUNTER', () => {
    it('should return 0 if state is undefined', () => {
      expect(counterReducer(undefined, decrementCounter())).toBe(-1);
    });
    it('should decrement by 1 if state is 2', () => {
      expect(counterReducer(2, decrementCounter())).toBe(1);
    });
    it('should decrement by 1 if state is 1', () => {
      expect(counterReducer(1, decrementCounter())).toBe(0);
    });
    it('should decrement by 1 if state is 0', () => {
      expect(counterReducer(0, decrementCounter())).toBe(-1);
    });
  });
});
