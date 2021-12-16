import Tbody from "./Tbody";
import Theader from "./Theader";

function Table(props) {
  const {columns, dataSource} = props;

  return (
    <table>
      <Theader
        columns={columns}
      />
      <Tbody
        columns={columns}
        dataSource={dataSource}
      />
    </table>
  )
}

export default Table;