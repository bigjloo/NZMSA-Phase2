import { useParams } from "react-router";

const WithGH = () => {
  const params = useParams();
  console.log(params);

  return (
    <>
      <h1>With GH page</h1>;
    </>
  );
};

export default WithGH;
