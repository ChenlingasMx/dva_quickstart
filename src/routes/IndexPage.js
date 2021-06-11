import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Table, Radio, Card } from 'antd'
import { columns } from './columns'

function IndexPage() {
  const dataSource = [
    {
      key: '1',
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
      <div className={styles.button_tab}>
        <Radio.Group size='small' buttonStyle="outline" >
          <Radio.Button value="small">全网</Radio.Button>
          <Radio.Button value="small">网络</Radio.Button>
          <Radio.Button value="small">市场</Radio.Button>
        </Radio.Group>
        <Radio.Group size='small' buttonStyle="outline" >
          <Radio.Button value="small">查看大区</Radio.Button>
          <Radio.Button value="small">查看分拨</Radio.Button>
          <Radio.Button value="small">查看片区</Radio.Button>
        </Radio.Group>
      </div>
      <div style={{ display: 'flex', justifyContent: "center", alignContent: "center", flexDirection: "row", padding: '0.5em' }}>
        <Card size="small" style={{ width: 300, marginRight: '0.3em' }}>
          <p>当前货量</p>
          <h3>513</h3>
        </Card>
        <Card size="small" style={{ width: 300, marginRight: '0.3em' }}>
          <p>当前货量</p>
          <h3>513</h3>
        </Card>
        <Card size="small" style={{ width: 300 }}>
          <p>当前货量</p>
          <h3>513</h3>
        </Card>
      </div>
      <div style={{ padding: '0.5em' }}>
        <Table
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
