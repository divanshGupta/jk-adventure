import { useRouter } from "next/router";
import { allServices } from "../../lib/dummyPackages"; // Adjust path if needed
import PackageDetail from "../../components/PackageDetail"; // Reusable detail view

const { taxis } = allServices;

const TaxiPackagePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady || !slug) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const pkg = taxis.find(p => p.slug === slug);

  if (!pkg) {
    return <p className="text-center mt-20 text-red-500">Package not found.</p>;
  }

  return <PackageDetail pkg={pkg} />;
};

export default TaxiPackagePage;
