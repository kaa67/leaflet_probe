import { LoadingOutlined } from '@ant-design/icons';
import { Spin as AntdSpin } from 'antd';

const Indicator = () => (
    <LoadingOutlined style={{ fontSize: 24 }} spin />
);

const Spin = () => (
    <AntdSpin indicator={Indicator} />
);

export default Spin;
