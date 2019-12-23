const initHomeStore = {
    isShowDesc: false,
    listData: []
};

const homeStore = (state = initHomeStore, action) => {
    switch (action.type) {
        case 'home-show-desc':
            return {
                ...state,
                isShowDesc: action.value
            };
        case 'home-get-list':
            return {
                ...state,
                listData: action.value
            };
        default:
            return state;
    }
};

export default homeStore;

