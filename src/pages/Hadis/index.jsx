import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Hadis() {
  const [hadis, setHadis] = useState("");
  const [call, setCall] = useState(false);

  useEffect(
    function () {
      axios
        .get("https://api.keybit.ir/hadis")
        .then((res) => {
          setHadis(res.data.result);
        })
        .catch((res) => {})
        .finally(() => {});
    },
    [call]
  );
  console.log("hadis",hadis);
  return(
  <>
    <div>
      <h1>{hadis ? hadis.person : "no data"}</h1>
      <p>{hadis ? hadis.text : "no data"}</p>
      <h6>{hadis ? hadis.source : "no data"}</h6>
    </div>

    <button
        onClick={() => {
          setCall(!call);
        }}
      >
        {" "}
        Api Call{" "}
      </button>
  </>
  ) 
  
}
