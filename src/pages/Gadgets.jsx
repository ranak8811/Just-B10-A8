import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Gadgets = () => {
  const allGadgets = useLoaderData();

  return (
    <section className="flex flex-col md:flex-row gap-4">
      {/* Sidebar */}
      <div className="md:w-2/12 w-7/12 mx-auto space-y-4">
        <button className="btn w-full bg-gray-200 text-black rounded-lg">
          All Product
        </button>
        <button className="btn w-full bg-gray-200 text-black rounded-lg">
          Phones
        </button>
        <button className="btn w-full bg-gray-200 text-black rounded-lg">
          Laptops
        </button>
        <button className="btn w-full bg-gray-200 text-black rounded-lg">
          Smart Watches
        </button>
        <button className="btn w-full bg-gray-200 text-black rounded-lg">
          Accessories
        </button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
        {allGadgets.map((gadget, idx) => (
          <Card key={idx} gadget={gadget} />
        ))}
      </div>
    </section>
  );
};

export default Gadgets;
