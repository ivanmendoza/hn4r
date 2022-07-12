import qs from 'qs';
import { HN_API } from '../constants';

/**
 * @kind typedef
 */
type FetchContentProps = {
  endpoint: string;
  query?: any;
  previousData?: any | null;
};

const /**
   * Builds the URL to request data to the API.
   * @param {FetchContentProps} props
   * @returns {string}
   */ queryBuilder = ({ endpoint, query }: FetchContentProps): string => {
    const plainQuery = qs.stringify(query, { encodeValuesOnly: true });
    return `${HN_API}${endpoint}?${plainQuery}`;
  };

const /**
   * Return a unique key to use with useSWRInfinite
   * @param {number} pageIndex
   * @param {any | null} previousData
   * @returns {string|null} key
   */ getKey = (pageIndex: number, previousData: any | null, { endpoint, query }: FetchContentProps): string | null => {
    if (previousData && previousData.length) return null;
    const newQuery = { ...query, page: pageIndex + 1 };
    return queryBuilder({ endpoint, query: newQuery });
  };

const /**
   * To fetch content from web. Is used by SWR hooks.
   * @param {string} url
   * @returns {Promise<any>}
   */
  fetcher = (url: string) => fetch(url).then((res) => res.json());

export { queryBuilder, getKey, fetcher };
export type { FetchContentProps };
