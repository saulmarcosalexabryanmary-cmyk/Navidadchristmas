import* as THREE from "../js/three.module.js";

export default function E01({x,y,z}){


// Espacio para colocar los objetos
//plano
var geometry01 = new THREE.BoxGeometry(5,50,70);
var material1= new THREE.MeshLambertMaterial({
   color:0xFF0000, side:THREE.DoubleSide
   });
var mesh01=new THREE.Mesh(geometry01,material1);
mesh01.position.set(50,-5,0);
//scene.add(mesh01);    

var mesh02=new THREE.Mesh(geometry01,material1);
mesh02.position.set(-50,-5,0);
//scene.add(mesh02);    

var mesh03=new THREE.Mesh(geometry01,material1);
mesh03.position.set(50,50,0);
//scene.add(mesh03);    

var mesh04=new THREE.Mesh(geometry01,material1);
mesh04.position.set(-50,50,0);
//scene.add(mesh04);    

var geometry02 = new THREE.BoxGeometry(100,50,5);
var material02= new THREE.MeshLambertMaterial({
   color:0xFF0000, side:THREE.DoubleSide
   });
var mesh05=new THREE.Mesh(geometry02,material02);
mesh05.position.set(0,-5,-33);
//scene.add(mesh05);    

var mesh06=new THREE.Mesh(geometry02,material02);
mesh06.position.set(0,50,-33);
//scene.add(mesh06);   

var mesh07=new THREE.Mesh(geometry02,material02);
mesh07.position.set(0,-5,33);
//scene.add(mesh07);    

var mesh08=new THREE.Mesh(geometry02,material02);
mesh08.position.set(0,50,33);
//scene.add(mesh08);  

var geometry03 = new THREE.BoxGeometry(110,5,75);
var material03= new THREE.MeshLambertMaterial({
   color:0xFFFFFF, side:THREE.DoubleSide
   });
var mesh09=new THREE.Mesh(geometry03,material03);
mesh09.position.set(0,-31,0);
//scene.add(mesh09);   

var mesh10=new THREE.Mesh(geometry03,material03);
mesh10.position.set(0,22,0);
//scene.add(mesh10);   

var mesh11=new THREE.Mesh(geometry03,material03);
mesh11.position.set(0,75,0);
//scene.add(mesh11);   

//PUERTA
var geometry05 = new THREE.BoxGeometry(30,40,5);
var material05= new THREE.MeshLambertMaterial({
   color:0xED9000, side:THREE.DoubleSide
   });
var mesh12=new THREE.Mesh(geometry05,material05);
mesh12.position.set(0,-8,35);
//scene.add(mesh12);  

var geometry06 = new THREE.SphereGeometry(3,100,100);
var material06 = new THREE.MeshBasicMaterial({
    color:0xFFD203, side:THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh13);
mesh13.position.set(7,-7,37);

//CHIMENEA
var geometry07 = new THREE.BoxGeometry(20,100,20);
var material07= new THREE.MeshLambertMaterial({
   color:0xD43D02, side:THREE.DoubleSide
   });
var mesh14=new THREE.Mesh(geometry07,material07);
mesh14.position.set(-25,50,-15);
//scene.add(mesh14);  

var geometry08 = new THREE.BoxGeometry(25,5,25);
var material08= new THREE.MeshLambertMaterial({
   color:0xFFFFFF, side:THREE.DoubleSide
   });
var mesh15=new THREE.Mesh(geometry08,material08);
mesh15.position.set(-25,100,-15);
//scene.add(mesh15);  

//VENTANAS
var geometry09 = new THREE.BoxGeometry(40,30,5);
var material09= new THREE.MeshLambertMaterial({
   color:0xED9000, side:THREE.DoubleSide
   });
var mesh16=new THREE.Mesh(geometry09,material09);
mesh16.position.set(-22,50,35);
//scene.add(mesh16);  

var mesh17=new THREE.Mesh(geometry09,material09);
mesh17.position.set(22,50,35);
//scene.add(mesh17);  

var geometry10 = new THREE.BoxGeometry(35,25,5);
var material10= new THREE.MeshLambertMaterial({
   color:0x00B4E3, side:THREE.DoubleSide
   });
var mesh18=new THREE.Mesh(geometry10,material10);
mesh18.position.set(-22,50,36);
//scene.add(mesh18);  

var mesh19=new THREE.Mesh(geometry10,material10);
mesh19.position.set(22,50,36);
//scene.add(mesh19);  

var geometry11 = new THREE.BoxGeometry(40,3,5);
var material11= new THREE.MeshLambertMaterial({
   color:0xED9000, side:THREE.DoubleSide
   });
var mesh20=new THREE.Mesh(geometry11,material11);
mesh20.position.set(-22,50,36.5);
//scene.add(mesh20);  

var mesh21=new THREE.Mesh(geometry11,material11);
mesh21.position.set(22,50,36.5);
//scene.add(mesh21);  

var geometry12 = new THREE.BoxGeometry(5,30,5);
var material12= new THREE.MeshLambertMaterial({
   color:0xED9000, side:THREE.DoubleSide
   });
var mesh22=new THREE.Mesh(geometry12,material12);
mesh22.position.set(-22,50,36.5);
//scene.add(mesh22);  

var mesh23=new THREE.Mesh(geometry12,material12);
mesh23.position.set(22,50,36.5);
//scene.add(mesh23);  


var CASA = new THREE.Group();
CASA.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18, mesh19, mesh20, mesh21,mesh22,mesh23);
CASA.position.set(x,y,z);

return CASA;
}
