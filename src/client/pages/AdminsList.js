import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/hocs/requireAuth';

class AdminsList extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  helmet = () => (
    <Helmet>
      <title>{`${this.props.admins.length} Admins loaded`}</title>
      <meta property="og:title" content="Admins" />
    </Helmet>
  );

  renderAdmins = () => this.props.admins.map(user => <li key={user.id}>{user.name}</li>);

  render() {
    return (
      <div>
        {this.helmet()}
        Protected list of admins:
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  admins: state.admins,
});

const mapDispatchToProps = dispatch => ({
  fetchAdmins: () => dispatch(fetchAdmins()),
});

export const loadData = store => store.dispatch(fetchAdmins());

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(AdminsList)),
};
