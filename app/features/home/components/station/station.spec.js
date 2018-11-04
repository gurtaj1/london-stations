import React from 'react';
import { shallow } from 'enzyme';

import Station, { tubeLineColors, capitaliseEachWord } from 'features/home/components/station/station';
import fixture from 'features/home/components/station/station.fixture';

describe('home.components', () => {
  describe('Station', () => {
    const props = fixture;

    it('should export something', () => {
      expect(Station).toBeDefined();
    });

    it('should render without crashing', () => {
      const wrapper = shallow(<Station {...props} />);

      expect(wrapper).toMatchSnapshot();
    });

    describe('tubeLineColors', () => {
      it('should export an object', () => {
        expect(typeof tubeLineColors).toBe('object');
      });
    
      it('should contain at least one tube line color', () => {
        const keys = Object.keys(tubeLineColors);
        expect(keys.length).toBeGreaterThanOrEqual(1);
      });
    
      it('should contain only string keys', () => {
        const keys = Object.keys(tubeLineColors);
    
        keys.forEach(key => {
          expect(typeof key).toBe('string');
        });
      });
    });

    describe('capitaliseEachWord()', () => {
      it('should capitalise the first letter of each word in a string', () => {
        const string = 'this is a test string';
        const output = capitaliseEachWord(string);

        expect(output).toEqual('This Is A Test String');
      });

      it('should should replace "-" with " and "', () => {
        const string = 'this-that';
        const output = capitaliseEachWord(string);

        expect(output).toEqual('This And That');
      });

      it('should capitalise the first letter of a one word string', () => {
        const string = 'test';
        const output = capitaliseEachWord(string);

        expect(output).toEqual('Test');
      });
    });
  });
});
