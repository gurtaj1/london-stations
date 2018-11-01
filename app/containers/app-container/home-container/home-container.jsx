import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestHomePage } from 'actions/home/home';

import Home from 'components/home/home';

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = {
  requestHomePage
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
