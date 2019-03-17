<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h4 class="primary--text">Создание Новостей</h4>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-flex xs12>
				<form @submit.prevent="onCreateNews">
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field
                              name="title"
                              label="Имя"
                              id="title"
                              v-model="title"
                              required
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field
                              name="location"
                              label="Место"
                              id="location"
                              v-model="location"
                              required
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
						 <v-flex xs12 sm6 offset-sm3>
							<v-btn raised class="primary" @click="onPickFile">File</v-btn>
							<input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked">
							<!---<v-text-field
                              name="imageUrl"
                              label="ImageURL"
                              id="imageUrl"
                              v-model="imageUrl"
                              required
							></v-text-field>-->
						</v-flex>

					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-img :src="imageUrl" height="300" contain></v-img>
						</v-flex>
					</v-layout>
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field
                              name="description"
                              label="Описание"
                              id="description"
                              v-model="description"
                              multi-line
                              required
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row>
                     <v-flex xs12 sm6 offset-sm3>
                     	<h4>Выберите дату и время</h4>
                     </v-flex>
                 </v-layout>
                 <v-layout row>
                     <v-flex xs12 sm6 offset-sm3>
                     	<v-date-picker v-model="date"></v-date-picker>
                     </v-flex>
                 </v-layout>
                 <v-layout row>
                     <v-flex xs12 sm6 offset-sm3>
                     	<v-time-picker v-model='time' format="24hr"></v-time-picker>
                     </v-flex>
                 </v-layout>
					<v-layout row>
                     <v-flex xs12 sm6 offset-sm3>
                     	<v-btn :disabled="!formIsValid" type="submit">Create</v-btn>
                     </v-flex>
                 </v-layout>
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default{
	data(){
		return{
			title: '',
			location: '',
			description: '',
			imageUrl: '',
			date: new Date().toISOString().substr(0, 10),
			time: new Date(),
			image: null
		}
	},
	computed:{
		formIsValid(){
			return this.title !== '' &&
			 this.location !== '' &&
			  this.image !== '' &&
			   this.description !== ''
		},
		submittableDateTime(){
			const date = new Date(this.date)
			if(typeof this.time === 'string'){
				let hours = this.time.match(/^(\d+)/)[1]
				const minutes = this.time.match(/:(\d+)/)[1]
				date.setHours(hours)
				date.setMinutes(minutes)
			} else {
				date.setHours(this.time.getHours())
				date.setMinutes(this.time.getMinutes())
			}
			return date
		}
	},
	methods: {
		onCreateNews(){
			if(!this.formIsValid){
				return
			}
			if(!this.imageUrl){
				return
			}
			const newsData = {
				title: this.title,
				location: this.location,
				imageUrl: this.imageUrl,
				description: this.description,
				date: this.submittableDateTime
			}
			this.$store.dispatch('createNews2',  newsData)
			this.$router.push('/news')
		},
		onPickFile(){
			this.$refs.fileInput.click();
		},
		onFilePicked (event){
			const files = event.target.files
			let filename = files[0].name
			if(filename.lastIndexOf('.') <=0){
				return alert('Пожалуйста выберите правильный файл')
			}
			const fileReader = new FileReader()
			fileReader.addEventListener('load', () =>{
				this.imageUrl = fileReader.result
			})
			fileReader.readAsDataURL(files[0])
			this.image = files[0]
		}
	}
}
</script>

<style scoped>
	h4{
		font-size: 2em;
	}
</style>