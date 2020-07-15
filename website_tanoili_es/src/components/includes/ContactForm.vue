<template lang="pug">
  form.flex-form(@submit.prevent="validateBeforeSubmit" )#contact_form
    .col-form
      input.input-form.ff-georgia.color-base-txt.fsty-italic.fs-14(type="text" name="nombre" id="nombre_1" placeholder="Nombre"
      v-model="nombre"
      v-validate="'required'" :class="{'invalid': errors.has('npmbre') }" data-vv-as="Telefono"
      )
      span(v-show="errors.has('nombre')" class="help alert fs-14") {{ errors.first('nombre') }}

      input.input-form.ff-georgia.color-base-txt.fsty-italic.fs-14(type="text" name="telefono" id="telefono_1" placeholder="Telefono"
      v-model="telefono"
      v-validate="'required|integer'" :class="{'invalid': errors.has('telefono') }" data-vv-as="Telefono"
      )
      span(v-show="errors.has('telefono')" class="help alert fs-14") {{ errors.first('telefono') }}
    .col-form
      input.input-form.ff-georgia.color-base-txt.fsty-italic.fs-14(type="text" name="empresa" id="empresa_1" placeholder="Empresa"
      v-model="empresa"
      v-validate="'required'" :class="{'invalid': errors.has('empresa') }" data-vv-as="Empresa"
      )
      span(v-show="errors.has('empresa')" class="help alert fs-14") {{ errors.first('empresa') }}
      input.input-form.ff-georgia.color-base-txt.fsty-italic.fs-14(type="email" name="email" id="email_2" placeholder="Correo"
      v-model="email"
      v-validate="'required|email'" :class="{'invalid': errors.has('email') }" data-vv-as="Correo"
      )
      span(v-show="errors.has('email')" class="help alert fs-14") {{ errors.first('email') }}

    .col-form-mess
      input.input-form.ff-georgia.color-base-txt.fsty-italic.fs-14(type="text" name="mensaje" id="mensaje_1" placeholder="Escribe tu mensaje"
      v-model="mensaje"
      v-validate="'required'" :class="{'invalid': errors.has('mensaje') }" data-vv-as="Mensaje"
      )
      span(v-show="errors.has('mensaje')" class="help alert fs-14") {{ errors.first('mensaje') }}
    button.fw-500.color-base-txt.mt-5.space-letter-200(
    v-show="!sucess_true"
    type="submit"
    ref="submitButton"
    data-text="Enviar mensaje"
    data-text-sending="Enviando"
    data-text-error="Error"
    data-text-sent="Enviado"
    ).button.submit.after-btn#submit_button
    span(v-show="sucess_true" class="color-base-txt ff-georgia mt-5 fs-18") {{ 'Mensaje enviado correctamente, espere a que nos pongamos en contacto con usted' }}
</template>

<script>
  export default {
    name: 'include_contactForm',
    data() {
      return {
        email: "",
        message: "",
        empresa: "",
        telefono: "",
        mensaje: "", nombre: "",
        submitButton: HTMLElement,
        sucess_true: false
      }
    },
    methods: {
      cleanForm() {
        this.email = ""
        this.mensaje = ""
        this.telefono = ""
        this.nombre = ""
        this.empresa = ""

        this.$nextTick(() => this.$validator.reset())
        setTimeout(() => {
          this.submitButton.classList.remove("success")
        }, 3000)
      },
      changeResponse(boolean_val) {
        this.sucess_true = boolean_val
        console.log(this.sucess_true)
      },
      send() {
        // code to send message
        var from = 'page@tanoili.com'
        var to = 'oil@tanoili.com'
        var subject = 'Mensaje desde la página de Tanoili'
        var message = `
        Se ha enviado un mensaje desde la página de Tanoili
        <p>Y ha adjuntado los siguientes datos</p>
        <ul>
          <li>Nombre: ${this.nombre}</li>
          <li>Correo: <a href="mailto:${this.email}" target="_top"><strong>${this.email}</strong> </a></li>
          <li>Telefono:  <a href="tel:${this.telefono}" target="_top"><strong>${this.telefono}</strong> </a></li>
          <li>Empresa ${this.empresa}</li>
        </ul>
        <p>Y se ha escrito el siguiente mensaje:</p>
        <p>${this.mensaje}</p>`

        var token = '1ca007b3-5f4e-4082-9c81-acbf30a4f4df'// ssl, domain, port 465
        // disable button
        var btn = this.submitButton;
        btn.disabled = true
        btn.dataset.text = "ENVIANDO..."
        var this_ = this;
        try {
          Email.send(
            from,
            to,
            subject,
            message,
            {
              token: token,
              callback: function done(message) {
                // enable buton
                console.log(message)
                btn.dataset.text = "Enviar mensaje"
                btn.disabled = false
                this_.changeResponse(true)
                setTimeout(() => {
                  this_.changeResponse(false)
                }, 5000);
                this_.cleanForm()
              }
            }
          )
        } catch (error) {
          console.log(error)
        }
      },
      validateBeforeSubmit() {

        this.$validator.validateAll().then((result) => {
          console.log(result)
          if (result) {
            this.send()
            return
          }
        }).catch((error) => console.error(error))
      }
    },
    mounted() {
      this.submitButton = this.$refs.submitButton
    }
  }
</script>
