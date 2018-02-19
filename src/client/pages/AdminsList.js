import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsList extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins = () => this.props.admins.map(user => <li key={user.id}>{user.name}</li>);

  render() {
    return (
      <div>
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
  component: connect(mapStateToProps, mapDispatchToProps)(AdminsList),
};
