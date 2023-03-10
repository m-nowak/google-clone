import SearchHeader from "./SearchHeader";

export default function SearchLayout({ children }: any) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
