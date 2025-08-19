export default {
	property: "User Name",
	getGendersFromTable() {
		let genders = GetGenders.data;
		return genders.map(g => ({
			label: g.gender,
			value: g.gender
		}))
	},
	async selectUsersFromCountry(){
		try{
			const contries = await FindCountry.run();
			const userFromCountry = await FindUserFromCountry.run({
				country:  contries[0].country
			});
			return userFromCountry;
		}catch(e){
			console.log(e);
		}
	}
}