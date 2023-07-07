import type { EnqueuedTask, Hits, Index, IndexOptions, IndexesResults, MeiliSearch, DocumentOptions as RecordOptions, Settings as SearchEngineSettings, SearchParams, SearchResponse } from 'meilisearch'
import type { MaybePromise } from '.'

type Search = any
type Page = any
type Pages = Page[]
type Filter = any
type Filters = Filter[]
type Result = any
type Results = Result[]
type SearchFilter = any
type SearchFilters = SearchFilter[]
type Sorts = any
type Sort = any

export interface SearchEngineOptions {
  /**
   * **Search Engine Driver**
   *
   * The search engine to utilize.
   *
   * @default string 'meilisearch'
   * @see https://stacksjs.dev/docs/search-engine
   */
  driver: 'meilisearch' | 'algolia'

  meilisearch?: {
    host: string
    apiKey: string
  }
}

export interface ServicesOptions {
  algolia?: {
    appId: string
    apiKey: string
  }

  meilisearch?: {
    appId: string
    apiKey: string
  }

  stripe?: {
    appId: string
    apiKey: string
  }

  planetscale?: {
    appId: string
    apiKey: string
  }

  supabase?: {
    appId: string
    apiKey: string
  }

  aws?: {
    appId: string
    apiKey: string
  }

  novu?: {
    key: string
  }
}

export interface StorageOptions {
  /**
   * **Storage Driver**
   *
   * The storage driver to utilize.
   *
   * @default string 's3'
   * @see https://stacksjs.dev/docs/storage
   */
  driver: 's3' | 'local'

  /**
   * **Storage Name**
   *
   * The name of the storage bucket.
   *
   * @default string `${app.url}-${region}-${accountId}`
   * @see https://stacksjs.dev/docs/storage
   */
  name: string
}

export interface MeiliSearchOptions {
  apiKey: string
  host: string
}

export interface SearchEngineDriver {
  client: MeiliSearch

  // Indexes
  createIndex: (name: string, options?: IndexOptions) => MaybePromise<EnqueuedTask>
  getIndex: (name: string) => MaybePromise<Index>
  updateIndex?: (name: string, options: IndexOptions) => MaybePromise<EnqueuedTask>
  deleteIndex?: (name: string) => MaybePromise<EnqueuedTask>
  updateIndexSettings: (name: string, settings: SearchEngineSettings) => MaybePromise<EnqueuedTask>
  listAllIndexes: () => MaybePromise<IndexesResults<Index[]>>
  listAllIndices: () => MaybePromise<IndexesResults<Index[]>> // alternatives plural spelling

  // Records (MeiliSearch uses the term "documents")
  getRecord?: (key: string) => MaybePromise<any>
  getRecords?: (key: string) => MaybePromise<RecordOptions>
  createRecord?: (record: any, indexName: string, options: RecordOptions) => MaybePromise<EnqueuedTask>
  createRecords?: (records: any, indexName: string, options: RecordOptions) => MaybePromise<EnqueuedTask>
  createOrReplaceRecord?: (record: any, indexName: string, options: RecordOptions) => MaybePromise<EnqueuedTask>
  createOrUpdateRecord?: (record: any, indexName: string, options: RecordOptions) => MaybePromise<EnqueuedTask>
  deleteRecord?: (recordId: string | number, indexName: string) => MaybePromise<EnqueuedTask>
  deleteAllRecords?: (indexName: string) => MaybePromise<EnqueuedTask>
  batchDeleteRecords?: (recordIds: string[] | number[], indexName: string) => MaybePromise<EnqueuedTask>

  // Search
  search?: (query: string, indexName: string, options: SearchParams) => MaybePromise<Search>

  calculatePagination: Pages
  currentPage: Page
  filterName: string
  filters: Filters
  goToNextPage: () => Page
  goToPage: (pageNumber: number) => Page
  goToPrevPage: () => Page
  hits: Hits
  index: Index
  lastPage: Page
  perPage: number
  query: string
  results: Results // SearchResponse
  searchFilters: SearchFilters
  searchParams: SearchParams
  setTotalHits: number
  sort: Sort
  sorts: Sorts
  totalPages: number
}

export type SearchEngineDriverFactory<T> = (opts?: T) => SearchEngineDriver

/**
 * This interface is used to unify the persisting of data to localStorage
 */
export interface SearchEngineStorage {
  /**
   * The search engine index name.
   * i.e. the type of table, like `users`, `posts`, `products`, etc.
   */
  index?: string
  /**
   * The search engine results object.
   */
  results?: SearchResponse
  /**
   * The search engine hits object.
   */
  hits?: Hits
  /**
   * The number of hits to be returned per page.
   *
   * @default number 20
   */
  perPage: number
  /**
   * The current page number.
   *
   * @default number 1
   */
  currentPage: number
}

export type { EnqueuedTask, Hits, Index, IndexOptions, IndexesResults, MeiliSearch, RecordOptions, SearchEngineSettings, SearchParams, SearchResponse }
