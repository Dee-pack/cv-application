import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/index.css";
import "./styles/section.css";

export default function App() {
  return (
    <main className="cv">
      <GeneralInfo />
      <Education />
      <Experience />
      <button
        className="btn btn-primary print-btn"
        onClick={() => window.print()}
      >
        Download PDF
      </button>
    </main>
  );
}
