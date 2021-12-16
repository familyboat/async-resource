function Theader(props) {
  const {columns} = props;
  const theadRender = () => {
    return columns.map((column, index) => {
      return (
        <td key={index}>
          {column.title}
        </td>
      )
    })
  };

  return (
    <thead>
      <tr>
        {theadRender()}
      </tr>
    </thead>
  )
}

export default Theader;