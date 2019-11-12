import { ISearchMetadata } from './i-search-metadata.model';
import { Tweet } from './i-tweet.model';

export interface ISearchTweetsResponse {
  searchMetadata?: ISearchMetadata;
  tweets?: ITweet[];
}