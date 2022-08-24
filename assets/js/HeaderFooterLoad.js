
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
    let headerNodeValue=headerNode.singleNodeValue;
    let headerContent=headerNodeValue.children;

    let footerNode=xmlDoc.evaluate("//Footer",xmlDoc,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
    let footerNodeValue=footerNode.singleNodeValue;
    let footerContent=footerNodeValue.children;

    for (let i=0;i<headerContent.length;i++){
        let sectionContent=headerContent[i].children;

        for (let j=0;j<sectionContent.length;j++) {

            if (sectionContent[j].tagName=="text"){
                var section_text=sectionContent[j].textContent
            };
            if (sectionContent[j].tagName=="url"){
                
                var section_url=sectionContent[j].textContent
            }
        };

        const newElem=document.createElement('li');
			
        newElem.className='SectionListing';

        newElem.innerHTML='<a href="'+section_url+'">'+section_text+'</a>'

        document.getElementById('headernavbar').appendChild(newElem)

    };

    for (let i=0;i<footerContent.length;i++){
        
        if (footerContent[i].tagName=="Links"){
            let subContent=footerContent[i].children;
            for (let j=0;j<subContent.length;j++){
                let subLink=subContent[j].children;

                for (let k=0;k<subLink.length;k++){
                    console.log(subLink[k].textContent)
                }

            }

        }

        if (footerContent[i].tagName=="Address"){
            let subContent=footerContent[i].children;

            if (subContent.tagName=="Line1"){
                var line1=subContent.textContent
                console.log(line1)
            }

        }



        
        
        
        


    }

    
	

};

pullData("https://scryvener.github.io/assets/xml/Header_Footer.xml",loadData)
