body {
  margin:0;
  font-family: Arial;
  display:flex;
  background:#FFFBEB;
}

/* Sidebar */
.sidebar {
  width:220px;
  background:#f5f5f5;
  height:100vh;
  padding:20px;
}

.sidebar ul {
  list-style:none;
  padding:0;
}

.sidebar li {
  padding:10px;
  cursor:pointer;
}

/* Main */
.main {
  flex:1;
}

.header {
  background:#14B8A6;
  color:white;
  padding:15px;
  display:flex;
  justify-content:space-between;
}

/* Page */
.page {
  padding:20px;
}

.hidden {
  display:none;
}

/* 卡片 */
.cards {
  display:flex;
  gap:10px;
  margin:20px 0;
}

.card {
  background:white;
  padding:20px;
  border-radius:10px;
  width:120px;
  text-align:center;
  box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

/* box */
.box {
  background:white;
  padding:15px;
  border-radius:10px;
}