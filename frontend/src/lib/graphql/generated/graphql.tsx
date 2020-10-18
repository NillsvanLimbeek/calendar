import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  events?: Maybe<Array<Maybe<Event>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent?: Maybe<Event>;
  updateEvent?: Maybe<Event>;
  deleteEvent?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateEventArgs = {
  input: NewEventInput;
};


export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID'];
};

export type Event = {
  __typename?: 'Event';
  id?: Maybe<Scalars['ID']>;
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type NewEventInput = {
  title: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
};

export type UpdateEventInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  start: Scalars['String'];
  end: Scalars['String'];
};

export type CreateEventMutationVariables = Exact<{
  input: NewEventInput;
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { createEvent?: Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'start' | 'end' | 'title' | 'createdAt' | 'updatedAt'>
  )> }
);

export type EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events?: Maybe<Array<Maybe<(
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'start' | 'end' | 'title' | 'createdAt' | 'updatedAt'>
  )>>> }
);


export const CreateEventDocument = gql`
    mutation CreateEvent($input: NewEventInput!) {
  createEvent(input: $input) {
    id
    start
    end
    title
    createdAt
    updatedAt
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, baseOptions);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
export const EventsDocument = gql`
    query Events {
  events {
    id
    start
    end
    title
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, baseOptions);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, baseOptions);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;