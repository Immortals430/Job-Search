import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Cards() {
  return (
    <Container>
      <Row>
        {Array.from({ length: 8 }).map((obj, i) => (
          <Col xs={12} md={6} lg={4} xl={3} className="gy-4" key={i}>
            <Card className="border border-light shadow hover-lift">
              <Skeleton height="136.8px" />
              <Skeleton height="21px" />
              <Skeleton height="21px" />
              <Skeleton height="21px" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
