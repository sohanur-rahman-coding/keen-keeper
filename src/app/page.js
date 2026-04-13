
import Image from "next/image";
import Banner from "../components/homepage/Banner";
import Stat from "../components/homepage/Stat";
import YourFriends from "./yourFriends/page";
// import YourFriends from "../components/homepage/YourFriends";



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
