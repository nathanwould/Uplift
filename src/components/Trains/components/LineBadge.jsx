import theme from "../../../theme";

const styles = {
  border: "1px solid",
  borderRadius: ".3rem",
  textAlign: "center",
  padding: '.2rem 0'
}

function LineBadge({ LineCode }) {
  const { gray, RD, BL, YL, OR, GR, SV } = theme.colors;
  if (LineCode === null){
    return (
      <p style={{
        ...styles,
        borderColor: `${gray[600]}`,
      }}>
        Line Code: N/A
      </p>
    );
  };
  if (LineCode === "RD") {
    return (
      <p style={{
        ...styles,
        backgroundColor: `${RD[50]}`,
        borderColor: `${RD[400]}`,
        color: `${RD[600]}`,
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "BL") {
    return (
      <p style={{
        ...styles,
        backgroundColor: `${BL[50]}`,
        borderColor: `${BL[400]}`,
        color: `${BL[600]}`,
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "YL") {
    return (
      <p style={{
        ...styles,
        backgroundColor: `${YL[50]}`,
        borderColor: `${YL[400]}`,
        color: `${YL[600]}`,
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "OR") {
    return (
      <p style={{
        ...styles,
        backgroundColor: `${OR[50]}`,
        borderColor: `${OR[400]}`,
        color: `${OR[600]}`,
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "GR") {
    return (
      <p style={{
        ...styles,
        backgroundColor: `${GR[50]}`,
        borderColor: `${GR[400]}`,
        color: `${GR[600]}`,
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
  if (LineCode === "SV") {
    return (
      <p style={{
        ...styles,
        backgroundColor: `${SV[50]}`,
        borderColor: `${SV[400]}`,
        color: `${SV[600]}`,
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
}

export default LineBadge;