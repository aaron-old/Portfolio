import React from 'react';
import {mount} from 'enzyme';
import SidebarButton from './SidebarButton';

it('renders the sidebar icon when the state open is set to false', () => {
  const button = mount(<SidebarButton handleToggle={jest.fn()} sidebarVisible={false}/>);
  const f = button.find('.sidebar');
  expect(f.length).toEqual(1);
});

it('renders the close icon when the state open is set to true', () => {
  const button = mount(<SidebarButton handleToggle={jest.fn()} sidebarVisible={true}/>);
  const f = button.find('.close');
  expect(f.length).toEqual(1);
});