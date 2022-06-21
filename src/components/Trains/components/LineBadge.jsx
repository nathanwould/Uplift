import theme from "../../../theme";


function LineBadge({ LineCode }) {
  const { gray, RD, BL, YL, OR, GR, SV } = theme.colors;

  const styles = {
    border: "1px solid",
    borderRadius: ".3rem",
    textAlign: "center",
    padding: '.2rem 0',
    BL: {
      backgroundColor: `${BL[50]}`,
      borderColor: `${BL[400]}`,
      color: `${BL[600]}`,
    },
    RD: {
      backgroundColor: `${RD[50]}`,
      borderColor: `${RD[400]}`,
      color: `${RD[600]}`,
    },
    YL: {
      backgroundColor: `${YL[50]}`,
      borderColor: `${YL[400]}`,
      color: `${YL[600]}`,
    },
    OR: {
      backgroundColor: `${OR[50]}`,
      borderColor: `${OR[400]}`,
      color: `${OR[600]}`,
    },
    GR: {
      backgroundColor: `${GR[50]}`,
      borderColor: `${GR[400]}`,
      color: `${GR[600]}`,
    },
    SV: {
      backgroundColor: `${SV[50]}`,
      borderColor: `${SV[400]}`,
      color: `${SV[600]}`,
    },
  };
  
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

  if (LineCode !== null) {
    return (
      <p style={{
        ...styles,
        ...styles[LineCode]
      }}>
        Line Code: {LineCode}
      </p>
    );
  };
}

export default LineBadge;