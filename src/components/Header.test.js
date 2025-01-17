import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe('Header', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<Header />));

    

    it('renders an <img />', () => {
        expect(wrapper.find('img').length).toEqual(1);
    })

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    
});