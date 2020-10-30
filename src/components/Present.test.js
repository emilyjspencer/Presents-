import React from 'react';
import { shallow } from 'enzyme'
import Present from './Present'

describe('Presents', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<Present />));

    it('renders a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('has no person associated with it at first', () => {
        expect(wrapper.state()).toEqual({ person: '', present: ''});
    });


});