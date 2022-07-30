export function showDialog(d){
    d.setAttribute("open","");
}

export function createDialog(){
    let d = document.createElement("dialog");
    let f = document.createElement("form");
    let itl = document.createElement("label");
    let isl = document.createElement("label");
    let it = document.createElement("input");
    let is = document.createElement("textarea");
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    itl.setAttribute("for","edittitle");
    isl.setAttribute("for","editsummary");
    it.setAttribute("name","edittitle");
    is.setAttribute("name","editsummary");
    it.setAttribute("id","edittitle");
    is.setAttribute("id","editsummary");
    it.setAttribute("type","text");
    is.setAttribute("type","text");
    f.appendChild(itl);
    f.appendChild(it);
    f.appendChild(br1);
    f.appendChild(isl);
    f.appendChild(is);
    f.appendChild(br2);
    f.setAttribute("method", "dialog");
    f.setAttribute("id","editform");
    let eb = document.createElement("button");
    let cb = document.createElement("button");
    eb.setAttribute("id","editbutton");
    cb.setAttribute("id","cancelbutton");
    eb.textContent = "edit";
    cb.textContent = "cancel";
    f.appendChild(eb);
    f.appendChild(cb);
    d.appendChild(f);

    return d;
}

export function addNewPost(inputtitlte, inputsummary){
    const container = document.createElement('div');
    const title = document.createElement("h2");
    const date = document.createElement("h3");
    const summary = document.createElement("p");
    const editb = document.createElement("button");
    const eimg = document.createElement("img");
    eimg.setAttribute("src","img/edit.png");
    editb.appendChild(eimg);
    const deleteb = document.createElement("button");
    const dimg = document.createElement("img");
    dimg.setAttribute("src","img/delete2.png");
    deleteb.appendChild(dimg);
    const store = document.createElement("button");
    const simg = document.createElement("img");
    simg.setAttribute("src","img/store.png");
    store.appendChild(simg);
    date.textContent = (new Date()).toString();
    
    title.textContent = "Post Title: " + inputtitlte.value;
    summary.textContent = "Post Summary: " + inputsummary.value;
    container.appendChild(title);
    container.appendChild(date);
    container.appendChild(summary);
    container.appendChild(editb);
    container.appendChild(deleteb);
    container.appendChild(store);
    document.body.appendChild(container);

    editb.addEventListener("click", ()=>{
        let ed = createDialog();
        container.appendChild(ed);
        const eb = ed.querySelector("#editbutton");
        const editT = ed.querySelector("#edittitle");
        const editS = ed.querySelector("#editsummary");
        const editF = ed.querySelector("#editform");
        const cb = ed.querySelector("#cancelbutton");
        editT.value = title.textContent.substring(12);
        editS.value = summary.textContent.substring(14);
        const formData = new FormData(editF);
        ed.showModal();
        
        eb.addEventListener("click", ()=>{
            localStorage.removeItem(title.textContent.substring(12));
            title.textContent = "Post Title: " + editT.value;
            date.textContent = "Last edited on: " + (new Date()).toString();
            summary.textContent = "Post Summary: " + editS.value;
            localStorage.setItem(title.textContent.substring(12),summary.textContent.substring(14));
            container.removeChild(ed);
        })
        cb.addEventListener("click",()=>{
            container.removeChild(ed);
        })
    })


    deleteb.addEventListener("click", ()=>{
        document.body.removeChild(container);
        console.log(title.textContent);
        localStorage.removeItem(title.textContent.substring(12));
    })

    store.addEventListener("click",()=>{
        localStorage.setItem(title.textContent.substring(12),summary.textContent.substring(14));
    })
}

export function loadPost(inputtitlte, inputsummary){
    const container = document.createElement('div');
    const title = document.createElement("h2");
    const date = document.createElement("h3");
    const summary = document.createElement("p");
    const editb = document.createElement("button");
    const eimg = document.createElement("img");
    eimg.setAttribute("src","img/edit.png");
    editb.appendChild(eimg);
    const deleteb = document.createElement("button");
    const dimg = document.createElement("img");
    dimg.setAttribute("src","img/delete2.png");
    deleteb.appendChild(dimg);
    const store = document.createElement("button");
    const simg = document.createElement("img");
    simg.setAttribute("src","img/store.png");
    store.appendChild(simg);
    date.textContent = (new Date()).toString();
    title.textContent = "Post Title: " + inputtitlte;
    summary.textContent = "Post Summary: " + inputsummary;
    container.appendChild(title);
    container.appendChild(date);
    container.appendChild(summary);
    container.appendChild(editb);
    container.appendChild(deleteb);
    container.appendChild(store);
    document.body.appendChild(container);

    editb.addEventListener("click", ()=>{
        let ed = createDialog();
        container.appendChild(ed);
        const eb = ed.querySelector("#editbutton");
        const editT = ed.querySelector("#edittitle");
        const editS = ed.querySelector("#editsummary");
        const editF = ed.querySelector("#editform");
        const cb = ed.querySelector("#cancelbutton");
        editT.value = title.textContent.substring(12);
        editS.value = summary.textContent.substring(14);
        showDialog(ed);
        
        eb.addEventListener("click", ()=>{
            localStorage.removeItem(title.textContent.substring(12));
            title.textContent = "Post Title: " + editT.value;
            date.textContent = "Last edited on: " + (new Date()).toString();
            summary.textContent = "Post Summary: " + editS.value;
            localStorage.setItem(title.textContent.substring(12),summary.textContent.substring(14));
            container.removeChild(ed);
        })
        cb.addEventListener("click",()=>{
            container.removeChild(ed);
            
        })
    })


    deleteb.addEventListener("click", ()=>{
        document.body.removeChild(container);
        localStorage.removeItem(title.textContent.substring(12));
    })

}

export function storeItem(title, content){
    localStorage.setItem(title, content);
}

export function loadItem(){
    let keys = Object.keys(localStorage);
    keys.forEach(key => {
        console.log(key);
        console.log(localStorage[key]);
        loadPost(key, localStorage.getItem(key));
    });
}