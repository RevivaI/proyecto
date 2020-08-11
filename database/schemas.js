import Realm from 'realm';
let realm ;


// Define your models and their properties
export const cliente = ({
  schema: [{name: 'cliente',
  properties:
  {
    ig:'string' ,
    nombre: 'string',
    rut: 'string'
  }}]
});


export const insertNewCliente= newCliente =>new Promise((resolve,reject)=>{
  Realm.open({schema:[cliente]}).then(realm=>{
     realm.write(() => {
        realm.create(cliente,newCliente);
        resolve(newCliente);
         });
     }).catch((error)=>reject(error));
     Alert.alert("Student Details Added Successfully.")
   });






export default realm=new Realm([cliente]);
