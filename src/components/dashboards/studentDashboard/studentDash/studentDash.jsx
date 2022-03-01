import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../studentDashboard/featuredInfo/featuredInfo";
import "./home.css";
import { studentData } from "../../../../dummyData";


export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={studentData} title="My Performance" grid dataKey="Marks"/>
      
    </div>
  );
}
