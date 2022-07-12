import useSWR from 'swr';
import { FetchContentProps, fetcher, queryBuilder } from '../helpers/fetch';

const /**
   * React hook to fetching content
   * @kind hook
   * @prop {string} endpoint
   * @prop {any} query
   * @prop {any | null=} previousData
   * @return {object}}
   */
  useFetchContent = (props: FetchContentProps) => {
    const { data, error } = useSWR(queryBuilder(props), {
      fetcher: fetcher,
    });

    return {
      content: data,
      isLoading: !error && !data,
      isError: error,
    };
  };

export { useFetchContent as default };
