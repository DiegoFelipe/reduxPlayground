import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "AAA Diego",
    text: "asds adasd asdas das dasda sdasd asdasdasdasd",
  },
  {
    id: "q2",
    author: "BBB Guga",
    text: "bot asdoih asiodh asodh asdoi asidoasd",
  },
  {
    id: "q3",
    author: "CCC Bot",
    text: "sdasdasd asas asdasdsd",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
