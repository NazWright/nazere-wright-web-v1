export const style = (deviceType) => {
  return {
    container: {
      textAlign: "center",
    },
    links: {
      color: "black",
    },
    logo: {
      borderRadius: "10px",
      border: "1px solid black",
      cursor: "pointer",
    },
    title: {
      fontSize:
        deviceType === "desktop"
          ? "1.5vw"
          : deviceType === "tablet"
          ? "2.5vw"
          : "4.5vw",
      fontWeight: "bold",
      height: 40,
      padding: "1rem",
    },
    ratingTitle: {
      fontWeight: "bold",
      fontSize:
        deviceType === "desktop"
          ? "1vw"
          : deviceType === "tablet"
          ? "1.5vw"
          : "3vw",
    },
    button: {
      margin: "1rem",
      height: deviceType === "desktop" ? "8vh" : "8vh",
      width: "70%",
      fontSize: deviceType === "desktop" ? "1vw" : "2vw",
    },
  };
};
