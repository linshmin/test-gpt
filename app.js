function showPage(p) {
  document.querySelectorAll(".page").forEach(el=>el.classList.add("hidden"));
  document.getElementById(p).classList.remove("hidden");
}

if (!localStorage.posts) localStorage.posts = "[]";
if (!localStorage.works) localStorage.works = "[]";

function addPost(){
  let posts = JSON.parse(localStorage.posts);

  posts.push({
    title:title.value,
    content:content.value,
    date:new Date().toLocaleDateString()
  });

  localStorage.posts = JSON.stringify(posts);
  loadPosts();
}

function loadPosts(){
  let posts = JSON.parse(localStorage.posts);

  postList.innerHTML="";
  allPosts.innerHTML="";

  posts.forEach(p=>{
    let html = `<div class="card">
      <b>${p.title}</b><br>
      ${p.content}<br>
      <small>${p.date}</small>
    </div>`;

    postList.innerHTML += html;
    allPosts.innerHTML += html;
  });

  count.innerText = posts.length;
}

function addWork(){
  let works = JSON.parse(localStorage.works);

  works.push({content:workInput.value});

  localStorage.works = JSON.stringify(works);
  loadWorks();
}

function loadWorks(){
  let works = JSON.parse(localStorage.works);

  workList.innerHTML="";

  works.forEach(w=>{
    workList.innerHTML += `<div class="card">${w.content}</div>`;
  });
}

loadPosts();
loadWorks();
