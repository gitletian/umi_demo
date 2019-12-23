import  { get, post } from '../util';

export const getlist_get = ({ dispatch, params }) => {
    get('/getlist_get', params)
        .then((response) => {
            return response.json()
        }).then((value) => {
        dispatch({ type: 'home-get-list', value: value.list })
    }).catch((ex) => {
        ///失败
    });
};

export const getlist_post = ({dispatch, params}) => {
    post('getlist_post', params)
        .then(response => {
            return response.json();
        }).then(value => {
            dispatch(
                {
                    type: 'home-get-list',
                    value: value.list
                }
            )
        }).catch(ex => {
            // 失败
        });
};


