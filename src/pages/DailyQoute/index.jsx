import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function DailyQoute() {


  const [call, setCall] = useState(false)
  const [hadis, setHadis] = useState("")
  const [surahNumber, setSurahNumber] = useState()
  const [ayaNumber, setAyaNumber] = useState()
  const [aya, setAya] = useState("")
  const [translation, setTranslation] = useState("")
  const [date, setDate] = useState({})

  useEffect(
    function () {
      axios
        .get("https://api.keybit.ir/time")
        .then((res) => {
          setDate(res.data.date);
        })
        .catch((res) => {

        })
        .finally(() => {
        });
    },
    []
  );
  console.log(date);
  useEffect(
    function () {
      axios
        .get("https://api.keybit.ir/hadis")
        .then((res) => {
          // setPaginationCount(res.data.info.pages);
          setHadis(res.data.result);
          // setError({ code: 200, text: "" });
        })
        .catch((res) => {

        })
        .finally(() => {
        });
    },
    [call]
  );
  useEffect(
    function () {
      axios
        .get("http://api.alquran.cloud/v1/ayah/" + surahNumber + ":" + ayaNumber)
        .then((res) => {
          // setPaginationCount(res.data.info.pages);
          setAya(res.data.data.text);
          // setError({ code: 200, text: "" });
        })
        .catch((res) => {

        })
        .finally(() => {
        });
    },
    [call, surahNumber, ayaNumber]
  );
  useEffect(
    function () {
      axios
        .get("http://api.alquran.cloud/v1/ayah/" + surahNumber + ":" + ayaNumber + "/fa.fooladvand")
        .then((res) => {
          // setPaginationCount(res.data.info.pages);
          setTranslation(res.data.data.text);
          // setError({ code: 200, text: "" });
        })
        .catch((res) => {

        })
        .finally(() => {
        });
    },
    [call, surahNumber, ayaNumber]
  );
  useEffect(
    function () {
      axios
        .get("http://api.alquran.cloud/v1/ayah/" + surahNumber + ":" + ayaNumber + "/fa.fooladvand")
        .then((res) => {
          // setPaginationCount(res.data.info.pages);
          setTranslation(res.data.data.text);
          // setError({ code: 200, text: "" });
        })
        .catch((res) => {

        })
        .finally(() => {
        });
    },
    [call, surahNumber, ayaNumber]
  );
  console.log(call);
  return (

    <div>
      <input placeholder='شماره سوره'

        onChange={(e) => { setSurahNumber(e.target.value) }}
      />
      <input placeholder='شماره آیه'
        onChange={(e) => { setAyaNumber(e.target.value) }}
      />
      <button onClick={() =>  setCall(!setCall)}>Click Me !</button>
      {hadis.person}
      <br />
      {hadis.text}
      <br />
      {hadis.source}
      <br />
      {aya}
      <br />
      {translation}
      <br />
      {/* {date ? {date.weekday.name} <br /> {date.full.official.iso.fa}
      <br />
      {date.other.gregorian.iso.fa}
      <br />
      {date.other.ghamari.iso.fa} :

        <div> No data </div>} */}
    </div>
  )
}
