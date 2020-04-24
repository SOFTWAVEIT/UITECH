let doc = document
//alert(typeof doc)
console.log(doc)
console.log(`Title = ${doc.title}`)
console.log(`URL = ${doc.URL}`)
console.log(`Active Link Color = ${doc.alinkColor}`)
console.log(`Background Color = ${doc.bgColor}`)
console.log(`No of Links = ${doc.anchors.length}`)

let article_1 = document.getElementById('article_1')
console.log(article_1.innerHTML)
console.log('-----------------')
console.log(article_1.innerText)

//article_1.innerHTML = '<h1>Welcome to DOM @ SIT</h1>'
article_1.innerText = '<h1>Welcome to DOM @ SIT</h1>'