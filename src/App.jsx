import { useState } from "react";

const classes = [
  { id: 1, name: "Class 1" },
  { id: 2, name: "Class 2" },
  { id: 3, name: "Class 3" },
  { id: 4, name: "Class 4" },
  { id: 5, name: "Class 5" },
  { id: 6, name: "Class 6" },
];

const classResources = {
  1: { studentPdf: "", teacherPdf: "", youtube: [] },
  2: { studentPdf: "", teacherPdf: "", youtube: [] },
  3: { studentPdf: "", teacherPdf: "", youtube: [] },
  4: { studentPdf: "", teacherPdf: "", youtube: [] },
  5: { studentPdf: "", teacherPdf: "", youtube: [] },
  6: { studentPdf: "", teacherPdf: "", youtube: [] },
};

function Landing({ onSelectClass }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Australian Magnetometers in Schools
      </h1>

      <img
        src="/aurora-australis.jpg"
        alt="Aurora Australis"
        className="w-full rounded-xl mb-6"
      />

      <p className="mb-6">
        UTAS outreach project connecting schools with geomagnetic data.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {classes.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelectClass(c.id)}
            className="p-3 bg-blue-600 text-white rounded-xl"
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function ClassPage({ classId, onBack }) {
  const data = classResources[classId];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button onClick={onBack}>← Back</button>

      <h1 className="text-2xl font-bold">Class {classId}</h1>

      <p>Student PDF: {data.studentPdf || "Not set"}</p>
      <p>Teacher PDF: {data.teacherPdf || "Not set"}</p>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" ? (
        <Landing onSelectClass={(id) => setPage(id)} />
      ) : (
        <ClassPage classId={page} onBack={() => setPage("home")} />
      )}
    </div>
  );
}
