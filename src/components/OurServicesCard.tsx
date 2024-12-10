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
    <div className="flex flex-col gap-8 items-center lg:px-4">
      <div className="flex justify-center items-center w-16 h-16 py-4 bg-teal-800 rounded-full">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-center lg:text-nowrap text-xl lg:text-2xl font-bold">
          {title}
        </span>
        <p className="text-center leading-loose lg:leading-9">
          {children} 
        </p>
      </div>
    </div>
  );
};
