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
  image?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  restaurant: Restaurant;
  restaurants: Array<Restaurant>;
};


export type QueryRestaurantArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createRestaurant?: Maybe<Restaurant>;
};


export type MutationCreateRestaurantArgs = {
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};


