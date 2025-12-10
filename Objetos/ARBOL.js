import* as THREE from "../js/three.module.js";

export default function E02({x,y,z}){
//ESFERAS
    var geometry01 = new THREE.SphereGeometry(0.5,100,100);
var material01 = new THREE.MeshBasicMaterial({
    color:0xFFDB00, side:THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(1.2,13,0);

var mesh02 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh02);
mesh02.position.set(0,9,3);

var mesh03 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh03);
mesh03.position.set(-4,5.5,0);

var geometry02 = new THREE.SphereGeometry(0.5,100,100);
var material02 = new THREE.MeshBasicMaterial({
    color:0xFF0000, side:THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh04);
mesh04.position.set(4.3,5,0);
      
var mesh05 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh05);
mesh05.position.set(1,9,-3);
      
var mesh06 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh06);
mesh06.position.set(-1.8,12,0);

var mesh07 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh07);
mesh07.position.set(-3,9,0);

var geometry03 = new THREE.SphereGeometry(0.5,100,100);
var material03 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh08);
mesh08.position.set(0,5,4.2);

var mesh09 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh09);
mesh09.position.set(3,9,0);

var mesh10 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh10);
mesh10.position.set(0,6,-3.5);

var mesh11 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh11);
mesh11.position.set(0,12,1.7);

var mesh12 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh12);
mesh12.position.set(0,12.2,-1.7);

var mesh13 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh13);
mesh13.position.set(0,9,3);

//TRONCO
var geometry06 = new THREE.CylinderGeometry(1.5,1.5,7,100,50,0,4);
var material06 = new THREE.MeshBasicMaterial({
    color:0xB57002, side:THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh14);
mesh14.position.set(0,3.5,0);


//TAPA DEL TRONCO Y ARBOL
var geometry07 = new THREE.CircleGeometry(1.5,100);
var material07 = new THREE.MeshBasicMaterial({
    color:0xB57002, side:THREE.DoubleSide
});
var mesh15 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh15);
mesh15.position.set(0,0,0);
mesh15.rotation.set(1.57,0,0);

var geometry08 = new THREE.CircleGeometry(5,100);
var material08 = new THREE.MeshBasicMaterial({
    color:0x52B502, side:THREE.DoubleSide
});
var mesh16 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh16);
mesh16.position.set(0,4,0);
mesh16.rotation.set(1.57,0,0);

var geometry16 = new THREE.CircleGeometry(4,100);
var material16 = new THREE.MeshBasicMaterial({
    color:0x52B502, side:THREE.DoubleSide
});
var mesh17 = new THREE.Mesh(geometry16,material16);
//scene.add(mesh17);
mesh17.position.set(0,7.5,0);
mesh17.rotation.set(1.57,0,0);

var geometry17 = new THREE.CircleGeometry(2.5,100);
var material17 = new THREE.MeshBasicMaterial({
    color:0x52B502, side:THREE.DoubleSide
});
var mesh18 = new THREE.Mesh(geometry17,material17);
//scene.add(mesh18);
mesh18.position.set(0,11,0);
mesh18.rotation.set(1.57,0,0);

//1NIVEL ARBOL
var geometry10 = new THREE.CylinderGeometry(0,5,7,100,50,0,4);
var material10 = new THREE.MeshBasicMaterial({
    color:0x52B502, side:THREE.DoubleSide
});
var mesh19 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh19);
mesh19.position.set(0,7.5,0);

var geometry12 = new THREE.CylinderGeometry(0,4,6,100,50,0,4);
var material12 = new THREE.MeshBasicMaterial({
    color:0x52B502, side:THREE.DoubleSide
});
var mesh20 = new THREE.Mesh(geometry12,material12);
//scene.add(mesh20);
mesh20.position.set(0,10.5,0);

var geometry13 = new THREE.CylinderGeometry(0,2.5,4,100,50,0,4);
var material13 = new THREE.MeshBasicMaterial({
    color:0x52B502, side:THREE.DoubleSide
});
var mesh21 = new THREE.Mesh(geometry13,material13);
//scene.add(mesh21);
mesh21.position.set(0,13,0);

var ARBOL = new THREE.Group();
ARBOL.add(mesh01,mesh02,mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, mesh09, mesh10,mesh11,mesh12, mesh13, mesh14, mesh15, mesh16, mesh17, mesh18, mesh19, mesh20, mesh21);
ARBOL.position.set(x,y,z);

return ARBOL;
}