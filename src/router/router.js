/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-07 16:26:48 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-05-16 15:23:04
 */

import Main from '@/views/Main.vue';
import Other from '@/views/otherLayout/Other.vue';

export const appRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/panoramic',
    component: Main,
    children: [
		{ path: 'panoramic', title: 'panoramic', name: 'panoramic', component: resolve => { require(['@/views/index/panoramic/panoramic.vue'], resolve); } },
		{ path: 'information', title: 'information', name: 'information', component: resolve => { require(['@/views/information/information.vue'], resolve); } },
        { path: 'find', title: 'find', name: 'find', component: resolve => { require(['@/views/find/find.vue'], resolve); } },
		{ path: 'mine', title: 'mine', name: 'mine', component: resolve => { require(['@/views/mine/mine.vue'], resolve); } },
    ]
};

export const preview = {
    path: '/panoramicView/:id',
    name: 'panoramicView',
	component: resolve => { require(['@/views/index/panoramic/panoramic-components/panoramic-detail.vue'], resolve)},
};

export const blessingdetail = {
    path: '/blessingdetail/:id',
    name: 'blessingdetail',
	component: resolve => { require(['@/views/index/panoramic/panoramic-components/blessing-detail.vue'], resolve)},
};

export const otherRouter = [
	{
        path: '/informationView',
        name: 'informationView',
        title: '资讯详情',
        component: Other,
        children: [
			{ path: ':id', title: '资讯详情', name: 'information_view', component: () => import('@/views/information/information-detail/information-detail.vue') },
			{ path: '/comment/:id', title: '评论列表', name: 'information_comment', component: () => import('@/views/information/information-comment/information-comment.vue') }
        ]
	},
	{
        path: '/blessingView',
        name: 'blessingView',
        title: '福主页',
        component: Other,
        children: [
            { path: ':id', title: '福主页', name: 'blessing_view', component: () => import('@/views/index/panoramic/panoramic-components/blessing-home.vue') }
        ]
	},
	{
        path: '/affiliation/index',
		title: '结缘榜',
		name: 'affiliation_view', component: () => import('@/views/index/panoramic/panoramic-components/affiliation-index') 
        // component: Other,
        // children: [
            // { path: 'index', title: '结缘榜', name: 'affiliation_view', component: () => import('@/views/index/panoramic/panoramic-components/affiliation-index') }
        // ]
	},
	{
        path: '/advertising',
		title: '活动详情',
		name: 'advertising_view', component: () => import('@/views/index/panoramic/panoramic-components/advertising.vue') 
        // component: Other,
        // children: [
            // { path: 'index', title: '结缘榜', name: 'affiliation_view', component: () => import('@/views/index/panoramic/panoramic-components/affiliation-index') }
        // ]
	},
	{
		path: '/findDynamic',
		name: 'findDynamic',
		title: '动态',
		component: Other,
		children: [
			{ path: 'index', title: '动态', name: 'find_dynamic', component: () => import('@/views/find/dynamic/dynamic.vue') }
		]
	},
	{
		path: '/follow',
		name: 'follow',
		title: '关注',
		component: Other,
		children: [
			{ path: 'index', title: '关注', name: 'follow_view', component: () => import('@/views/mine/follow/follow.vue') }
		]
	},
	{
		path: '/topic',
		name: 'topic',
		title: '话题',
		component: Other,
		children: [
			{ path: 'index', title: '话题', name: 'topic_view', component: () => import('@/views/mine/topic/topic.vue') }
		]
	},
	{
		path: '/collection',
		name: 'collection',
		title: '收藏',
		component: Other,
		children: [
			{ path: 'index', title: '收藏', name: 'collection_view', component: () => import('@/views/mine/collection/collection.vue') }
		]
	},
	{
		path: '/score',
		name: 'score',
		title: '福报分',
		component: Other,
		children: [
			{ path: 'index', title: '福报分', name: 'score_view', component: () => import('@/views/mine/score/score.vue') }
		]
	},
	{
		path: '/scoreBalance',
		name: 'scoreBalance',
		title: '转余额',
		component: Other,
		children: [
			{ path: 'view', title: '转余额', name: 'scoreBalance_view', component: () => import('@/views/mine/score/balance/balance.vue') }
		]
	},
	{
		path: '/detail',
		name: 'detail',
		title: '明细',
		component: Other,
		children: [
			{ path: 'view', title: '明细', name: 'detail_view', component: () => import('@/views/mine/detail/detail.vue') }
		]
	},
	{
		path: '/wallet',
		name: 'wallet',
		title: '钱包',
		component: Other,
		children: [
			{ path: 'index', title: '钱包', name: 'wallet_view', component: () => import('@/views/mine/wallet/wallet.vue') },
			{ path: 'withdraw', title: '提现', name: 'withdraw_view', component: () => import('@/views/mine/wallet/withdraw.vue') },
			{ path: 'recharge', title: '充值', name: 'recharge_view', component: () => import('@/views/mine/wallet/recharge.vue') }
		]
	},
	{
		path: '/setting',
		name: 'setting',
		title: '设置',
		component: Other,
		children: [
			{ path: 'index', title: '设置', name: 'setting_view', component: () => import('@/views/mine/setting/setting.vue') },
		]
	},
];

export const routers = [
	appRouter,
	preview,
	blessingdetail,
	...otherRouter
];