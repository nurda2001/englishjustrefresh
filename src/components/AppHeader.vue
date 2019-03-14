<template>
	<div>
		<v-navigation-drawer  absolute temporary v-model="drawer" class="hidden-md-and-up">
		<v-list>
			<v-list-tile v-for="(item,i) in menuItems" :key="`navdrawer${i}`" :to="item.route">
				<v-list-tile-action>
					<v-icon v-html="item.icon"></v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
						<v-list-tile-title v-text="item.title"></v-list-tile-title>
					</v-list-tile-content>
			</v-list-tile>
		</v-list>
		</v-navigation-drawer>
		<v-toolbar  fixed app color="White">
			<v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<router-link to="/" tag="span" style=" cursor: pointer">
			<v-toolbar-title v-text="'EnglishInAktau'"></v-toolbar-title>
		</router-link>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn v-for="(item, i) in menuItems" flat :key="`menuItem${i}`" :to="item.route" >
					<v-icon left v-html="item.icon"></v-icon>
					{{item.title}}
				</v-btn>

			</v-toolbar-items>
		</v-toolbar>
	</div>	
</template>

<script>
	export default{
		data(){
			return{
				drawer: false
			}
		},
		computed:{
			menuItems(){
				return[
				       {
                       	icon: 'attach_money',
                       	title: 'Прайс-Лист',
                       	route: '/price'
                       },
                       {
                       	icon: 'visibility', 
                       	title: 'Галлерея', 
                       	route: '/gallery'
                       },
                         {
                       	icon: 'account_circle',
                       	title: 'Для Студентов',
                       	route: '/students'
                       },
                         {
                       	icon: 'contacts',
                       	title: 'Контакты',
                       	route: '/contacts'
                       },
                         {
                       	icon: 'contact_support',
                       	title: 'О нас',
                       	route: '/about'
                       }
				]
			}
		}
	}
</script>

<style scoped>
</style>