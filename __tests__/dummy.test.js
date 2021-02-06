import { experiments } from 'webpack';
import Dummy from '../src/dummy';

describe('Dummy test suite', function() {
    it('should import a function', function() {
        expect(Dummy).toBeDefined();
    })
})