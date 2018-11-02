import Home from 'features/home/home';

describe('LS.Components', () => {
  describe('Home Container', () => {
    it('should export something', () => {
      expect(Home).toBeDefined();
    });

    it('should render without crashing', () => {
      expect(Home).toMatchSnapshot();
    });
  });
});
