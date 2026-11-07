interface Props {
  children: React.ReactNode;
}

export default function AboutUsLayout({ children }: Props) {
  return (
    <main className="">
      {children}
    </main>
  );
}
