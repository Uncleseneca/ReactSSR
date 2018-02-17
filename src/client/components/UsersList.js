import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers = () => this.props.users.map(user => <li key={user.id}>{user.name}</li>);

  render() {
    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
