import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1>Biblioteca Digital</h1>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#4A90E2",
    color: "white",
    padding: "15px",
    textAlign: "center",
    fontSize: "24px",
  },
};

export default Header;
