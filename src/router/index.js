import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Show from '../components/Show';
import Register from '../views/register/Register';
import RegAccount from '../views/register/RegAccount';
import ChooseType from '../views/register/ChooseType';
import PrivateEnter from '../views/register/PrivateEnter';
import FirmEnter from '../views/register/FirmEnter';
import CheckResult from '../views/register/CheckResult';
import PersonalCenter from '../views/personal/PersonalCenter';
import PersonIndex from '../views/personal/PersonIndex';
import PublishArticle from '../views/personal/PublishArticle';
import ArticleList from '../views/personal/ArticleList';
import StatArticles from '../views/personal/StatArticles';
import StatFans from '../views/personal/StatFans';
import DealFans from '../views/personal/DealFans';
import DealAsset from '../views/personal/DealAsset';
import AccountManager from '../views/personal/AccountManager';
import AccountInfo from '../views/personal/AccountInfo';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/show',
      name: 'show',
      component: Show,
      //嵌套子对象
      children: [
        //-- 空的表示默认显示的子对象
        {
          path: 'register',
          component: Register,
          // -- 默认显示账号注册界面
          redirect: 'register/regaccount',
          children: [
            {
              path: 'regaccount',
              name: 'RegAccount',
              component: RegAccount
            },
            {
              path: 'choosetype',
              name: 'ChooseType',
              component: ChooseType
            },
            {
              path: 'privateEnter',
              name: 'PrivateEnter',
              component: PrivateEnter
            },
            {
              path: 'firmEnter',
              name: 'FirmEnter',
              component: FirmEnter
            },
            {
              path: 'checkResult',
              name: 'CheckResult',
              component: CheckResult
            }
          ]
        }
      ]
    },
    {
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      redirect: '/personalCenter/personIndex',
      children:[
        {
          path: 'personIndex',
          name: 'PersonIndex',
          component: PersonIndex
        },
        {
          path: 'publishArticle',
          name: 'PublishArticle',
          component: PublishArticle
        },
        {
          path: 'articleList',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: 'statArticles',
          name: 'StatArticles',
          component: StatArticles
        },
        {
          path: 'statFans',
          name: 'StatFans',
          component: StatFans
        },
        {
          path: 'dealFans',
          name: 'DealFans',
          component: DealFans
        },
        {
          path: 'dealAsset',
          name: 'DealAsset',
          component: DealAsset
        },
        {
          path: 'accountManager',
          name: 'AccountManager',
          component: AccountManager
        },
        {
          path: 'accountInfo',
          name: 'AccountInfo',
          component: AccountInfo
        }
      ]
    }
  ],
  mode: "history"
})
