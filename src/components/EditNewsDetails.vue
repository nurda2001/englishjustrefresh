<template>
	<v-dialog width="350px" persistent v-model="editDialog"> 
		<v-btn
              color="pink"
              dark
              small
              absolute
              bottom
              left
              fab
              slot="activator"
            >
              <v-icon>edit</v-icon>
            </v-btn>
		<v-card>
			<v-container>
				<v-layout row wrap>
					<v-flex xs12>
						<v-card-title><h4>Поменять Новость</h4></v-card-title>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
				<v-layout row wrap>
					<v-flex xs12>
						<v-card-text>
							<v-text-field
                              name="title"
                              label="Имя"
                              id="title"
                              v-model="editedTitle"
                              required
							></v-text-field>
							<v-text-field
                              name="description"
                              label="Описание"
                              id="description"
                              v-model="editedDescription"
                              multi-line
                              required
							></v-text-field>
						</v-card-text>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
				<v-layout row wrap>
					<v-flex xs12>
						<v-card-actions>
							<v-btn flat class="blue--text darken-1" @click="editDialog = false">Закрыть</v-btn>
							<v-btn flat class="blue--text darken-1" @click="onSaveChanges">Изменить</v-btn>
						</v-card-actions>
						<v-card-actions>
							<v-btn class="error" @click="Deleting">Удалить Запись</v-btn>
						</v-card-actions>
					</v-flex>
				</v-layout>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script>
	export default{
		props: ['news'],
		data(){
			return{
				editedTitle: this.news.title,
				editedDescription: this.news.description,
				editDialog: false 
			}
		},
		methods:{
			onSaveChanges(){
				if(this.editedTitle.trim() ===  '' || this.editedDescription.trim() === ''){
					return
				}
				this.editDialog = false
				this.$store.dispatch('updateNewData', {
					id: this.news.id,
					title: this.editedTitle,
					description: this.editedDescription
				})
			},
			Deleting(id){
				this.editDialog = false
				if(confirm('Sure?')){
					alert('Идет процесс Удаления');
				}else{
					this.editDialog = false
				}
			}
		}
	}
</script>

<style scoped>
	h4{
		font-size: 2em;
	}
</style>