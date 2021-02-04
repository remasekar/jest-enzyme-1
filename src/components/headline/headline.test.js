import React from 'react';
import { shallow } from 'enzyme';

import { finddatatest } from '../../utils/index';
import Headline from './index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component
}

describe ( 'Headline component', () => {

    describe('with props',() => {
      
        let component;
        beforeEach(()=> {
            const props = {
                header: "test header",
                desc: "test desc"
            }
            component = setUp(props)
        });

        it('should render correctly',() => {
            const headlineValue = finddatatest(component,'headline component')
            expect(headlineValue.length).toBe(1);
        })
        
        it('should render headline',()=> {
            const wrapper = finddatatest(component,'headelineclass')
            expect(wrapper.length).toBe(1);
        })

        it('should render para',() => {
            const logowrapper = finddatatest(component,'paraclass')
            expect(logowrapper.length).toBe(1);
        })


    })

    describe('with no props',() => {

        let component;
        beforeEach(()=> {
            component = setUp()
        });

        it('should not render',() => {
            const headlineValue = finddatatest(component,'headline component')
            expect(headlineValue.length).toBe(0);
        })

    })
})