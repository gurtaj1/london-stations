import { createEpicMiddleware, combineEpics } from 'redux-observable';
import configureMockStore from 'redux-mock-store';

import createMockStore from 'shared/helpers/testing/reduxObservableHelpers';

import rootEpic from 'root-epic.js'

jest.mock('redux-observable', () => {
    return {
        combineEpics: jest.fn(),
        createEpicMiddleware: jest.fn(() => {
            return {
                run: jest.fn()
            }
        })
    }
});
jest.mock('redux-mock-store', () => {
    return jest.fn().mockImplementation(() => jest.fn());
});

describe('shared.helpers', () => {
    describe('reduxObservableHelpers', () => {
        describe('createMockStore', () => {
            it('should export a function', () => {
                expect(typeof createMockStore).toBe('function');
            });

            it('should call createEpicMiddleWare and configureMockStore', () => {
                createMockStore(rootEpic);

                expect(createEpicMiddleware).toHaveBeenCalled();
                expect(configureMockStore).toHaveBeenCalled();
            });
        });
    });
});
