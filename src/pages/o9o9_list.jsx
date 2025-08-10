import React from "react";

const o9o9_list = () => {
  return (
    <div className="table-container">
      <div className="table-serach"></div>
      <div className="table-list">
        <table>
          <caption></caption>
          <tr>
            <th>번호</th>
            <th>품명</th>
            <th>수량</th>
            <th>가격</th>
            <th>등급</th>
            <th>날짜</th>
            <th>삭제</th>
          </tr>
          <tr>
            <td>1</td>
            <td>xCeeds1-10</td>
            <td>102</td>
            <td>5,000</td>
            <td>A</td>
            <td>2023-01-11</td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>xCeeds1-1420</td>
            <td>102</td>
            <td>5,000</td>
            <td>A</td>
            <td>2023-11-11</td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>xCeeds1-220</td>
            <td>102</td>
            <td>5,000</td>
            <td>A</td>
            <td>2023-04-31</td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
        </table>
      </div>
      <div className="table-paging"></div>
    </div>
  );
};

export default o9o9_list;
