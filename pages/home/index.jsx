import CustomCard from "@/components/CustomCard";
import { cardsData } from "@/helpers/cardItems";

const HomePage = () => {
  return (
    <div>
      <CustomCard cardsData={cardsData} />
    </div>
  );
};

export default HomePage;
