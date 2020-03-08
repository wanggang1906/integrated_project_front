import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const types = {
    SET_IS_AUTNENTIATED: 'SET_IS_AUTNENTIATED', // 是否认证通过
    SET_USER: 'SET_USER', // 用户信息
    SET_IS_COLLAPSE: 'SET_IS_COLLAPSE',
    SET_SIDE_BAR_MENUS: 'SET_SIDE_BAR_MENUS',
    SET_DEFAULT_ACTIVE: 'SET_DEFAULT_ACTIVE',
    SET_BREADCRUMBS: 'SET_BREADCRUMBS',
};

const state = { // 需要维护的状态
    isAutnenticated: false,  // 是否认证
    user: {},                // 存储用户信息
    isCollapse:false,
    sideBarMenus:[],
    defaultActive:'',
    breadcrumbs:[],

    icons:['el-icon-arrow-right','el-icon-star-on','el-icon-printer',
        'el-icon-setting','el-icon-share','el-icon-edit','el-icon-location',
        'el-icon-location-outline','el-icon-menu', 'el-icon-tickets','fa fa-id-card',
        'fa fa-users','fa fa-child','fa fa-file-text','fa fa-map-signs','fa fa-cog','fa fa-home']
};

const getters = {
    isAutnenticated: state => state.isAutnenticated,
    user: state => state.user,
    isCollapse: state => state.isCollapse,
    sideBarMenus: state => state.sideBarMenus,
    defaultActive: state => state.defaultActive,
    icons: state => state.icons,
    breadcrumbs:state => state.breadcrumbs,
};

const mutations = {
    [types.SET_IS_AUTNENTIATED](state, isAutnenticated) {
        if (isAutnenticated){
            state.isAutnenticated = isAutnenticated;
        } else{
            state.isAutnenticated = false;
        }
    },
    [types.SET_USER](state, user) {
        if (user){
            state.user = user;
        } else{
            state.user = {}
        }
    },
    [types.SET_IS_COLLAPSE](state, isCollapse) {
        state.isCollapse = isCollapse;
    },
    [types.SET_SIDE_BAR_MENUS](state, sideBarMenus) {
        state.sideBarMenus = sideBarMenus;
    },
    [types.SET_DEFAULT_ACTIVE](state, defaultActive) {
        state.defaultActive = defaultActive;
    },
    [types.SET_BREADCRUMBS](state, breadcrumbs) {
        state.breadcrumbs = breadcrumbs;
    }
};

const actions = {
    setIsAutnenticated: ({ commit }, isAutnenticated) => {
        commit(types.SET_IS_AUTNENTIATED, isAutnenticated);
    },
    setUser: ({ commit }, user) => {
        commit(types.SET_USER, user);
    },
    setIsCollapse: ({ commit }, isCollapse) => {
        commit(types.SET_IS_COLLAPSE, isCollapse);
    },
    setSideBarMenus: ({ commit }, sideBarMenus) => {
        commit(types.SET_SIDE_BAR_MENUS, sideBarMenus);
    },
    setDefaultActive: ({ commit }, defaultActive) => {
        commit(types.SET_DEFAULT_ACTIVE, defaultActive);
    },
    setBreadcrumbs: ({ commit }, breadcrumbs) => {
        commit(types.SET_BREADCRUMBS, breadcrumbs);
    },
    clearCurrentState: ({ commit }) => {
        commit(types.SET_IS_AUTNENTIATED, false);
        commit(types.SET_USER, null);
    },
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
