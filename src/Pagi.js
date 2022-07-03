const Pagi = ({ postPerPage, totalposts, paginate }) => {
  const pagnN = [];
  for (let i = 1; i <= Math.ceil(totalposts / postPerPage); i++) {
    pagnN.push(i);
  }
  return (
    <div className="container">
      <ul className="pagination">
        {pagnN.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#"  className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagi;
