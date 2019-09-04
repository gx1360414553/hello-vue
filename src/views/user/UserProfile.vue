<template>
    <div>
      个人信息 ID = {{ id}}
    </div>
</template>

<script>
    export default {
      props: ["id"],
      name: "UserProfile"
    }
</script>

<style scoped>

</style>
