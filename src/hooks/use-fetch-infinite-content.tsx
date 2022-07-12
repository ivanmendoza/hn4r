import useSWRInfinite from 'swr/infinite';
import { FetchContentProps, fetcher, getKey } from '../helpers/fetch';

const /**
   * React hook to handle fetch content for "infinite loadings".
   * @kind hook
   * @prop {string} endpoint
   * @prop {any} query
   * @prop {any | null=} previousData
   * @return {object}
   */
  useFetchInfiniteContent = (props: FetchContentProps) => {
    const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
      (pageIndex: number, previousData: any | null) => {
        return getKey(pageIndex, previousData, props);
      },
      fetcher,
      {
        revalidateFirstPage: false,
      }
    );

    return {
      content: data,
      isLoading: !error && !data,
      isLoadingMore: (!error && !data) || (size > 0 && data && data[size - 1] === 'undefined'),
      isFetching: isValidating && data && data.length === size,
      size,
      setSize,
      mutate,
      isError: error,
    };
  };

export { useFetchInfiniteContent as default };
