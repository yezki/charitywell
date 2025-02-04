interface OurServicesCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const OurServicesCard = ({
  title,
  icon,
  children,
}: OurServicesCardProps) => {
  return (
    <div className="flex flex-col gap-y-8 items-center">
      <div className="flex justify-center items-center w-16 h-16 py-4 bg-teal-800 rounded-full">
        {icon}
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="text-center lg:text-nowrap text-xl font-bold">
          {title}
        </span>
        <p className="text-center leading-loose lg:leading-9">
          {children} 
        </p>
      </div>
    </div>
  );
};
