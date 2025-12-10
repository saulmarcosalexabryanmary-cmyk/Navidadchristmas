import* as THREE from "../js/three.module.js";

export default function E01({x,y,z}){
// Espacio para colocar los objetos
    var geometry01 = new THREE.SphereGeometry(7,100,100);
var material01 = new THREE.MeshBasicMaterial({
    color:0xDB2100, side:THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,4,0);

var geometry02 = new THREE.CylinderGeometry(7,7,4,100,50,0,4);
var material02 = new THREE.MeshBasicMaterial({
    color:0xFFDB38, side:THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,4,0);

var geometry03 = new THREE.CylinderGeometry(0.5,2,2,100,50,0,4);
var material03 = new THREE.MeshBasicMaterial({
    color:0xFFDB38, side:THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(0,11.5,0);

var geometry04 = new THREE.CylinderGeometry(0.5,0.5,12,100,50,0,4);
var material04 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,8,0);

var ESFERA = new THREE.Group();
ESFERA.add(mesh01,mesh02,mesh03,mesh04);
ESFERA.position.set(x,y,z);

return ESFERA;
}
