import React from 'react';
import './topFAQ.css';

const TopFAQ = () => {

  // const [auxiliar, setAuxiliar] = useState('hidden');

  // useEffect(() => {
  //   handleShow(showStatus)
  // })

  // function handleShow(showStatus) {
  //   if(showStatus) {
  //     setAuxiliar('fadeIn');
  //   } else {
  //     setAuxiliar('fadeOut hidden');
  //   }
  // }
  
  return (
    <div className="container-fluid black-background text-white-color py-4 px-0">
      <div className="text-center green-background">
        <h1 className="font-bold fs-1 p-5">Top FAQ's</h1>
      </div>
      <div className="container py-4">
        <div className="row">

          <div className="col-12">
            <h3>¿Es dolorosa la recuperación?</h3>
            <p>No. La tecnología actual ofrece una cirugía sin dolor; las pequeñas molestias son manejadas con analgésicos como el ibuprofeno o el paracetamol.</p>
          </div>
          <div className="col-12">
            <h3>¿Cuánto tiempo después puedo regresar al ejercicio?</h3>
            <p>En 3 semanas.</p>
          </div>
          <div className="col-12">
            <h3>¿Después de cuántos días después de la cirugía puedo viajar en avión?</h3>
            <p>Después de 12 días puedes viajar por vía aérea así como incorporarte a todas tus labores.</p>
          </div>
          <div className="col-12">
            <h3>¿En qué tiempo puedo ver resultados?</h3>
            <p>2-4 semanas; sin embargo, el resultado definitivo se evalúa al año. </p>
          </div>
          <div className="col-12">
            <h3>¿Cuándo se retiran los puntos?</h3>
            <p>Después de 12 días retiramos puntos, así como el pequeño yeso que protege a tu nariz</p>
          </div>
          <div className="col-12">
            <h3>¿Cuánto tiempo dura la cirugía?</h3>
            <p>3hrs promedio en cirugía primaria y de 5-7hrs rinoplastia secundaria.</p>
          </div>
          <div className="col-12">
            <h3>¿Qué es rinoplastia primaria?</h3>
            <p>Cuando realizamos una cirugía de nariz en una nariz que nunca ha sido manipulada ya sea con cirugía o con inyectables.</p>
          </div>
          <div className="col-12">
            <h3>¿Qué es una rinoplastia secundaria?</h3>
            <p>Cuando realizamos una cirugía en aquella nariz que ya fue operada por otro profesional y que el resultado no fue satisfactorio.</p>
          </div>
          <div className="col-12">
            <h3>¿Qué es un retoque?</h3>
            <p>Es una pequeña intervención para mejorar el resultado de la cirugía de nariz; el 95% de los pacientes NO REQUIEREN UN RETOQUE.</p>
          </div>
          <div className="col-12">
            <h3>¿Se colocan tapones después de la cirugía?</h3>
            <p>NO; Solo colocamos una tablilla de silicona para evitar complicaciones como tejido cicatrízal entre el tabique nasal y los cornetes; así como un hematoma septal (coágulos en el septum nasal).</p>
          </div>
          <div className="col-12">
            <h3>¿Qué complicaciones puede tener este tipo de cirugías?</h3>
            <p>Ninguna si realizas las indicaciones al pie de la letra. Sin embargo, está descrito sangrado postoperatorio; infección del sitio quirúrgico; fibrosis anómala; hematoma septal; reacción alérgica a medicamentos.</p>
          </div>
          <div className="col-12">
            <h3>¿Cuántos días debo usar el vendaje nasal?</h3>
            <p>Lo indico durante el primer mes después de la cirugía.</p>
          </div>
          <div className="col-12">
            <h3>¿Tendré cicatrices visibles?</h3>
            <p>Realizó rinoplastia abierta en el 90% de los casos; es decir a través de una pequeña herida en la parte baja de la nariz; está herida la suturó con lupas por lo que no es visible después de 1-3 meses.</p>
          </div>
          <div className="col-12">
            <h3>¿Puedo tratar un problema para respirar si quiero mejorar la estética de la nariz?</h3>
            <p>Un porcentaje alto tiene problemas de desviación del tabique nasal o crecimiento de cornetes; estos problemas son tratados en la misma cirugía.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopFAQ;