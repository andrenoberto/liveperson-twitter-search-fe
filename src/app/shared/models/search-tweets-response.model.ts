import { SearchMetadata } from './search-metadata.model';
import { Tweet } from './tweet.model';

export class SearchTweetsResponse {
  searchMetadata?: SearchMetadata;
  tweets?: Tweet[];
}