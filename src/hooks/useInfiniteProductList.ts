import { getProductList } from "@/api/product/apis";
import { PRODUCT_LIST } from "@/constants/query-keys";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useInfiniteScrollProductList = (
  params: ProductParamsType,
  isEnable: boolean = true
) => {
  return useInfiniteQuery({
    queryKey: [PRODUCT_LIST, params],
    queryFn: ({ pageParam = "" }) => {
      const queryParams: ProductParamsType = {
        ...params,
        cursor: pageParam,
      };
      return getProductList(queryParams);
    },
    initialPageParam: "",
    getNextPageParam: (lastPage) => {
      if (!lastPage || !lastPage.cursor) {
        return undefined; // 추가 요청이 없음을 명시
      }
      return lastPage.cursor;
    },
    enabled: isEnable,
  });
};
