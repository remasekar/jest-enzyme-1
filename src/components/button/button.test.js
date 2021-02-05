import React from 'react';
import {finddatatest, checkProps} from '../../utils/index';
import { shallow } from 'enzyme';
import SharedButton from './index'

describe('Shared button component',()=> {

    describe('Checking proptypes',()=> {

        it('should not throw warning',() => {
            const expectedProps = {
                buttonText: "TEST",
                emitEvent: () => {

                }
            }
            const propsErr = checkProps(SharedButton,expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('renders',() => {
        
        let wrapper;

        beforeEach(()=> {
            const props = {
                buttonText: "TEST",
                emitEvent: () => {

                }
            }
            wrapper = shallow(<SharedButton {...props}/>)

        });

        it('should render button ',() => {
            const button = finddatatest(wrapper,'buttonComponent');
            expect(button.length).toBe(1);
        })

    })
})

