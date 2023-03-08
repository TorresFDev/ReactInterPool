

import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "./FirebaseConfig/firebase"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const MySwal = withReactContent(Swal)


const Show = ()=>{

// 1 configurar los hooks
const [players,setPlayers]= useState([])

// 2 referenciamos la db de firestore
const playersCollection = collection(db,"Barril")

//3 funcion para mostrar todos los docs
const getPlayers= async () =>{
    const data = await getDocs (playersCollection)
console.log (data.docs)
setPlayers(
    data.docs.map((doc)=>({...doc.data(),id:doc.id}))
)
/*  console.log (players)  */
}

// 4 funcion para eliminar un doc
const deletePlayer= async(id)=>{
const playerDoc= doc(db,"Barril",id)
await deleteDoc (playerDoc)
getPlayers()
}


//5 funcion para la confirmacion de swwet alert
const confirmDelete=(id)=>{
    Swal.fire({
        title: 'Estas Seguro/a',
        text: "No podes revertir este cambio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo Borrarlo'
      }).then((result) => {
        if (result.isConfirmed) {
            deletePlayer(id) //llamamos a la funcion eliminar
          Swal.fire(
            'Borrado!',
            'Has eliminado el Documento.',
            'success'
          )
        }
      })


}
//6 use useEffect
useEffect(()=>{
    getPlayers()
},[])

//7 devolvemos la vista de nuestro componente
return(
 // fragment
 <> 
 <footer>
<div className="container">
<div className="row">
    <div className="col">
        <div className="d-grid gap-2">
<Link to="/create" className="btn btn-secondary mt-2 mb-2">CREAR</Link>
        </div>
<table className="table table-dark table-hover">
<thead>
    <tr>
        <th>Master</th>
        <th>Primera</th>
        <th>Segunda</th>
        <th>Promocional</th>
    </tr>
</thead>
<tbody>
{players.map((player)=>(
<tr key={player.id}>
    
    <td>{player.jugadorPrimera}</td>
    <td>{player.jugadorSegunda}</td>
    <td>
        <Link to={`/edit/${player.id}`} className="btn btn-light" ><i className="fa-solid fa-pencil"></i></Link>
    <button onClick={()=>{confirmDelete(player.id)}} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
    </td>
</tr>


))}

</tbody>


</table>
    </div>  

</div>


</div>
</footer>
</>
)

}

export default Show