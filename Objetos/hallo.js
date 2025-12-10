import* as THREE from "../js/three.module.js";
      
 
export default function E01({x,y,z}){

var geometry01 = new THREE.CylinderGeometry(5,5,19,100,50,10,6);
var texture1= new THREE.TextureLoader().load("./image/hallo.jpg");
var material01 = new THREE.MeshLambertMaterial({map:texture1});
    var mesh01=new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,10.35,0);

var geometry02 = new THREE.SphereGeometry(1.7,10,10);
var material02 = new THREE.MeshBasicMaterial({
    color:0xFFC50F, side:THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(5,8,0);

var hallo = new THREE.Group();
hallo.add(mesh01,mesh02);
hallo.position.set(x,y,z);
 
return hallo;
}
