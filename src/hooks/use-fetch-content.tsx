import qs from 'qs';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { HN_API } from '../constants';

type FetchContentProps = {
  endpoint: string;
  query?: any;
  previousData?: any | null;
};

const queryBuilder = ({ endpoint, query }: FetchContentProps) => {
  const plainQuery = qs.stringify(query, { encodeValuesOnly: true });
  return `${HN_API}${endpoint}?${plainQuery}`;
};

const getKey = (pageIndex: number, previousData: any | null, { endpoint, query }: FetchContentProps) => {
  if (previousData && previousData.length) return null;
  const newQuery = { ...query, page: pageIndex + 1 };
  return queryBuilder({ endpoint, query: newQuery });
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useFetchContent = (props: FetchContentProps) => {
  const { data, error } = useSWR(queryBuilder(props), {
    fetcher: fetcher,
  });

  return {
    content: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useFetchInfiniteContent = (props: FetchContentProps) => {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (pageIndex: number, previousData: any | null) => getKey(pageIndex, previousData, props),
    fetcher
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

const fakeFetcher = (topic?: string) => fetch(`/fake-response-${topic || 'angular'}.json`).then((res) => res.json());
const useFetchFakeContent = ({ endpoint, query }: FetchContentProps) => {
  const { data, error } = useSWR(query.query, {
    fetcher: fakeFetcher,
  });

  return {
    content: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useFetchContent as default, useFetchFakeContent, useFetchInfiniteContent };
