import React from "react";
import './App.css';
import Loading from "./Loading";
import { GoCheck } from "react-icons/go";

const url = `https://course-api.com/react-tabs-project`;

function App() {
  const [jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);
      setLoading(false);
      console.log(data);
    }
    getData();
  }, [])
  if (loading) {
    return <Loading />
  }
  const {title, dates, duties, company} = jobs[count]
  return (
    <div className="App">
      <h1 className="main-title">experience</h1>
      <div className="underline"></div>
      <main>
        <section className="tabs-buttons">
          {
            jobs.map((job, index) => {
              return(
                <button 
                  key={index} 
                  type="button" 
                  className={`btn ${index===count && "active"}`} 
                  onClick={() => setCount(index)}
                >
                  {job.company}
                </button>
              )
            })
          }
        </section>
        <section className="tabs-container">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          <div className="duties-container">
            {duties.map((duty, index) => {
              return(
                <div key={index} className="duty">
                  <p>
                  <GoCheck className="icon" /> 
                  {duty}
                  </p>
                </div>
              )
            })}
          </div>
          <button className="more-info">more info</button>
        </section>
      </main>
    </div>
  );
}

export default App;
