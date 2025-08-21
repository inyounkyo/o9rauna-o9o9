import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import prjDetailtData from "../data/o9o9_prj_detail.json";

const O9o9_detail = () => {
  const location = useLocation();
  const state = location.state;

  // console.log("O9o9_detail param->id: ", state.id);
  // console.log(prjDetailtData[state.id]);
  const detailItem = prjDetailtData[state.id];

  return (
    <div className="detail-container">
      <div className="detail-item">
        <div className="detail-value">
          <span>품명:</span>
          <span>{detailItem["pjtName"]}</span>
        </div>
        <div className="detail-value">
          <span>수량:</span>
          <span>{detailItem["qty"]}</span>
        </div>
      </div>
      <div className="detail-item">
        <div className="detail-value">
          <span>가격:</span>
          <span>{new Intl.NumberFormat().format(detailItem["price"])}</span>
        </div>
        <div className="detail-value">
          <span>날짜:</span>
          <span>{detailItem["date"]}</span>
        </div>
      </div>
      <div className="detail-item">
        <div className="detail-value">
          <span>내용:</span>
        </div>
        <div className="detail-value">
          <textarea value={detailItem["content"]} readOnly></textarea>
        </div>
      </div>
      <div className="list-btn">
        <button><Link to="/o9o9_list">목록</Link></button>
      </div>
    </div>
  );
};

export default O9o9_detail;
