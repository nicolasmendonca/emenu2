import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Restaurant = {
   __typename?: 'Restaurant';
  id: Scalars['String'];
  name: Scalars['String'];
  image: Scalars['String'];
  slug: Scalars['String'];
  address: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  restaurant?: Maybe<Restaurant>;
  restaurants: Array<Restaurant>;
};


export type QueryRestaurantArgs = {
  slug: Scalars['String'];
};


