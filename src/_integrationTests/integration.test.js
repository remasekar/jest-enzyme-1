import moxios from 'moxios';
import { testStore } from '../utils/index';
import { fetchPosts } from '../action/index';

describe( 'fetchposts action', () => {


     beforeEach(()=> {
         moxios.install();
     })

     afterEach(() => {
         moxios.uninstall();
     })

     test('store is updated correctly', ()=>{

        const expectedState = [{
            title: "TEST",
            body: "some text"
        },{
            title: "TEST",
            body: "some text"}
        ,{
            title: "TEST",
            body: "some text"}
        ];

        const store = testStore();

        moxios.wait(()=> {
            const req = moxios.requests.mostRecent();
            req.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return  store.dispatch(fetchPosts())
        .then(()=> {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })

     })

})