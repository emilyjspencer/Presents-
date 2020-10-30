import React from 'react';
import { shallow } from 'enzyme'
import Present from './Present'

describe('Present', () => {

    const mockRemove = jest.fn();
    const id = 1;
    const props = { present: { id }, removeItem: mockRemove };

    let wrapper;

    beforeEach(() => wrapper = shallow(<Present {...props} />));

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

    describe('clicking the remove item button', () => {

        beforeEach(() => {
            wrapper.find('.remove-button').simulate('click');
        });

        it('the removePresent callback is invoked upon button click', () => {
          expect(mockRemove).toHaveBeenCalledWith(id)
        });
    });


});