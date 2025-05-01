const Resources: React.FC = () => {
  const pdf = "/src/assets/CP Handbook.pdf";

  return (
    <div className="resource-page">
      <p>
        <strong>Mentor: </strong>ChatGPT
      </p>
      <p>
        1. CP Handbook Pdf:
        <a href={pdf} download={"CP Handbook.pdf"}>
          [Downlaod]
        </a>
      </p>
      <p>
        2. Video Resources [IIT Madras Club]:
        <a href="https://www.youtube.com/playlist?list=PLYjg3GwRYFLXv3BA8w3CjWpRS8_UMBlDs">
          [Click]
        </a>
      </p>
      <p>
        3. Codeforces Official Website (Problem Solving + Contest):
        <a href="https://codeforces.com">[Click]</a>
      </p>

      <p>
        4. CP Algorithm [for learning Algorithms]:
        <a href="https://cp-algorithms.com/index.html">[Click]</a>
      </p>

      <p>
        5. TLE YT Channel:
        <a href="https://www.youtube.com/@TLE_Eliminators">[Click]</a>
      </p>
      <p>etc...</p>
      <br />
      <h3>Steps:</h3>
      <p>1. Practice Problems</p>
      <p>2. Give Contests</p>
      <p> 3. Upsolve & Learn New Concepts</p>
      <p>4. Repeat</p>

      <br />
      <p>
        <strong>Tip: </strong> Do not make it complicated , do it if you like
        it, as simple as that.
      </p>
    </div>
  );
};

export default Resources;
