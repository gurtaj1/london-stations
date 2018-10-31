import sanitizeHTML from 'sanitize-html';
import options from './sanitize-html.constants';

/**
 * sanitizeHTML
 * @param {String} a string containing HTML
 * @returns {String} sanitised HTML as a string
 */
export default dirtyHTML => sanitizeHTML(dirtyHTML, options);
