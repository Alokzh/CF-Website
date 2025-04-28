const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Codeforces Problems</h1>
      <table className="table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Problems</th>
            <th>Solution</th>
            <th>Rating</th>
            <th>Solved</th>
          </tr>
        </thead>
        <tbody>{/* Problem data will be displayed here */}</tbody>
      </table>
    </div>
  );
};

export default Home;
