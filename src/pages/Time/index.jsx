import axios from "axios";
import React, { useEffect, useState } from "react";
import NavMenu from "../../components/NavMenu";

export default function Time() {
  const [date, setDate] = useState();
  const [call, setCall] = useState(false);

  useEffect(
    function () {
      axios
        .get("https://api.keybit.ir/time")
        .then((res) => {
          setDate(res.data.date);
        })
        .catch((res) => {})
        .finally(() => {});
    },
    [call]
  );
  console.log("date2", date);
  return (
    <>
      <div>



        
      </div>
      <div>{date ? date.full.official.iso.fa : "No data"}</div>
      <div>{date ? date.full.official.iso.en : "No data"}</div>
      <button
        onClick={() => {
          setCall(!call);
        }}
      >
        {" "}
        Api Call{" "}
      </button>
        <NavMenu />
    </>
  );
}
