import { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Filters from "./Components/Filters";
import FallbackCards from "./Components/FallbackCards";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await axios.get(
        "https://run.mocky.io/v3/0edd1a6f-f06c-4511-a290-8a76331257b8"
      );
      setJobs(data);
      setFilteredJobs(data);
      setLoading(false);
    };
    fetchJobs();
  }, []);


  
  return (
    <>
      <header className="fixed-top">
        <Header setLoading={setLoading} jobs={jobs} setFilteredJobs={setFilteredJobs} />
        <Filters setLoading={setLoading} jobs={jobs} setFilteredJobs={setFilteredJobs} />
      </header>

      <main>
        {loading && <FallbackCards />}
        <Cards loading={loading} filteredJobs={filteredJobs} jobs={jobs} />
      </main>
    </>
  );
}

export default App;
