import { useEffect, useState } from "react";

interface Problem {
  id: number;
  problemStatement: string;
  problemLink: string;
  solutionLink: string;
  rating: number;
}

const Home: React.FC = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [solvedProblems, setSolvedProblems] = useState<number[]>([]);
  const [minRating, setMinRating] = useState<number>();
  const [maxRating, setMaxrating] = useState<number>();
  const [filterApllied, setFilterApplied] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [progressStats, setProgressStats] = useState({
    total: 0,
    solved: 0,
    percentage: 0,
  });
  const problemsPerPage: number = 20;

  useEffect(() => {
    const savedSolvedProblems = localStorage.getItem("solvedProblems");
    if (savedSolvedProblems) {
      setSolvedProblems(JSON.parse(savedSolvedProblems));
    }

    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProblems(data);
        updateProgressStats(
          data,
          savedSolvedProblems ? JSON.parse(savedSolvedProblems) : []
        );
      })
      .catch((error) => console.error("Error fetching problems:", error));
  }, []);

  const updateProgressStats = (allProblems: Problem[], solved: number[]) => {
    const total = allProblems.length;
    const solvedCount = solved.length;
    const percentage = total > 0 ? Math.round((solvedCount / total) * 100) : 0;

    setProgressStats({
      total,
      solved: solvedCount,
      percentage,
    });
  };

  const handleCheckbox = (id: number) => {
    const index = solvedProblems.indexOf(id);
    let updatedSolvedProblems;

    if (index === -1) {
      updatedSolvedProblems = [...solvedProblems, id];
    } else {
      updatedSolvedProblems = [
        ...solvedProblems.slice(0, index),
        ...solvedProblems.slice(index + 1),
      ];
    }

    setSolvedProblems(updatedSolvedProblems);
    localStorage.setItem(
      "solvedProblems",
      JSON.stringify(updatedSolvedProblems)
    );
    updateProgressStats(problems, updatedSolvedProblems);
  };

  const handleminRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinRating(parseInt(event.target.value));
  };

  const handlemaxRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxrating(parseInt(event.target.value));
  };

  const applyFilter = () => {
    setFilterApplied(true);
    setCurrentPage(1);
  };

  const resetFilter = () => {
    setMinRating(undefined);
    setMaxrating(undefined);
    setFilterApplied(false);
    setCurrentPage(1);
    window.location.reload();
  };

  const startIdx = (currentPage - 1) * problemsPerPage;
  const endIdx = currentPage * problemsPerPage;

  let filteredProblems: Problem[] = problems;

  if (
    filterApllied &&
    typeof minRating === "number" &&
    typeof maxRating === "number"
  ) {
    filteredProblems = problems.filter(
      (problem) => problem.rating >= minRating && problem.rating <= maxRating
    );
  }

  const displayedProblems = filteredProblems.slice(startIdx, endIdx);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container">
      <div className="progress-dashboard">
        <h2>Your Progress</h2>
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-value">{progressStats.solved}</div>
            <div className="stat-label">Problems Solved</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{progressStats.total}</div>
            <div className="stat-label">Total Problems</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{progressStats.percentage}%</div>
            <div className="stat-label">Completion</div>
          </div>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progressStats.percentage}%` }}
          ></div>
        </div>
      </div>

      <p style={{ marginLeft: "38px" }}>
        <strong>Tip:</strong> Going to solution without attempting the question
        is waste of your time
      </p>
      <br />
      <div style={{ marginLeft: "38px" }}>
        <label>
          <strong> Difficulty:</strong>
          <input type="number" value={minRating} onChange={handleminRating} />
          -
          <input type="number" value={maxRating} onChange={handlemaxRating} />
        </label>
        <button onClick={applyFilter}>Apply</button>
        <button onClick={resetFilter}>Reset</button>
      </div>
      <br />
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
        <tbody>
          {displayedProblems.map((problem, index) => (
            <tr
              key={problem.id}
              style={{
                backgroundColor: solvedProblems.includes(problem.id)
                  ? "lightgreen"
                  : "",
              }}
            >
              <td>{startIdx + index + 1}.</td>
              <td>
                <a
                  href={problem.problemLink}
                  style={{
                    textDecoration: "none",
                    color: "blue",
                  }}
                >
                  {problem.problemStatement}
                </a>
              </td>
              <td>
                <a
                  href={problem.solutionLink}
                  style={{
                    textDecoration: "none",
                    color: "blue",
                  }}
                >
                  Solution
                </a>
              </td>
              <td>{problem.rating}</td>
              <td>
                <input
                  type="checkbox"
                  checked={solvedProblems.includes(problem.id)}
                  onChange={() => {
                    handleCheckbox(problem.id);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-btn">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <button
          disabled={displayedProblems.length < problemsPerPage}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
