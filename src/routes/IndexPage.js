import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { Table, Radio, Card, Statistic } from 'antd'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { columns } from './columns'

function IndexPage() {
  const dataSource = [
    {
      id: '1',
      name: '湖北',
      age: '合计',
      address: 213,
      max: 0.17,
      tom: 98,
      add: 84.9,
      tongbi: -2,
      tongbilv: -1.1
    }, {
      id: '2',
      name: '湖北',
      age: '合计',
      address: 213,
      max: 0.17,
      tom: 98,
      add: 84.9,
      tongbi: -2,
      tongbilv: -1.1
    }
    , {
      id: '3',
      name: '湖北',
      age: '合计',
      address: 213,
      max: 0.17,
      tom: 98,
      add: 84.9,
      tongbi: -2,
      tongbilv: -1.1
    }, {
      id: '4',
      name: '湖北',
      age: '合计',
      address: 213,
      max: 0.17,
      tom: 98,
      add: 84.9,
      tongbi: -2,
      tongbilv: -1.1
    },
    {
      id: '5',
      name: '湖北',
      age: '合计',
      address: 213,
      max: 0.17,
      tom: 98,
      add: 84.9,
      tongbi: -2,
      tongbilv: -1.1
    }
  ];
  return (
    <div className={styles.normal}>
      {/* 头部 */}
      <div className={styles.title}>
        <div>
          <span>安能快运05月27日</span>
          <span style={{ marginLeft: '0.3em' }}>湖北时时直播</span>
        </div>
        <div>
          <span>更新时间</span>
          <span style={{ marginLeft: '0.3em' }}>12:00:00</span>
        </div>
      </div>
      {/* 卡片 */}
      <div className={styles.button_tab}>
        <Radio.Group size='small' value="1" buttonStyle="solid">
          <Radio.Button value="1">全网</Radio.Button>
          <Radio.Button value="2">网络</Radio.Button>
          <Radio.Button value="3">市场</Radio.Button>
        </Radio.Group>
        <Radio.Group size='small' buttonStyle="outline" value="1" >
          <Radio.Button value="1">查看大区</Radio.Button>
          <Radio.Button value="2">查看分拨</Radio.Button>
          <Radio.Button value="3">查看片区</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: "center", flexDirection: "row", padding: '0.5em' }}>
        <Card size="small" title="当前货量" headStyle={{ color: "#ccc" }} style={{ marginRight: '0.3em',width:"33%" }}>
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: '#cf1322', fontSize: 20 }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
        <Card size="small" title="当前货量百分比" headStyle={{ color: "#ccc" }} style={{ marginRight: '0.3em',width:"33%" }}>
          <Statistic
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600', fontSize: 20 }}
            prefix={<ArrowDownOutlined />}
            suffix="t"
          />
        </Card>
        <Card size="small" title="当前货量" headStyle={{ color: "#ccc" }} style={{ width:"33%" }}>
          <Statistic
            value={30.28}
            precision={2}
            valueStyle={{ color: '#cf1322', fontSize: 20 }}
            suffix="kg"
            prefix={<ArrowUpOutlined />}
          />
        </Card>
      </div>
      {/* Table */}
      <div style={{ padding: '0.5em' }}>
        <Table
          className={styles.table_row}
          id="id"
          dataSource={dataSource}
          columns={columns}
          scroll={{ x: 500, y: '100%' }}
          pagination={false}
        />
      </div>

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
