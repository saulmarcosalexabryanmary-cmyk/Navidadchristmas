import* as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

//plano
var geometry01 = new THREE.BoxGeometry(50,2.5,50);
var material1= new THREE.MeshLambertMaterial({
   color:0x9CC6DB, side:THREE.DoubleSide
   });
var mesh01=new THREE.Mesh(geometry01,material1);
mesh01.position.set(0,-6,0);
//scene.add(mesh01);    
//PAREDES
      var geometry02 = new THREE.BoxGeometry(50,40,2);
var material02 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,15,-24);

var mesh03 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh03);
mesh03.position.set(0,15,24);

//MARCO DE LA PUERTA
 var geometry03 = new THREE.BoxGeometry(2,30,2);
var material03 = new THREE.MeshLambertMaterial({
    color:0xC70000, side:THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh04);
mesh04.position.set(24,10,10);

var mesh05 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh05);
mesh05.position.set(24,10,-10);

 var geometry04 = new THREE.BoxGeometry(2,20,2);
var material04 = new THREE.MeshLambertMaterial({
    color:0xC70000, side:THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh06);
mesh06.position.set(24,24,0);
mesh06.rotation.set(1.57,0,0);

//PUERTA
var geometry05 = new THREE.BoxGeometry(2,28,17.9);
var material05 = new THREE.MeshLambertMaterial({
    color:0xA66F00, side:THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh07);
mesh07.position.set(24,9,0);

//TECHO
var geometry06 = new THREE.BoxGeometry(50,50,2);
var material06 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh08);
mesh08.position.set(0,35,0);
mesh08.rotation.set(1.57,0,0);

var geometry07 = new THREE.BoxGeometry(50,40,2);
var material07 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh09);
mesh09.position.set(-24,15,0);
mesh09.rotation.set(0,1.57,0);

var geometry08 = new THREE.BoxGeometry(50,40,2);
var material08 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh10);
mesh10.position.set(23,15,0);
mesh10.rotation.set(1.57,1.57,1.57);

//CHIMENEA
var geometry08 = new THREE.BoxGeometry(10,20,2);
var material08 = new THREE.MeshLambertMaterial({
    color:0xB80000, side:THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh11);
mesh11.position.set(15,40,15);
mesh11.rotation.set(1.57,1.57,1.57);

var mesh12 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh12);
mesh12.position.set(5,40,15);
mesh12.rotation.set(1.57,1.57,1.57);

var mesh13 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh13);
mesh13.position.set(10,40,20);
mesh13.rotation.set(0,0,0);

var mesh14 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh14);
mesh14.position.set(10,40,10);
mesh14.rotation.set(0,0,0);

var geometry09 = new THREE.BoxGeometry(15,15,3);
var material09 = new THREE.MeshLambertMaterial({
    color:0xFFB624, side:THREE.DoubleSide
});
var mesh15 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh15);
mesh15.position.set(10,48,15);
mesh15.rotation.set(1.57,0,0);

//VENTANA
var geometry10 = new THREE.BoxGeometry(10,20,2);
var material10 = new THREE.MeshLambertMaterial({
    color:0xFF8800, side:THREE.DoubleSide
});
var mesh16 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh16);
mesh16.position.set(0,20,22);
mesh16.rotation.set(0,1.57,0);

var mesh17 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh17);
mesh17.position.set(15,20,22);
mesh17.rotation.set(0,1.57,0);

var mesh18 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh18);
mesh18.position.set(-15,20,22);
mesh18.rotation.set(0,1.57,0);

var geometry11 = new THREE.BoxGeometry(10,30,2);
var material11 = new THREE.MeshLambertMaterial({
    color:0xFF8800, side:THREE.DoubleSide
});
var mesh19 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh19);
mesh19.position.set(0,11,22);
mesh19.rotation.set(1.57,0,1.57);

var mesh20 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh20);
mesh20.position.set(0,29,22);
mesh20.rotation.set(1.57,0,1.57);

var geometry12 = new THREE.BoxGeometry(18,30,2);
var material12 = new THREE.MeshLambertMaterial({
    color:0x3DCFFF, side:THREE.DoubleSide
});
var mesh21 = new THREE.Mesh(geometry12,material12);
//scene.add(mesh21);
mesh21.position.set(0,20,25);
mesh21.rotation.set(0,0,1.57);

var PUERTA = new THREE.Group();
PUERTA.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15, mesh16, mesh17, mesh18, mesh19, mesh20, mesh21);
PUERTA.position.set(x,y,z);

return PUERTA;
}