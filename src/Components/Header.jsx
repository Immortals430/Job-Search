import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

function Header({ setFilteredJobs, setLoading, jobs }) {
  const [jobInput, setJobInput] = useState("");

  // filter job by title
  const searchFilteredJob = (e) => {
    e.preventDefault();
    const filteredJobList = jobs.filter((obj) => {
      return obj.title.includes(jobInput.toLowerCase());
    });
    setLoading(true);
    setFilteredJobs(filteredJobList);
    setLoading(false);
  };

  return (
    <Navbar expand="lg" className="nav-bar">
      <Container fluid>
        <Navbar.Brand href="/" className="text-pink-500 ">
          <h1 className="logo">Jobsearch</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="hamburger-menu"
        />
        <Navbar.Collapse className="flex-grow-0">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Title..."
              className="me-2"
              aria-label="Search"
              name="jobInput"
              onChange={(e) => setJobInput(e.target.value)}
            />
            <Button
              className="job-search-btn border border-light text-light"
              variant=""
              onClick={(e) => searchFilteredJob(e)}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
