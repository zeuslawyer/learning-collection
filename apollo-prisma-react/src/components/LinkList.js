// @ts-nocheck
import React from 'react';
import Link from './Link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

// gql query using the gql function
const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

function LinkList() {
  const linksToRender = [
    {
      id: '1',
      description: 'Prisma turns your database into a GraphQL API 😎',
      url: 'https://www.prismagraphql.com'
    },
    {
      id: '2',
      description: 'The best GraphQL client',
      url: 'https://www.apollographql.com/docs/react/'
    }
  ];


  return (
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const linksToRender = data.feed.links
    
          return (
            <div>
              {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }}
    </Query>
  )
}

export default LinkList;
