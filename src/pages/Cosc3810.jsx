import { useState, useEffect} from "react";
import { Card, Button } from "react-bootstrap";
import Assignment from "../components/Assignment";

function Cosc3810() {

  const [showAssignment, setShowAssignment] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleButtonClick = () => {
    setShowAssignment(true);
  };

  const cardMinHeight = viewportHeight - 120; // header + footer height

  return (
    <>
      <h1 className="p-3">cosc3810: Assignment</h1>
      <Card style={{ width: "100%", minHeight: cardMinHeight }}>
        <Card.Body>
          <Card.Title>Assignment 1 (Due: 3/31/23)</Card.Title>
          {showAssignment ? (
            <Assignment pdfUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" />
          ) : (
            <Button variant="primary" onClick={handleButtonClick}>
              Show Assignment
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default Cosc3810;
