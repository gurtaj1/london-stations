import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestHomePage } from 'features/home/actions/home';

import Home from 'features/home/home';

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = {
  requestHomePage
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
