import React from "react";
import { a, useTransition } from "@react-spring/web";
import { useProgress } from "@react-three/drei";

export default function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });

  return transition(
    ({ opacity }, active) =>
      active && (
        <a.div className="loading" style={{ opacity }}>
          <div className="title"></div>
          <div className="loading-bar-container">
            <div className="loadingText">Loading {progress.toFixed()}%</div>
          </div>
        </a.div>
      )
  );
}
