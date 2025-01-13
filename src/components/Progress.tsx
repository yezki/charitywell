import { type ProgressHTMLAttributes } from "react";

export const Progress = ({
  value,
  max,
  ...props
}: ProgressHTMLAttributes<HTMLProgressElement>) => {
  return (
    <progress value={value || 0} max={max || 100} className="h-1 w-full bg-neutral-200" {...props}>
      <div className="h-1 bg-neutral-200" style={{ width: `${max || 100}%` }}>
        <div className="h-full bg-teal-800" style={{ width: `${value || 0}%` }}>
        </div>
      </div>
    </progress>
  );
};
