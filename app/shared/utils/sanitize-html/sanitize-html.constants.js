export default {
  allowedTags: [
    'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'ul', 'ol',
    'li', 'b', 'i', 'strong', 'em', 'u', 'strike', 'br', 'div',
    'caption', 'pre', 'figure', 'img', 'a'
  ],
  allowedAttributes: {
    img: ['src'],
    a: ['href', 'target']
  },
  selfClosing: ['img', 'br']
};
