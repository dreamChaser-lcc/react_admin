import { useEffect, useRef, useState } from 'react';
import { user_auth_token_api } from '@/api/user';
import { history } from 'umi';
import { notMenusPage, SUCCESS_STATUS_CODE } from '@/constants/common';
import { useLocation } from 'umi';

interface IParams {
  // 验证token是否过期的token
  api?: Function;
  // 验证时间 n*10*1000ms
  refreshTime?: number;
}
export const useVerifyToken = ({ api, refreshTime = 10 }: IParams) => {
  const timerRef = useRef<any>(null);
  const [isLogin, setLogin] = useState<boolean>(false);
  const curLocation = useLocation();
  useEffect(() => {
    if (!timerRef.current && !notMenusPage.includes(curLocation.pathname)) {
      timerRef.current = setTimeout(async () => {
        const res = await api?.();
        if (res?.code === SUCCESS_STATUS_CODE) {
          setLogin(true);
        } else {
          history.push('/login');
        }
        timerRef.current = null;
        clearTimeout(timerRef.current);
      }, 2000);
    }
  });
  return { isLogin };
};
