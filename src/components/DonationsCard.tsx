import { HandHeart } from "lucide-react";

import { Button } from "./Button";
import { Progress } from "./Progress";

interface DonationsCardProps {
  children: React.ReactNode;
  imageUrl: string;
  progress: number;
  title: string;
}

export const DonationsCard = ({
  children,
  imageUrl,
  progress,
  title,
}: DonationsCardProps) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-xl w-full max-w-96">
      <div className="rounded-xl h-56 w-full overflow-hidden">
        <img src={imageUrl} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-lg font-bold">
          {title}
        </span>
        <p className="text-sm leading-6">
          {children}
        </p>
      </div>
      <div className="flex flex-col">
        <Progress value={progress} />
        <span className="text-sm text-teal-800 font-bold">
          {progress}%
        </span>
      </div>
      <Button className="font-bold" size="sm">
        <HandHeart className="size-4" />
        Donate
      </Button>
    </div>
  );
};
