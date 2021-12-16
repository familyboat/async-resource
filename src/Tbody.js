function Tbody(props) {
  const {columns, dataSource} = props;

  const dataRender = (data) => {
    return columns.map((column, index) => {
      const dataIndex = column.dataIndex;
      return (
        <td key={index}>
          {data[dataIndex]}
        </td>
      )
    })
  }

  const tbodyRender = () => {
    return dataSource.map((data, index) => {
      return (
        <tr key={index}>
          {dataRender(data)}
        </tr>
      )
    })
  }

  return (
    <tbody>
      {tbodyRender()}
    </tbody>
  )
}

export default Tbody;