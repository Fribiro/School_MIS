import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">attendance</span>
        <div className="featuredContainer">
          <span className="featuredM">63%</span>
          <span className="featuredRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Grades</span>
        <div className="featuredContainer">
          <span className="featuredM">2.1</span>
          <span className="featuredRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* <div className="featuredItem">
        <span className="featuredTitle">Courses</span>
        <div className="featuredContainer">
          <span className="featuredM">225</span>
          <span className="featuredRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> */}
    </div>
  );
}
