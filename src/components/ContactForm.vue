<template>
  <div id="contact-field">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group id="input-group-1" label="メールアドレス" label-for="f-email">
        <b-form-input
          id="f-email"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="名前" label-for="f-name">
        <b-form-input
          id="f-name"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="内容" label-for="f-contents">
        <b-form-textarea
          id="f-contents"
          v-model="form.contents"
          placeholder="Enter text"
          rows="3"
          max-rows="6"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">入力内容を送信</b-button>
    </b-form>
  </div>
</template>

<script>
import { functions } from '@/plugins/firebase'

export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        contents: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.form.loading = true
      const mailer = functions.httpsCallable('sendMail')

      mailer(this.form)
        .then(() => {
          this.form.email = ''
          this.form.name = ''
          this.form.contents = ''
          alert('お問い合わせありがとうございます。送信完了しました')
        })
        .catch(err => {
          alert('送信に失敗しました。時間をおいて再度お試しください')
          console.log(err)
        })
        .finally(() => {
          this.form.loading = false
        })
    }
  }
}
</script>

<style scoped>
#contact-field {
  margin-top: 30px;
}
</style>
