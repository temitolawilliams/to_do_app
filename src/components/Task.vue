<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    v-bind:class="[task.reminder ? 'reminder' : 'blue', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task.id)" class="fas fa-times" />
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>

<style scoped>
.fas {
  color: rgb(22, 10, 10);
}
.task {
  background: linear-gradient(135deg, #031f35, #afb3dd);
  margin: 5px;
  padding: 5px 20px;
  cursor: pointer;
  color: #fff;
  width: 100%;
  height: auto;
  border-radius: 20px;
}
.reminder {
  border-right: 10px solid rgb(16, 240, 16);
  border-left: 10px solid rgb(16, 240, 16);
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
