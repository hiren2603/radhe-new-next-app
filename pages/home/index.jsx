import CustomCard from "@/components/CustomCard";
import { cardsData } from "@/helpers/cardItems";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div>
      {/* <CustomCard cardsData={cardsData} />
      <Slider /> */}
      <ProductSlider />
      <ProductCard />
      <Info />
      <Brands />
      <Form />
    </div>
  );
};

export default HomePage;
