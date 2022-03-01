import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../trDashboard/FeaturedInfo/FeaturedInfo";
import "./home.css";
import { teacherData } from "../../../../dummyData";


export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={teacherData} title="class Performance" grid dataKey="Courses"/>
      
    </div>
  );
}
