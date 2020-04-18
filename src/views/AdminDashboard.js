import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// Queries
// -----------------------------------------------------------------

const allSeasonsQuery = gql`
  {
    seasons {
      _id
      name
      number
    }
  }
`

// -----------------------------------------------------------------

function AdminDashboard(props) {
  const { season, game } = props;
  const { loading, error, data } = useQuery(allSeasonsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section className="container mx-auto pb-4 bg-orange-500">
      <h1>Hello</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
}

export default AdminDashboard;
