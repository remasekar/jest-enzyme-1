import react from 'react';
import {shallow} from 'enzyme';

import Header from './index';
import { finddatatest } from '../../utils/index'

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component
}


describe('Header component', () => {

    let component;
    beforeEach(()=> {
        component = setUp();
    })

    it('Should render without errors',() => {
        const wrapper = finddatatest(component,'headerclass')
        expect(wrapper.length).toBe(1);

    });

    it('should render logo',() => {
        const logowrapper = finddatatest(component,'logoimg')
        expect(logowrapper.length).toBe(1);
    })
})

