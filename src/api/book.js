import axios from './axios';

function getListByLastTime(options = {}) {
    options = Object.assign({
        src: 'web',
        alias: '',
        pageNum: 1
    }, options);

    return axios.get('/getListByLastTime', {
        params: options
    });
}

export default {
    getListByLastTime
};