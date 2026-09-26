import { gql } from 'apollo-angular';

export const QUERY = gql`
  {
    episodes {
      results {
        id
        name
        episode
      }
    }
    characters {
      results {
        id
        name
        status
        species
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

export const QUERY_BY_PAGE = (pageNum: number) => gql`
  {
    characters(page: ${pageNum}) {
      results {
        id
        name
        status
        species
        gender
        image
       }
  }
}`;
