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

    describe('when entering a persons name', () => {
        
        let wrapper;

        beforeEach(() => wrapper = shallow(<Present />));

        beforeEach(() => {
            wrapper.find('.name').simulate('change', { target: { value: 'Mari' }});
        });

        it('updates the name value in the component state', () => {
            expect(wrapper.state().person).toEqual('Mari');
        });
        
    }
    )

    describe('when entering a gift', () => {
        
        let wrapper;

        beforeEach(() => wrapper = shallow(<Present />));

        beforeEach(() => {
            wrapper.find('.present').simulate('change', { target: { value: 'phone'}});

            
        });

        it('updates the present in the state', () => {
            expect(wrapper.state().present).toEqual('phone');
        });


    })


});