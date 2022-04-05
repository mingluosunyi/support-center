<template>
<div class="new-ticket">
  <SmartForm
      title="New ticket"
      :operation="operation"
      :valid="valid">
    <FormInput
        name="title"
        v-model="title"
        placeholder="Short description (max 100 chars)"
        maxlength="100"
        required
    />
    <FormInput
        name="description"
        v-model="description"
        type="textarea"
        placeholder="Describe your problem in details"
        rows="4">
    </FormInput>
    <template slot="actions">
      <router-link
          tag="button"
          :to="{name: 'tickets'}"
          class="secondary"
      >
        Go back
      </router-link>
      <button
          type="submit"
          :disabled="!valid"
      >
        Send ticket
      </button>
    </template>
  </SmartForm>
</div>
</template>

<script>
import PersistantData from "@/mixins/PersistantData"

export default {
  name: "NewTicket",
  mixins:[
      PersistantData('NewTicket',['title','description'])
  ],
  data(){
    return {
      title: '',
      description: ''
    }
  },
  computed: {
    valid () {
      return !!this.title && !!this.description
    }
  },
  methods:{
    async operation(){
      const result = await this.$fetch('tickets/new',{
        method: 'POST',
        body: JSON.stringify({
          title: this.title,
          description: this.description
        })
      })
      this.title = this.description = ''
    }
  }
}
</script>

<style scoped>

</style>