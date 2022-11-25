import React from 'react'


export const Main = () => {
  return (
    <main className='principal d-flex flex-column'>
      <section className='contenedor-formulario bg-info d-flex flex-column p-4 gap-3 align-items-center justify-content-center'>
        <form class="row g-3 d-flex p-3 col-11 justify-content-between">
          <section className='titulo-formulario'>
            <h3>Registro Producto</h3>
          </section>
          <section class="form-item col-md-4">
            <label for="validationDefault01" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="validationDefault01" placeholder='Pasionaria' required />
          </section>
          <section class="form-item col-2">
            <label for="validationDefault04" class="form-label">Sexo</label>
            <select class="form-select" id="validationDefault04" required>
              <option selected disabled value="">Seleccione...</option>
              <option>Macho</option>
              <option>Hembra</option>
            </select>
          </section>

          <section class="form-item col-md-2">
            <label for="validationDefault02" class="form-label">Referencia</label>
            <input type="text" class="form-control" id="validationDefault02" placeholder="Referencia" required />
          </section>

          <section class="form-item col-md-2">
            <label for="validationDefault03" class="form-label">Tamaño</label>
            <input type="number" class="form-control" id="validationDefault03" placeholder='10cm' required />
          </section>

          <section class="form-item col-md-2">
            <label for="validationDefault04" class="form-label">Cantidad</label>
            <input type="number" class="form-control" id="validationDefault04" placeholder='4' required />
          </section>

          <section class="form-item col-md-12">
            <label for="validationDefault05" class="form-label">Descripción</label>
            <textarea class="form-control" id="validationDefault06" placeholder="Es una planta que..." rows="4" required />
          </section>
          <section class="form-button d-flex justify-content-center col-12 ">
            <button class="btn btn-primary" type="submit">Enviar</button>
          </section>


        </form>
      </section>
    </main>
  )
}
