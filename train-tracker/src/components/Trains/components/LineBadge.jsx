import React from 'react'

function LineBadge({ LineCode }) {
  if (LineCode === null){
    return (
      <p style={{
        border: "1px solid #aaa",
        borderRadius: ".3rem",
        textAlign: "center",
        padding: ".2rem 0",
      }}>
        Line Code: N/A
      </p>
    );
  };
  if (LineCode === "RD") {
    return (
      <p style={{
        color: "#760100",
        border: "1px solid #d48080",
        borderRadius: ".3rem",
        backgroundColor: "#eecccc",
        textAlign: "center"
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "BL") {
    return (
      <p style={{
        color: "#225c94",
        border: "1px solid #98c2ea",
        borderRadius: ".3rem",
        backgroundColor: "#d6e6f6",
        textAlign: 'center'
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "YL") {
    return (
      <p style={{
        color: "#987c16",
        border: "1px solid #fece25",
        borderRadius: ".3rem",
        backgroundColor: "#fff5d3",
        textAlign: 'center'
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "OR") {
    return (
      <p style={{
        color: "#f67c21",
        border: "1px solid #F9d28a",
        borderRadius: ".3rem",
        backgroundColor: "#f9e4d4",
        textAlign: 'center'
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "GR") {
    return (
      <p style={{
        color: "#3c6c32",
        border: "1px solid #aacda3",
        borderRadius: ".3rem",
        backgroundColor: "#ddebda",
        textAlign: 'center'
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "SV") {
    return (
      <p style={{
        color: "#61687c",
        border: "1px solid #c5cad8",
        borderRadius: ".3rem",
        backgroundColor: "#e8eaef",
        textAlign: 'center'
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
}

export default LineBadge;