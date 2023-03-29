function convert()
			  {
			     var amtobj=document.getElementById('amtid');
				 //alert(amtobj);
			     amt=amtobj.value;
				 //alert(amt);
				 var frmobj=document.getElementById('frmid');
				 frm=frmobj.value;
				 //alert(frm);
				 var to_obj=document.getElementById('toid');
				 to=to_obj.value;
				 //alert(to);
				 var h1obj=document.getElementById('one');
				 //alert(h1obj);
				 //x=h1obj.innerHTML;
				 //alert(x);
				 //result=5000;
				 var resobj=document.getElementById('result');
				 //resobj.innerHTML=result;
				 var res2obj=document.getElementById('result2');
				
		 
				 //calculation
				 apilink="https://api.exchangerate-api.com/v4/latest/"+frm
				 //document.write(apilink);
				 /*var res=fetch(apilink);
				 document.write(res);
				 console.log(res);*/
				 
				 fetch(apilink).then(
				 
				    function(res)
					{
					//console.log(res.json());
					  return res.json();//retuen json
					}
				 ).then(
				  
				  function(json)
				  {
				    
					//console.log(json);
				    //console.log(json.rates);
					dict=json.rates;
					
					//console.log(dict['AWG']);
					cr=dict[to];
					
					res=cr*amt;
					//alert(res);
					res2=cr
					
					resobj.innerHTML=amt+" "+frm+' = '+res+" "+to
					res2obj.innerHTML='1'+frm+" = "+res2+" "+to
				    
				  }
				 
				 );
				 	 
			  }
			 