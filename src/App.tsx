import TopNavbar from "./components/TopNavbar";
import Home from "./routes/Home.route";
// import { gql } from "@apollo/client";
// import client from "./apolloClient";

// client
//   .query({
//     query: gql`
//       query {
//         za_schools_list_2021(
//           order_by: { institution_name: desc }
//           limit: 3
//         ) {
//           institution_name
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

function App() {
  return (
    <>
      <TopNavbar />
      <Home />
    </>
  );
}

export default App;
