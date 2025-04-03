import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


export default function Filters({ setFilteredJobs, jobs, setLoading }) {


  // filter job by category
  const searchFilteredJob = (e) => {
    e.preventDefault();
    const filteredJobList = jobs.filter((obj) => {
      return obj.job_category.includes(e.target.innerText.toLowerCase());
    });
    setLoading(true);
    setFilteredJobs(filteredJobList);
    setLoading(false);
  };

  return (
    <Container className="py-2 filter-container">
      <Nav
        variant="pills"
        activeKey="1"
        className="align-items-center filter"
      >
        <Nav.Item className="text-dark fs-4 me-4 ">Filters:</Nav.Item>

        <DropdownButton title="Category" variant="secondary" menuVariant="dark" >
          <Dropdown.Item onClick={searchFilteredJob}>
            Full Time
          </Dropdown.Item>
          <Dropdown.Item onClick={searchFilteredJob}>
            Part Time
          </Dropdown.Item>
          <Dropdown.Item onClick={searchFilteredJob}>
            Remote
          </Dropdown.Item>
        </DropdownButton>
      </Nav>
    </Container>
  );
}
