
import* as THREE from "../js/three.module.js";
      
 
export default function E01({x,y,z}){

// Espacio para colocar los objetos
    var geometry01 = new THREE.SphereGeometry(3,100,100);
var material01 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,2.5,0);

var geometry02 = new THREE.SphereGeometry(2,100,100);
var material02 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,6,0);

var geometry03 = new THREE.SphereGeometry(1.5,100,100);
var material03 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(0,8.5,0);

//BOTONES
var geometry04 = new THREE.SphereGeometry(0.3,100,100);
var material04 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,5,1.9);
      
var mesh05 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh05);
mesh05.position.set(0,6,2.1);
      
var mesh06 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh06);
mesh06.position.set(0,7,1.8);
      
//OJOS
var geometry05 = new THREE.SphereGeometry(0.3,100,100);
var material05 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh07);
mesh07.position.set(0.5,9,1.3);

var mesh08 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh08);
mesh08.position.set(-0.5,9,1.3);

//NARIZ
var geometry06 = new THREE.CylinderGeometry(0,0.2,1.5,100,50,0,4);
var material06 = new THREE.MeshBasicMaterial({
    color:0xFA730F, side:THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh09);
mesh09.position.set(0,8.5,2.1);
mesh09.rotation.set(1.57,0,0);

//SOMBRERO
var geometry07 = new THREE.CircleGeometry(2,100);
var material07 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh10);
mesh10.position.set(0,9.6,0);
mesh10.rotation.set(1.57,0,0);

var geometry08 = new THREE.CylinderGeometry(1.2,1.2,1.5,100,50,0,4);
var material08 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh11);
mesh11.position.set(0,10.35,0);

var geometry09 = new THREE.CircleGeometry(1.2,100);
var material09 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh12 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh12);
mesh12.position.set(0,11.1,0);
mesh12.rotation.set(1.57,0,0);

//BRAZO 1
var geometry10 = new THREE.CylinderGeometry(0.1,0.1,3,100,50,0,4);
var material10 = new THREE.MeshBasicMaterial({
    color:0xA14400, side:THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh13);
mesh13.position.set(-2.5,7.5,0);
mesh13.rotation.set(0,0,0.500);

var geometry11 = new THREE.CylinderGeometry(0.1,0.1,0.5,100,50,0,4);
var material11 = new THREE.MeshBasicMaterial({
    color:0xA14400, side:THREE.DoubleSide
});
var mesh14 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh14);
mesh14.position.set(-3.3,8.4,0);
mesh14.rotation.set(0,0,1.5);

var mesh15 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh15);
mesh15.position.set(-2.9,8.6,0);
mesh15.rotation.set(0,0,-0.255);

//BRAZO 2
var mesh16 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh16);
mesh16.position.set(2.5,7.5,0);
mesh16.rotation.set(0,0,-0.500);

var mesh17 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh17);
mesh17.position.set(3.3,8.4,0);
mesh17.rotation.set(0,0,-1.5);

var mesh18 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh18);
mesh18.position.set(2.9,8.6,0);
mesh18.rotation.set(0,0,0.255);

//BUFANDA
var geometry12 = new THREE.CylinderGeometry(1.4,1.4,0.5,100,50,0,4);
var material12 = new THREE.MeshBasicMaterial({
    color:0xFF0000, side:THREE.DoubleSide
});
var mesh19 = new THREE.Mesh(geometry12,material12);
//scene.add(mesh19);
mesh19.position.set(0,7.6,0);

var SnowMan = new THREE.Group();
SnowMan.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19);
SnowMan.position.set(x,y,z);
 
return SnowMan;
}