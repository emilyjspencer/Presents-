import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header';

describe('App', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('renders a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })

  it('renders a <Header />', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('has no presents by default', () => {
    expect(wrapper.state().presents).toEqual([]);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })



});


