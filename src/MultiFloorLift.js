import React, { useState, useEffect } from "react";
import "./MultiLiftSystem.css";

const totalFloors = 7;
const totalLifts = 3;

const MultiLiftSystem = () => {
  const [lifts, setLifts] = useState(
    Array.from({ length: totalLifts }, (_, i) => ({
      id: i,
      currentFloor: 1,
      moving: false,
    }))
  );
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (requests.length > 0) {
      handleLiftAssignment();
    }
  }, [requests]);

  const handleLiftAssignment = () => {
    if (requests.length === 0) return;

    let availableLifts = lifts
      .filter((lift) => !lift.moving)
      .sort((a, b) => Math.abs(a.currentFloor - requests[0]) - Math.abs(b.currentFloor - requests[0]));

    if (availableLifts.length > 0) {
      let assignedLift = availableLifts[0];
      moveLift(assignedLift, requests[0]);
      setRequests((prevRequests) => prevRequests.slice(1)); // Remove processed request
    }
  };

  const moveLift = (lift, targetFloor) => {
    setLifts((prevLifts) =>
      prevLifts.map((l) =>
        l.id === lift.id
          ? { ...l, moving: true }
          : l
      )
    );

    setTimeout(() => {
      setLifts((prevLifts) =>
        prevLifts.map((l) =>
          l.id === lift.id
            ? { ...l, currentFloor: targetFloor, moving: false }
            : l
        )
      );
    }, 2000);
  };

  const callLift = (floor) => {
    if (!requests.includes(floor)) {
      setRequests([...requests, floor]);
    }
  };

  return (
    <div className="building">
      {[...Array(totalFloors).keys()].reverse().map((floor) => (
        <div key={floor} className="floor">
          <button onClick={() => callLift(floor + 1)}>Call Lift</button>
          {lifts.map((lift) =>
            lift.currentFloor === floor + 1 ? (
              <div key={lift.id} className={`lift ${lift.moving ? "moving" : ""}`}>
                🚀
              </div>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiLiftSystem;
