import { Link } from "react-router-dom";
import prjListData from "../data/o9o9_prj_list.json";
import { useState } from "react";

const O9o9_list_itme = ({ item, delEventHandler }) => {
  return (
    <>
      <td>{item.id}</td>
      <td>
        <Link to="/o9o9_detail" state={{ id: item.id }}>
          {item.pjtName}
        </Link>
      </td>
      <td>{item.qty}</td>
      <td>{new Intl.NumberFormat().format(item.price)}</td>
      <td>{item.rating}</td>
      <td>{item.date}</td>
      <td className="del-btn">
        <button onClick={() => delEventHandler(item.id)}>삭제</button>
      </td>
    </>
  );
};

//-----------------------------------------------------------------------

const O9o9_list = () => {
  const [prjList, setPrjList] = useState(prjListData);

  const deleteListRow = (id) => {
    console.log("deleteListRow()->id: %s", id);
    const liveList = prjList.filter((row) => {
      return (row.id !== id);
    });
    setPrjList(liveList);
  };

  return (
    <div className="table-container">
      <div className="table-serach"></div>
      <div className="table-list">
        <table>
          <tbody>
            <tr>
              <th>번호</th>
              <th>품명</th>
              <th>수량</th>
              <th>가격</th>
              <th>등급</th>
              <th>날짜</th>
              <th>삭제</th>
            </tr>
            {prjList.map((data, idx) => {
              return (
                <tr key={idx}>
                  <O9o9_list_itme
                    item={data}
                    idx={idx}
                    delEventHandler={deleteListRow}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="table-paging"></div>
    </div>
  );
};

export default O9o9_list;
