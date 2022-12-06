import CategoriesList from "../components/Categories/CategoriesList";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../layout/layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <CategoriesList />
      </Layout>
    </>
  );
};

export default HomePage;
