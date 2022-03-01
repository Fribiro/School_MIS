import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">No of Students</span>
        <div className="featuredContainer">
          <span className="featuredM">125</span>
          <span className="featuredRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Performance</span>
        <div className="featuredContainer">
          <span className="featuredM">78%</span>
          <span className="featuredRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">overall Attendance</span>
        <div className="featuredContainer">
          <span className="featuredM">82%</span>
          <span className="featuredRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> 
    </div>
  );
}
