export const sliderWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100vh",
  backgroundColor: "rgb(255, 248, 248)",
  transition: "all 2s ease",
  // width: "100%",
};

export const leftIconContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  opacity: "0.7",
  height: "50px",
  width: "50px",
  borderRadius: "50%",
  boxShadow: "2px 0px 2px 2px rgba(0, 0, 0, 0.747)",
  transition: "all 0.5s ease",
  position: "absolute",
  padding: "10px",
  left: "70px",
  "&:hover": { opacity: 1 },
};

export const imageContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  // backgroundSize: "cover",
  transition: "all 2s ease",
  backgroundColor: "#00000080",
  backgroundBlendMode: "overlay",
  height: "100%",
};

export const imageContainerHidden = {
  display: "none",
  opacity: 0,
  transition: "all 2s ease",
};

export const imageTitle = {
  textTransform: "uppercase",
  color: "#f31f25",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
  fontWeight: "900",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontSize: { sm: "20px", md: "60px", lg: "90px" },
};

export const slideContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "50%",
};

export const slideImage = {
  height: "500px",
};

export const imgInfo = {
  textTransform: "uppercase",
  color: "white",
  textShadow: "4px 2px 2px  rgba(255, 0, 0, 0.781)",
  fontWeight: "900",
  paddingRight: "5px",
  fontSize: { sm: "20px", md: "60px", lg: "90px" },
};

export const rightIconContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  opacity: 0.7,
  height: "50px",
  width: "50px",
  transition: "all 0.5s ease",
  boxShadow: "-2px 0px 2px 2px rgba(0, 0, 0, 0.747)",
  padding: "10px",
  position: "absolute",
  right: "10px",
  "&:hover": { opacity: 1 },
};
