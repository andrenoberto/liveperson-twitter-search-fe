import { SearchMetadata } from './search-metadata.model';
import { Tweet } from './tweet.model';

export interface SearchTweetsResponse {
  searchMetadata?: SearchMetadata;
  tweets?: Tweet[];
}