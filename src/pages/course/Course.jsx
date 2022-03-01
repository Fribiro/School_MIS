import { Link } from "react-router-dom";
import "./course.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Course() {
  return (
    <div className="course">
      <div className="courseTitleContainer">
        <h1 className="courseTitle">COURSE</h1>
        <Link to="/newproduct">
          <button className="courseAddButton">Create</button>
        </Link>
      </div>
      <div className="courseTop">
          <div className="courseTopLeft">
              <Chart data={productData} dataKey="course" title="Course Performance"/>
          </div>
          <div className="courseTopRight">
              <div className="courseInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="courseInfoImg" />
                  <span className="courseName">Biology</span>
              </div>
              <div className="courseInfoBottom">
                  <div className="courseInfoItem">
                      <span className="courseInfoKey">Name:</span>
                      <span className="courseInfoValue">BIOLOGY</span>
                  </div>
                  <div className="courseInfoItem">
                      <span className="courseInfoKey">Students:</span>
                      <span className="courseInfoValue">5123</span>
                  </div>
                  {/* <div className="courseInfoItem">
                      <span className="courseInfoKey">active:</span>
                      <span className="courseInfoValue">yes</span>
                  </div>
                  <div className="courseInfoItem">
                      <span className="courseInfoKey">in stock:</span>
                      <span className="courseInfoValue">no</span>
                  </div> */}
              </div>
          </div>
      </div>
      {/* <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div> */}
    </div>
  );
}
