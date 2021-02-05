import { types } from '../../action/types';
import postreducer from '../../reducers/post/postreducer'

describe ('Posts reducer', () => {

    it('should render default state',()=> {
   
        const newState = postreducer(undefined,{});
        expect(newState).toEqual([]);

    })

    it('should render new state if receiving type',() => {

        const posts = [{title: 'test1'},{title: 'test1'},{title: 'test1'}];
        const newState = postreducer(undefined,{
            type: types.GET_POSTS,
            payload: posts
        })
        expect(newState).toEqual(posts);

    })
})