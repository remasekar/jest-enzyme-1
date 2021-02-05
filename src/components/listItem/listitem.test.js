import React from 'react';
import { shallow } from 'enzyme';
import {finddatatest,checkProps} from '../../utils/index'
import ListItem from './index'

describe('ListItem Component', () => {

  describe('ListItem Prop checks', () => {
     
    it('should NOT throw a warning',() => {
        const expectedProps = {
            title: "TEST",
            desc: "ESt"
        }
        const propsErr = checkProps(ListItem, expectedProps);
        expect(propsErr).toBeUndefined();
    })

  })

  describe('Renders',()=> {
    
    let wrapper;
    beforeEach(()=> {
      const props = {
        title: "TEST",
        desc: "ESt"
    }
      wrapper = shallow(<ListItem {...props}/>)
    })

    it('should render correctly', () => {
      const list = finddatatest(wrapper,'ListItemComponent');
      expect(list.length).toBe(1);
    })

    it('should render title', () => {
      const title = finddatatest(wrapper,'listtitle');
      expect(title.length).toBe(1);
    })

    it('should render desc', () => {
      const desc = finddatatest(wrapper,'listdesc');
      expect(desc.length).toBe(1);
    })

  })

  describe ('should not render ', () => {
    let wrapper;
    beforeEach(()=> {
      const props = {
        desc: "ESt"
    }
      wrapper = shallow(<ListItem {...props}/>)
    })

    it('should not render when no title', () => {
      const title = finddatatest(wrapper,'ListItemComponent');
      expect(title.length).toBe(0);
    })

  })


})
