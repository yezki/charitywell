interface ContactListProps {
  title: string;
  children: React.ReactNode;
}

export const ContactList = ({
  title,
  children,
}: ContactListProps) => {
  return (
    <div className="flex flex-col text-teal-800">
      <span className="text-sm font-medium">({title})</span>
      <span className="font-bold">{children}</span>
    </div>
  );
};
