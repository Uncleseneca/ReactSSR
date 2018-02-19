import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers = () => this.props.users.map(user => <li key={user.id}>{user.name}</li>);

  helmet = () => (
    <Helmet>
      <title>{`${this.props.users.length} Users loaded`}</title>
      <meta property="og:title" content="Users" />
    </Helmet>
  );

  render() {
    return (
      <div>
        {this.helmet()}
        A list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export const loadData = store => store.dispatch(fetchUsers());

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(UsersList),
};
