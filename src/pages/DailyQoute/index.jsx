import axios from "axios";
import React, { useEffect, useState } from "react";
import Date from "../../components/Date";

export default function DailyQoute() {
  const [call, setCall] = useState(false);
  const [hadis, setHadis] = useState("");
  const [surahNumber, setSurahNumber] = useState(1);
  const [ayaNumber, setAyaNumber] = useState(1);
  const [aya, setAya] = useState("");
  const [translation, setTranslation] = useState("");
  const [date, setDate] = useState();

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
  useEffect(
    function () {
      axios
        .get(
          "http://api.alquran.cloud/v1/ayah/" + surahNumber + ":" + ayaNumber
        )
        .then((res) => {
          // setPaginationCount(res.data.info.pages);
          setAya(res.data.data.text);
          // setError({ code: 200, text: "" });
        })
        .catch((res) => {})
        .finally(() => {});
    },
    [call, surahNumber, ayaNumber]
  );
  useEffect(
    function () {
      axios
        .get(
          "http://api.alquran.cloud/v1/ayah/" +
            surahNumber +
            ":" +
            ayaNumber +
            "/fa.fooladvand"
        )
        .then((res) => {
          // setPaginationCount(res.data.info.pages);
          setTranslation(res.data.data.text);
          // setError({ code: 200, text: "" });
        })
        .catch((res) => {})
        .finally(() => {});
    },
    [call, surahNumber, ayaNumber]
  );
  useEffect(
    function () {
      axios
        .get(
          "http://api.alquran.cloud/v1/ayah/" +
            surahNumber +
            ":" +
            ayaNumber +
            "/fa.fooladvand"
        )
        .then((res) => {
          // setPaginationCount(res.data.info.pages);
          setTranslation(res.data.data.text);
          // setError({ code: 200, text: "" });
        })
        .catch((res) => {})
        .finally(() => {});
    },
    [call]
  );
  return (
    <div style={{ direction: "rtl" }}>
      <div>
        {" "}
        <input
          placeholder="شماره سوره"
          onChange={(e) => {
            setSurahNumber(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <input
          placeholder="شماره آیه"
          onChange={(e) => {
            setAyaNumber(e.target.value);
          }}
        />
      </div>
      <br />

      <button onClick={() => setCall(!call)}>تغییر حدیث</button>
      <br />
      <div className="final">
        <p style={{ direction: "rtl" }}>
          أَعُوذُ بِاللّهِ مِن الشَّيْطَانِ الرَّجِيمِ
          <br />
          بسم الله الرحمن الرحیم
          <br />
          {aya}
          <br />
          {translation}
          <br />
          <br />
          &#127799; &#127799; &#127799; &#127799; &#127799; &#127799;
          <br />
          <br />
          &#128394;{hadis.person} می فرمایند:
          <br />
          &#127801;{hadis.text}
          <br />
          &#128213; {hadis.source}
          <br />
          <br />
          &#127799; &#127799; &#127799; &#127799; &#127799; &#127799;
          <br />
          <br />
          امروز {date?.weekday.name} مورخ{" "}
          {date?.full.official.iso.fa.split("-")[2]} {date?.month.name} ماه سال{" "}
          {date?.year.number.fa}تان بخیر و شادی و خوشی <br />
          &#127774; {date?.full.official.iso.en} هجری شمسی <br />
          &#127876; {date?.other.gregorian.iso.en} میلادی <br />
          &#127769; {date?.other.ghamari.iso.en} هجری قمری <br />
          <br />
          &#127801; إلــــهـــے وَ رَبّـــــي مــَنْ لـی غیرک&#127801;
          <br />
          &#127801; خدایا به امید رحمت و برکاتت &#127801; <br />
          <br />
          &#127799; &#127799; &#127799; &#127799; &#127799; &#127799; <br />
          <br />
          روزشما بخیر و نیکی و سلامتی و برکات الهی
        </p>
      </div>
    </div>
  );
}
