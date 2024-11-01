"use client";

// import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
// import { useDebounce } from "@/hooks/useDebounce";
// import { useProducts } from "@/api/product/queries";
import SearchHeader from "@/components/search/search-header";
// import SearchResult from "@/components/search/search-result";

const SearchContainer = () => {
  const method = useForm<ProductParamsType>();
  const { handleSubmit } = method;

  // debounce 적용할 객체
  // const formParams: ProductParamsType = {
  //   search: watch("search"),
  //   is_out_of_stock: watch("is_out_of_stock"),
  //   is_lowest_price_ever: watch("is_lowest_price_ever"),
  //   ordering: "discount_rate", // 아직 미 적용.
  // };

  // formParams에 debounce 적용
  // const debouncedParams = useDebounce(formParams);

  // react-query로 데이터 페칭
  // const { data, isLoading, refetch } = useProducts(debouncedParams);

  const onSubmit = handleSubmit(() => {
    // refetch();
  });

  // useEffect(() => {
  //   if (debouncedParams.search) {
  //     refetch();
  //   }
  // }, [debouncedParams]);

  return (
    <FormProvider {...method}>
      <form className="px-4 pt-14 text-ELSE-33" onSubmit={onSubmit}>
        <SearchHeader />
        {/* 미적용 */}
        {/* <RecentSearchKeyword keywords={keywords} /> */}
        {/* <SearchResult data={data?.results} isLoading={isLoading} /> */}
      </form>
    </FormProvider>
  );
};

export default SearchContainer;
