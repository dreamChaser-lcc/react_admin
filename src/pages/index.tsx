import {  useEffect } from 'react';
import 'antd/dist/antd.css';
import '../assets/styles/index.less';

function useSetInterval(callback: () => void, time: number) {
  useEffect(() => {
    const i = setInterval(callback, time);
    return () => {
      clearInterval(i);
    };
  }, []);
}
export default function IndexPage() {
  return <>默认导出页面</>;
}
