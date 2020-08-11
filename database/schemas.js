import Realm from 'realm';
let realm ;

export const cliente = ({
  schema: [{name: 'cliente',
  properties:
  {
    ig:'string' ,
    nombre: 'string',
    rut: 'string'
  }}]
});

const databaseOptions={
  path:"proyecto.realm",
  schema: [cliente],
  schemaVersion:0,
}

export const insertNewCliente= newCliente =>new Promise((resolve,reject)=>{
  Realm.open(databaseOptions).then(realm=>{
     realm.write(() => {
        realm.create(cliente,newCliente);
        resolve(newCliente);
         });
     }).catch((error)=>reject(error));
     Alert.alert("Added Successfully.")
   });

export default realm=new Realm(databaseOptions);
