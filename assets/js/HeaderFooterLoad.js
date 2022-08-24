
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

                    if (subLink[k].tagName=="text"){
                        var section_text=subLink[k].textContent
                    }

                    if (subLink[k].tagName=="url"){
                        var section_url=subLink[k].textContent
                    }
                }

                const newElem=document.createElement('li');
        
                newElem.className='LinkListing';

                newElem.innerHTML='<a href="'+section_url+'">'+section_text+'</a>'

                document.getElementById('footerLinks').appendChild(newElem)

            }

        }

        if (footerContent[i].tagName=="Address"){
            let subContent=footerContent[i].children;


            for (let j=0;j<subContent.length;j++) {

                if (subContent[j].tagName=="Line1"){
                    var line1=subContent[j].textContent
                }
    
                if (subContent[j].tagName=="Line2"){
                    var line2=subContent[j].textContent
                }
            };

            const newElem=document.createElement('p');
			
            newElem.className='addressListing';

            newElem.innerHTML='<p>'+line1+',<br/>'+line2+'</p>'

            document.getElementById('addressLine').appendChild(newElem)

        }



        
        
        
        


    }

    
	

};

pullData("https://scryvener.github.io/assets/xml/Header_Footer.xml",loadData)
