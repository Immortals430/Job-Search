import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Cards({ filteredJobs, loading, jobs }) {
  const [descExpand, setDescExpand] = useState(null);

  // expand card
  const expandDesc = (index) => {
    if (descExpand == index) setDescExpand(null);
    else setDescExpand(index);
  };

  return (
    <>
      <Container>
        <Row>
          {filteredJobs.map((obj, i) => (
            <Col xs={12} md={6} lg={4} xl={3} className="gy-4" key={i}>
              <Card className="border border-light shadow hover-lift">
                <Card.Body>
                  <Card.Title>{obj.position}</Card.Title>
                  <Card.Subtitle className="mb-1 text-muted">
                    <strong className="text-dark">Company:</strong>{" "}
                    {obj.company}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    <strong className="text-dark">category: <span className="text-success">{obj.job_category}</span></strong>{" "}
                    
                  </Card.Subtitle>
                  <Card.Text
                    className={`${
                      descExpand == i ? "expand-desc" : null
                    } description`}
                  >
                    {obj.job_description}
                  </Card.Text>
                  <Button variant="primary" onClick={() => expandDesc(i)}>
                    {descExpand == i ? "View Less" : "View Details"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {(!loading && filteredJobs.length == 0) || jobs.length == 0 ? (
        <Container>
          <img src="/not-found.avif" className="not-found" height="327.4" />
          <h1 className="not-found-text">No Job Found</h1>
        </Container>
      ) : null}
    </>
  );
}
