<template>
  <Layout :style="{ padding: '0 24px 24px' }">
    <Content :style="{ padding: '24px', minHeight: '280px' ,width:'80%'}">
     <Card :bordered="false">
            <p slot="title">记录日记</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </Content>
  </Layout>
</template>

<script>
export default {
  components: {
 
   
  },
  data() {
   return{

   }
  },
  mounted() {}
};
</script>
<style scoped>


</style>



