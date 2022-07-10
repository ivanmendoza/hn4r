type SchemaHackerNewsResponse = {
  hits: Array<SchemaHackerNewsHitItem>;
  nbHits?: number;
  page?: number;
  nbPages?: number;
  hitsPerPage?: number;
  exhaustiveNbHits?: boolean;
  exhaustiveTypo?: boolean;
  query?: string;
  params?: string;
  processingTimeMS?: number;
};

type SchemaHackerNewsHitItem = {
  created_at?: string;
  title?: string;
  url?: string;
  author?: string;
  points?: string;
  story_text?: string;
  comment_text?: string;
  num_comments?: string;
  story_id?: number;
  story_title?: string;
  story_url?: string;
  parent_id?: number;
  created_at_i?: number;
  _tags?: Array<string>;
  objectID?: string;
  _highlightResult?: {
    author?: SchemaHackerNewsHighlightResult;
    comment_text?: SchemaHackerNewsHighlightResult;
    story_title?: SchemaHackerNewsHighlightResult;
    story_url?: SchemaHackerNewsHighlightResult;
  };
};

type SchemaHackerNewsHighlightResult = {
  value?: string;
  matchLevel?: string;
  matchedWords?: Array<string>;
  fullyHighlighted?: false;
};

export type { SchemaHackerNewsResponse, SchemaHackerNewsHighlightResult, SchemaHackerNewsHitItem };
