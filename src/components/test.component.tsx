import { useQuery, gql } from "@apollo/client";

const GET_ALL_SCHOOLS = gql`
  query getAllSchools {
    za_schools_list_2021(order_by: { institution_name: desc }, limit: 300) {
      id
      institution_name
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(GET_ALL_SCHOOLS);

  if (loading) return <p>...Apollo GraphQL Hasura Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div>
      {data.za_schools_list_2021.map(({ id, institution_name }) => {
        return (
          <div key={id}>
            <h3>School Name: {institution_name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
