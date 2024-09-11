"use client";

import ToggleButton from "@/components/common/ToggleButton/ToggleButton";
import { useState } from "react";

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="text-purple">
      <ToggleButton
        isSelected={isClicked}
        onChange={() => setIsClicked((prev) => !prev)}
      />
    </div>
  );
}
