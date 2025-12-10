import* as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

var geometry01 = new THREE.CylinderGeometry(1.5,1.5,19,100,50,10,6);
var texture1= new THREE.TextureLoader().load("./image/baston.jpg");
var material01 = new THREE.MeshLambertMaterial({map:texture1});
    var mesh01=new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,10,0);

var geometry02 = new THREE.CylinderGeometry(1.5,1.5,19,100,50,10,6);
var texture2= new THREE.TextureLoader().load("./image/baston.jpg");
var material02 = new THREE.MeshLambertMaterial({map:texture1});
    var mesh02=new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(15,10,0);

//letrero
var geometry03 = new THREE.BoxGeometry(2,3,13);

var texture3= new THREE.TextureLoader().load("./image/letrero.jpg");
var material3= new THREE.MeshLambertMaterial({map:texture3});
var mesh03=new THREE.Mesh(geometry03,material3);
mesh03.position.set(7,17,0);
mesh03.rotation.set(0,14.1,0);
//scene.add(mesh03);

//esferas
var geometry04 = new THREE.SphereGeometry(2,100,100);
var material04 = new THREE.MeshBasicMaterial({
    color:0xE9B63B, side:THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,20,0);

var geometry05 = new THREE.SphereGeometry(2,100,100);
var material05 = new THREE.MeshBasicMaterial({
    color:0xE9B63B, side:THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.position.set(15,20,0);

var Entrada = new THREE.Group();
Entrada.add(mesh01,mesh02,mesh03,mesh04,mesh05);
Entrada.position.set(x,y,z);

return Entrada;
}

