function alert()
{
   
	 document.getElementById("zad6").innerHTML="BARDZO WAŻNA INFORMACJA - lubię placki :)";
	 document.getElementById("zad6").style.color = "red";
}

function pierwszyKlik()
{
   
	 document.getElementById("klik").innerHTML="Funkcja z pliku pisze: Dzień dobry :)";
	 
}

function text()
{		
	var imie = "Agnieszka";
	var nazwisko = "Filińska";
	var wiek = "23";
	var napis = "Nazywasz się "+imie+" "+nazwisko+" i masz "+wiek+" lata";
   
	 document.getElementById("zad7").innerHTML=napis;
	 document.getElementById("zad7").style.color = "green";
}



function refresh()
{		
	   
	 return  location.reload();
	 
}

function recolor()
{		
	   
	 return  document.body.style.background="green";
	 
}



function reclose()
{		
	var openedWindow = window.open(document.URL, "_self");  
	openedWindow.close();	
	 
}

function liniowa()
{		
	var a = parseFloat(document.getElementById('a11').value);
		var b = parseFloat(document.getElementById('b11').value);
		var rez =-b/a
		document.getElementById("zad11").innerHTML="X= "+rez;
		document.getElementById("zad11").style.color = "green";		
	 
}

function miasto1()
				{		
				var a = document.getElementById('miasto').value;
				document.getElementById("miasto2").innerHTML=a;
				
				alert("Nazwa miasta: "+a);
}

function dodaj()
{		
		var a = parseFloat(document.getElementById('zmienna_1').value);
		var b = parseFloat(document.getElementById('zmienna_2').value);
		var wyn =a+b
		document.getElementById("wynik").value=wyn;
			
	 
}

function zamien()
{		
		var a = parseFloat(document.getElementById('zmienna_a').value);
		var b = parseFloat(document.getElementById('zmienna_b').value);
		
		document.getElementById("zmienna_a").value=b;
		document.getElementById("zmienna_b").value=a;
			
	 
}









