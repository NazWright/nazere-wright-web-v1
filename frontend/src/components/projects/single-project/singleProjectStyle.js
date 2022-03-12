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
      cursor: "pointer",
      boxShadow: "rgb(62 60 60) 2px 3.5px 3px",
    },
    title: {
      fontSize:
        deviceType === "desktop"
          ? "1.5vw"
          : deviceType === "tablet"
          ? "2.5vw"
          : "4.5vw",
      fontWeight: "bold",
      height: 60,
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
