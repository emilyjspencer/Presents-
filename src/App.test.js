import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header';

describe('App', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('renders <div />s', () => {
    expect(wrapper.find('div').length).toEqual(3.);
  })

  it('renders a <Header />', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('has no presents by default', () => {
    expect(wrapper.state().presents).toEqual([]);
  });

  it('allows presents to be added', () => {
    wrapper.find('.add-item').simulate('click');
    expect(wrapper.state().presents).toEqual([{ id: 1 }]);
  })

  it('shows the added item on the page', () => {
    wrapper.find('.add-item').simulate('click');
    expect(wrapper.find('.presents').children().length).toEqual(1);
  });

  it('allows presents to be removed', () => {
    wrapper.find('.add-item').simulate('click');
    wrapper.find('.remove-item').simulate('click');
    expect(wrapper.state().presents.length).toEqual(0);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })



});


