import React from "react";

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.list}>
        <li style={styles.item}><a href="#">🏠 Inicio</a></li>
        <li style={styles.item}><a href="#">📚 Libros</a></li>
        <li style={styles.item}><a href="#">📖 Préstamos</a></li>
        <li style={styles.item}><a href="#">👥 Usuarios</a></li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#2C3E50",
    color: "white",
    padding: "20px",
    position: "fixed",
    top: "0",
    left: "0",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  item: {
    padding: "10px 0",
    fontSize: "18px",
  },
};

export default Sidebar;
