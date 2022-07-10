import qs from 'qs';
import useSWR from 'swr';
import { HN_API } from '../constants';

type FetchContentProps = {
  endpoint: string;
  query?: any;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const useFetchContent = ({ endpoint, query }: FetchContentProps) => {
  const plainQuery = qs.stringify(query, { encodeValuesOnly: true });
  const { data, error } = useSWR(`${HN_API}${endpoint}?${plainQuery}`, {
    fetcher: fetcher,
  });

  return {
    content: data,
    isLoading: !error && !data,
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

export { useFetchContent as default, useFetchFakeContent };
