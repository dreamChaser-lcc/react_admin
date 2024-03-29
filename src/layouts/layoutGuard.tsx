/*
 * @Author: lcc
 * @Date: 2022-09-04 21:06:36
 * @LastEditors: lcc
 * @LastEditTime: 2022-12-03 15:32:25
 * @Description:
 */
import React, { FC, useEffect } from 'react';

import { history, IRouteComponentProps } from 'umi';
// 组件
import BaseLayout from './baseLayout';

// import BaseLayout from './baseLayout';
import BaseContext from '@/globalContext';
// 方法
import { useGlobal } from '@/globalContext/hook';
import { useLocation } from 'umi';
// 常量
import { Spin } from 'antd';
import { useVerifyToken } from './hooks/verifytoken';
import { notMenusPage } from '@/constants/common';
import ProTransition from '@/component/ProTransition';
import Login from '@/pages/login';
import Loading from '@/component/loading';
interface Iprops extends IRouteComponentProps {
  tokenApi?: Function;
}
const LayoutGuard: FC<Iprops> = (props) => {
  const { children, route, tokenApi } = props;
  const curLocation = useLocation();
  const { dispatch, routerTabs } = useGlobal();
  const { isLogin } = useVerifyToken({ api: tokenApi });

  if (!isLogin && curLocation.pathname !== '/login') {
    return <Loading />;
  }

  const layoutRender = () => {
    // console.log('curLocation.pathname',curLocation.pathname,route?.routes,route?.routes?.find((i) => i.path === curLocation.pathname));
    if (!route?.routes?.find((i) => i.path === curLocation.pathname)) {
      return children;
    }
    const pathname = location.hash.replace('#/', '');
    const showMenus = !notMenusPage.includes(curLocation.pathname) ? 1 : 0;
    return (
      <React.Suspense
        fallback={
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100%',
              background: '#fafafa',
              opacity: 0.6,
            }}
          >
            <Spin
              spinning={true}
              size="default"
              tip="loadding..."
              style={{ position: 'absolute', left: '50%', top: '50%' }}
            />
          </div>
        }
      >
        <BaseLayout showmenus={showMenus}>
          <ProTransition animatekey={pathname}>{children}</ProTransition>
        </BaseLayout>
      </React.Suspense>
    );
  };
  return (
    <BaseContext.Provider value={{ dispatch, routerTabs }}>
      {layoutRender()}
    </BaseContext.Provider>
  );
};

export default LayoutGuard;
