import { FC, MutableRefObject, ReactNode } from 'react';
// 组件
import { Form, FormInstance, FormProps, notification, Row } from 'antd';
// 方法
import { useFormItems } from '../searchForm/hooks/useFormItems';
// 常量
import { ProFormItemProps } from '../searchForm/interface';
import { FormActionType } from './interface';

export interface IProFormProps
  extends FormProps,
    Pick<ProFormItemProps, 'isSearch'> {
  actionRef?: MutableRefObject<FormActionType>;
  /**表单配置 */
  formItems: ProFormItemProps[];
  /**额外添加非表单元素 */
  extraNode?: ReactNode;
}
const ProForm: FC<IProFormProps> = (props) => {
  const {
    children,
    extraNode,
    formItems,
    actionRef,
    isSearch,
    ...restProps
  } = props;
  const [form] = Form.useForm<FormInstance>();
  const newFormItems = useFormItems(formItems, isSearch);
  /**验证表单并提示 */
  const handleValidate = async () => {
    const correctValues = await form.validateFields().catch((errorInfo) => {
      errorInfo?.errorFields?.forEach((val: any) => {
        const msg = val?.errors?.[0];
        msg && notification.warning({ message: msg });
      });
    });
    console.log(correctValues);
    return correctValues ? correctValues : false;
  };

  if (actionRef) {
    actionRef.current = {
      onValidate: handleValidate,
      form,
    };
  }

  return (
    <Form
      form={form}
      // name="advanced_search"
      // className="ant-advanced-search-form"
      // onFinish={onFinish}
      {...restProps}
    >
      <Row gutter={24}>
        {newFormItems}
        {extraNode}
      </Row>
    </Form>
  );
};
export default ProForm;