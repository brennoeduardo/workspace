<template>
    <div>
        <div class="clock-container">
            <h1 class="clock">{{ currentTime }}</h1>
        </div>
        <v-col>
            <v-row no-gutters justify="center" class="d-flex justify-center align-center ga-2">
                <h1 class="container">Tarefas do dia</h1>
                <v-btn @click="cardAddTask = true" color="#333" variant="plain" icon="mdi-plus" rounded/>
                <v-tooltip activator="parent" text="Adicionar Tarefa" location="top" ></v-tooltip>
            </v-row>
        </v-col>

        <v-card v-if="cardAddTask" color="black" class="mx-auto" width="400">
            <v-card-title class="text-center"> Adicionar tarefa </v-card-title>
            <v-card-text>
                <v-text-field v-model="task.nome" label="Nome da tarefa" variant="outlined"></v-text-field>
                <v-text-field v-model="task.descricao" label="Descrição da tarefa" variant="outlined"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="cardAddTask = false" color="red">Cancelar</v-btn>
                <v-btn @click="addTask" color="green">Adicionar</v-btn>
            </v-card-actions>
        </v-card>

    </div>
    <v-card v-for="(task, index) in tasks" :key="`${task}-${index}`" class="mx-auto mt-2" width="600">
        <v-card-title>
            {{ task.nome }}
        </v-card-title>
        <v-card-text>
            {{ task.descricao }}
        </v-card-text>
        <v-card-actions>
            <v-btn @click="removeTask(index)" color="red" icon>  
                <v-icon>mdi-close</v-icon>
                <v-tooltip activator="parent" text="Cancelar Tarefa" location="top"></v-tooltip></v-btn>
            <v-btn @click="finalizyTask(index)" color="green" icon>
                <v-icon>mdi-check</v-icon>
                <v-tooltip activator="parent" text="Finalizar tarefa" location="top"></v-tooltip>
            </v-btn>
        </v-card-actions>
    </v-card>


</template>

<script setup>

const task = ref({
    nome: '',
    descricao: ''
})

const tasks = ref([])
const cardAddTask = ref(false)

const addTask = () => {
    tasks.value.push(task.value)
    task.value = {
        nome: '',
        descricao: ''
    }
    cardAddTask.value = false
}

const removeTask = (index) => {
    tasks.value.splice(index, 1)
}

const finalizyTask = (index) => {
    tasks.value.splice(index, 1)
}

const currentTime = ref(new Date().toLocaleString());

const updateTime = () => {
  currentTime.value = new Date().toLocaleString();
}

onMounted(() => {
  const intervalId = setInterval(updateTime, 1000);
  
  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Jersey+10&family=Jersey+15&family=Silkscreen:wght@400;700&family=Sixtyfour&display=swap');

.container{
    font-family: 'Jersey 15', sans-serif;
    font-size: 3em;
    color: #555;
    text-shadow: 2px 2px 4px rgba(161, 161, 161, 0.2);
}

.clock-container {
  display: flex;
  justify-content: center;
  align-items: center;
    margin-top: 3em;
}

.clock {
  font-family: 'Jersey 10', sans-serif;
  font-size: 4em;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
