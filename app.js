// 初始化
if (!localStorage.posts) localStorage.posts = "[]";
if (!localStorage.works) localStorage.works = "[]";

// 切頁
function showPage(page) {
  document.querySelectorAll(".page").forEach(p=>p.classList.add("hidden"));

  if (page=="home") homePage.classList.remove("hidden");
  if (page=="post") postPage.classList.remove("hidden");
  if (page=="work") workPage.classList.remove("hidden");
}

// 新增文章
function addPost() {
  let posts = JSON.parse(localStorage.posts);

  posts.push({
    title: title.value,
    content: content.value,
    date: new Date().toLocaleDateString()
  });

  localStorage.posts = JSON.stringify(posts);
  loadPosts();
}

// 載入文章
function loadPosts() {
  let posts = JSON.parse(localStorage.posts);

  postList.innerHTML = "";
  allPosts.innerHTML = "";

  posts.forEach(p=>{
    let html = `
    <div class="card">
      <b>${p.title}</b><br>
      ${p.content}<br>
      <small>${p.date}</small>
    </div>`;

    postList.innerHTML += html;
    allPosts.innerHTML += html;
  });

  count1.innerText = posts.length;
}

// 工作紀錄
function addWork() {
  let works = JSON.parse(localStorage.works);

  works.push({
    content: workInput.value
  });

  localStorage.works = JSON.stringify(works);
  loadWorks();
}

function loadWorks() {
  let works = JSON.parse(localStorage.works);

  workList.innerHTML = "";

  works.forEach(w=>{
    workList.innerHTML += `<div class="card">${w.content}</div>`;
  });
}

// 初始化載入
loadPosts();
loadWorks();