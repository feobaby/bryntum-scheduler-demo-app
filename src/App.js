import { BryntumScheduler } from "@bryntum/scheduler-react";
import { schedulerConfig } from "./SchedulerConfig";
import "./App.scss";
import CodeMiniBox from "./code-mini-box";

function App() {
  return (
    <>
      <CodeMiniBox />
      <BryntumScheduler {...schedulerConfig} />
    </>
  );
}

export default App;
