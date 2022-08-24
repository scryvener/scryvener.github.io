
function pullData(path,callback){
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET",path,true);
	xhttp.onreadystatechange=function(){
		if (this.readyState == 4 && this.status == 200) {
			callback(this);
		};
	};
	xhttp.send()
}

var xmlDoc;
function loadData(xml){
	xmlDoc=xml.responseXML

	 
	let headerNode=xmlDoc.evaluate("//Header",xmlDoc,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
    let footerNode=xmlDoc.evaluate("//Footer",xmlDoc,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
    
    let headerNodeValue=headerNode.singleNodeValue;

    let headerContent=headerNodeValue.children;

    for (let i=0;i<headerContent.length;i++){
        let sectionContent=headerContent[i].children;

        for (let j=0;j<sectionContent.length;j++) {

            if (sectionContent.tagName=="text"){
                let section_text=sectionContent.textContent
            };
            if (sectionContent.tagName=="url"){
                let section_url=sectionContent.textcontent
            }

            const newElem=document.createElement('li');
			
            newElem.className='SectionListing';
            newElem.id='section'+temp_id;

            newElem.innerHTML='<a href="'+section_url+'">'+section_text+'</a>'

            document.getElementById('headernavbar').appendChild(newElem)

        };

    };

    
	

};

pullData("https://scryvener.github.io/assets/xml/Header_Footer.xml",loadData)
