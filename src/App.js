import './App.css';
import Table from './Table';
import React from 'react';
import { httpGet} from './util';

function App() {
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
  ];

  const fn = async () => {
    const url = '/async-resource/services/persons.json';
    try {
      const persons = await httpGet(url);

      /* 对请求回的数据做一些截断处理 */
      const length = persons.length;
      const index = Math.ceil(Math.random() * length);
      setDataSource(persons.slice(0, index));
    } catch (e) {
      setDataSource([])
    }
  };

  /**  
    *后端资源应该在放在state中维护
    *
    *根据state的值，推断出该资源的当前所处的状态：
    *未请求态--null
    *请求成功态--[{}, {}]
    *请求失败态--[]
    *
    *对不同的state设置不同的ui，让交互更细化，更人性化
  */
  const [dataSource, setDataSource] = React.useState(null);

  React.useEffect(() => {
    fn();
  }, []);

  const tableRender = () => {
    if (dataSource === null) {
      return 'loading >>>';
    }
    const hasData = !!Object.keys(dataSource).length;
    if (hasData) {
      return (
        <Table
          columns={columns}
          dataSource={dataSource}
        />
      )
    } else {
      return (
        <button
         onClick={() => {fn()}}
        >
          loading error, load again.
        </button>
      )
    }
  }
  return (
    <>
      {tableRender()}
    </>
  );
}

export default App;
