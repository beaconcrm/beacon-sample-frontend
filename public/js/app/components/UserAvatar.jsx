import { omit } from 'lodash';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import PersonIcon from '@material-ui/icons/Person';


const UserAvatar = (props) => {

  const { user } = props;
  const otherProps = omit(props, ['user']);


  // If user exists & has profile picture, render that
  if (user && user.profile_picture) {
    return (
      <Avatar
        src={user.profile_picture}
        {...otherProps}
      />
    );
  }

  // If user exists but does not have profile picture, then show
  // initials in the avatar
  if (user && (user.first_name || user.last_name)) {
    let initials = '';
    if (user.first_name) {
      initials += user.first_name[0];
    }
    if (user.last_name) {
      initials += user.last_name[0];
    }

    return (
      <Avatar {...otherProps}>
        {initials}
      </Avatar>
    );
  }

  // Otherwise, just show a person icon. This should never happen really.
  return (
    <Avatar
      {...otherProps}
    >
      <PersonIcon />
    </Avatar>
  );

};

UserAvatar.propTypes = {
  user: PropTypes.object.isRequired,
};


export default UserAvatar;
