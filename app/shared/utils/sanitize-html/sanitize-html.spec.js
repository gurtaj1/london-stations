import sanitizeHTML from 'sanitize-html';
import SanitizeHTML from './sanitize-html';
import options from './sanitize-html.constants';

jest.mock('sanitize-html');

describe('Skylark.Lib', () => {
  describe('Sanitize HTML', () => {
    it('should export', () => {
      expect(SanitizeHTML).toBeDefined();
    });

    it('should sanitize html with the provided options', () => {
      const html = '<p>Some HTML content</p>';
      SanitizeHTML(html);
      expect(sanitizeHTML).toHaveBeenCalledWith(html, options);
    });
  });
});
