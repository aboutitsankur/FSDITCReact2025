const container = document.getElementById("id1")
console.log(container);
const root = ReactDOM.createRoot(container);
const h2 = React.createElement("h2",{style: {backgroundColor: 'Brown'}},"Welcome to react development using CDN")
const name1=React.createElement("h3",{},"Ankur Chaubey");
const pic=React.createElement("img",{src : "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",style:{height:"200px",borderRadius:"50%" ,width:"200px"}})

root.render(
    React.createElement("div", {}, [h2, name1, pic])
)
