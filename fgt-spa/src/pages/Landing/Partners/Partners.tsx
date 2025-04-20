import Partner from "./Partner/Partner";
import { gql, useQuery } from "@apollo/client"

const Partners = () => {

  const ALL_PARTNERS = gql`
	query partners {
    partners {
      designation
      name
      id
    }
}
`;

  const { loading, data } = useQuery(ALL_PARTNERS);
  return (
    <div className="App">
      {!loading && data?.partners?.map((partner: any) => (
        <Partner name={partner.name} designation={partner.designation} />
      ))}
    </div>
  );
}

export default Partners;