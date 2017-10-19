import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';

const profiles = [
  {
    profileName: 'facebook',
    icon: 'facebook f',
    color: 'facebook',
    link: '//www.facebook.com/M240B',
  },
  {
    profileName: 'linkedin',
    icon: 'linkedin',
    color: 'linkedin',
    link: '//www.linkedin.com/in/aaron-young-48a359b2/',
  },
  {
    profileName: 'github',
    icon: 'github',
    color: 'black',
    link: '//github.com/aaron-old/',
  },
  {
    profileName: 'email',
    icon: 'mail',
    color: 'blue',
    link: 'mailto:aaron.c.young@Outlook.com',
  },
];

const handleProfileClick = ({ link }) => {
  window.open(link, '_blank');
};

const handleEmailClick = ({ link }) => {
  window.location = link;
};

const SocialBar = () => (
  <Button.Group >
    {profiles.map(profile => (
      <Button
        style={{ margin: '0 3px' }}
        key={profile.profileName}
        size="large"
        color={profile.color || null}
        icon={<Icon name={profile.icon} size="big" key={profile.profileName} />}
        onClick={() => (profile.profileName !== 'email' ?
              handleProfileClick(profile) :
              handleEmailClick(profile))}
      />))}
  </Button.Group>

);


export default SocialBar;
