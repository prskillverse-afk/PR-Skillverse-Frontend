import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./CreateBatch.css";

export default function CreateBatch() {
  const [courseId, setCourseId] = useState("");
  const [batchName, setBatchName] = useState("");
  const [trainer, setTrainer] = useState("");

  async function createBatch() {
    if (!courseId || !batchName) {
      alert("Fill all fields");
      return;
    }

    await addDoc(collection(db, "batches"), {
      courseId,
      batchName,
      trainer,
      isActive: true,
      createdAt: Timestamp.now(),
    });

    alert("Batch created successfully");
    setBatchName("");
    setTrainer("");
  }

  return (
    <div className="batch-card">
      <h2>Create Batch</h2>

      <select onChange={(e) => setCourseId(e.target.value)}>
        <option value="">Select Course</option>
        <option value="sap-fico-workshop">SAP FICO Workshop</option>
        <option value="sap-s4hana-finance">SAP S/4HANA Finance</option>
      </select>

      <input
        placeholder="Batch Name (Eg: Jan 2025)"
        value={batchName}
        onChange={(e) => setBatchName(e.target.value)}
      />

      <input
        placeholder="Trainer Name"
        value={trainer}
        onChange={(e) => setTrainer(e.target.value)}
      />

      <button onClick={createBatch}>Create Batch</button>
    </div>
  );
}
