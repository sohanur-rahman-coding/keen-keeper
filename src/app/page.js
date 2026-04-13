import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Stat from "./components/Stat/Stat";
import YourFriends from "./yourFriends/page";

export default function Home() {
  return (
    < >
    <div className="bg-[#F8FAFC]">
      <Banner></Banner>
      <Stat></Stat>
      <YourFriends></YourFriends>
    </div>
    </>
  );
}
