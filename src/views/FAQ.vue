<template>
<main class="faq">
  <h1>Frequently Asked Questions</h1>
  <Loading v-if="remoteDataBusy"/>
  <div class="error" v-if="hasRemoteErrors">
    Can't load the questions
  </div>
  <section class="list">
    <article v-for="(question,index) of questionList" :key="index">
      <h2 v-html="question.title"></h2>
      <p v-html="question.content"></p>
    </article>
  </section>
</main>
</template>

<script>
import RemoteData from "@/mixins/RemoteData";

export default {
  name: "FAQ",
  mixins: [
      RemoteData({
        questionList: 'questions'
      }),
  ]
}
</script>

<style scoped>

</style>