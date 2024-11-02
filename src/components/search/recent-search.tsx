import RecentSearchItem from "./recent-search-item";
import CustomButton from "../common/custom-button";
import {
  useRecentSearchStore,
  useSearchFlagStore,
  useSearchParamsStore,
} from "@/stores/search/stores";

const RecentSearch = () => {
  const { recentSearch, clearRecentSearch } = useRecentSearchStore();
  const setSearchParams = useSearchParamsStore(
    (state) => state.setSearchParams
  );
  const setSearchFlag = useSearchFlagStore((state) => state.setSearchFlag);

  const handleClickRecentSearch = (search: string) => {
    setSearchParams("search", search);
    setSearchFlag(true);
  };

  return (
    <div className="flex flex-col gap-2 mt-3">
      <div className="flex flex-row justify-between items-center h-11">
        <p className="font-bold">최근 검색어</p>
        {recentSearch.length ? (
          <CustomButton
            className="size-fit text-md hover:text-ELSE-55"
            variant="none"
            smallSize
            onClick={clearRecentSearch}
          >
            전체삭제
          </CustomButton>
        ) : (
          ""
        )}
      </div>
      {recentSearch.length ? (
        <div>
          {recentSearch.map((search, idx) => (
            <RecentSearchItem
              key={`rsk-${idx}`}
              search={search}
              onClick={() => handleClickRecentSearch(search)}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-56">
          <p>최근 검색어가 없어요</p>
        </div>
      )}
    </div>
  );
};

export default RecentSearch;
